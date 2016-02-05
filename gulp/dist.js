'use strict';

module.exports = function (gulp, $, config) {

  var injectVersion = require('gulp-inject-version');
  var bump = require('gulp-bump');

  // Look for bumpTo arg: --bump=[ major, minor, patch ]
  var doBump, bumpType;
  if ($.yargs.argv.bump) {
    doBump = true;
    bumpType = $.yargs.argv.bump;
  }

  gulp.task('clean-dist', function () {
    return $.del(['./dist/**/*', './src/**/*']);
  });

  // Update bower, component, npm versions:
  gulp.task('bump', function(){
    return gulp.src(['./bower.json', './component.json', './package.json'])
    .pipe($.if(doBump, bump({type:bumpType})))
    .pipe(gulp.dest('./'));
  });

  gulp.task('copyToSrc', ['clean-dist', 'bump'], function () {
    return gulp.src([config.appDir + '/directives/ng-morris-js/**.*'])
      .pipe(injectVersion())
      .pipe(gulp.dest(config.srcDir))
  });

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
