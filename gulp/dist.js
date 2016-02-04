'use strict';

module.exports = function (gulp, $, config) {

  gulp.task('clean-dist', function () {
    return $.del(['./dist/**/*']);
  });

  gulp.task('dist-reg', function () {
    return gulp.src([
      config.srcDir + '**/*',
      '!**/*_test.*',
      '!**/index.html'
    ])
      .pipe($.concat('ng-morris-js.js'))
      .pipe(gulp.dest(config.distDir))
      .pipe($.notify('REG DIST DONE!!'));
  });

  gulp.task('dist-min', function () {
    return gulp.src([
      config.srcDir + '**/*',
      '!**/*_test.*',
      '!**/index.html'
    ])
      .pipe($.ngAnnotate())
      .pipe($.concat('ng-morris-js.min.js'))
      .pipe($.uglify( {preserveComments: $.uglifySaveLicense} ))
      .pipe(gulp.dest(config.distDir))
      .pipe($.notify('MIN DIST DONE!!'));
  });

  gulp.task('dist', ['clean-dist', 'dist-reg', 'dist-min']);

};
