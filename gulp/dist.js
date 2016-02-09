/**
 * name: dist gulp task
 * description: Used to:
 *   - copy source files from app/directives/ng-morris-js to /src
 *   - inject version into src files
 *   - concat files to /dist
 *   - create a .min minified file in /dist
 *   - [optionally] bump package.json and bower.json version: property
 *      > gulp dist --bump=[major, minor, patch]
 * usage:
 *   > gulp dist
 *   > gulp dist --bump=major
 *   > gulp dist --bump=minor
 *   > gulp dist --bump=patch
 */

'use strict';

module.exports = function (gulp, $, config) {

  var injectVersion = require('gulp-inject-version');
  var bump = require('gulp-bump');
  
  // Look for bump arg: --bump=[ major, minor, patch ]
  var doBump, bumpType;
  if ($.yargs.argv.bump) {
    doBump = true;
    bumpType = $.yargs.argv.bump;
  }

  gulp.task('clean-dist', function () {
    return $.del(['./dist/**/*', './src/**/*']);
  });

  // Update "version" property in bower, component, npm files:
  gulp.task('bump', function(){
    return gulp.src(['./bower.json', './component.json', './package.json'])
    .pipe($.if(doBump, bump({type:bumpType})))
    .pipe(gulp.dest('./'));
  });

  // Copy the directive files from the app to src directory
  gulp.task('copyToSrc', ['clean-dist', 'bump'], function () {
    return gulp.src([config.appDir + '/directives/ng-morris-js/**.*'])
      .pipe(injectVersion())
      .pipe(gulp.dest(config.srcDir))
  });

  // Create both min and non-min dist files
  gulp.task('dist', ['copyToSrc'], function () {
    return gulp.src([
      config.srcDir + '**/*',
      '!**/*_test.*',
      '!**/index.html'
    ])
      .pipe($.concat('ng-morris-js.js'))
      .pipe(gulp.dest(config.distDir))
      .pipe($.notify('REG DIST DONE!!'))
      .pipe($.ngAnnotate())
      .pipe($.uglify( {preserveComments: $.uglifySaveLicense} ))
      .pipe($.concat('ng-morris-js.min.js'))
      .pipe(gulp.dest(config.distDir))
      .pipe($.notify('MIN DIST DONE!!'));
  });

};
