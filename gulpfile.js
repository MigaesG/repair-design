var gulp         = require('gulp');

var browserSync  = require('browser-sync').create();

var cleanCSS     = require('gulp-clean-css');

var rename       = require("gulp-rename");


gulp.task('serve', function() {

    browserSync.init({

      server: "./src/"

    });

gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('minify-css', function() {

  return gulp.src("src/css/*.css")
  
  .pipe(rename({suffix: ".min"}))
  
  .pipe(cleanCSS())
  
  .pipe(gulp.dest("app/styles"));
  
  })
