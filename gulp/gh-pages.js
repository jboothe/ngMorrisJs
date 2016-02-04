'use strict';

var ghPages = require('gulp-gh-pages');

module.exports = function (gulp, $, config) {

  gulp.task('clean-pub', function () {
    return $.del(['./public/**/*', './public', '.publish/**/*', '.publish/.git/**/*', '.publish/.git', '.publish']);
  });

  gulp.task('build2dist', ['clean-pub'], function () {
    return gulp.src([
      config.buildDir + '**/*'
    ])
      .pipe(gulp.dest('./public'));
  });

  gulp.task('gh-pages', ['build2dist'], function() {
    return gulp.src('./public/**/*')
      .pipe(ghPages());
  });

  gulp.task('deploy-gh-pages', ['gh-pages'], function() {
    return gulp.start('clean-pub');
  });

};
