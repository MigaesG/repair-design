const {src, dest, watch} = require('gulp');
const browserSync        = require('browser-sync').create();
const sass               = require('gulp-sass');
const autoprefixer       = require('gulp-autoprefixer');
const cleanCSS           = require('gulp-clean-css');
const rename             = require("gulp-rename");




function bs() {
    serveSass();
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });

    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};


function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
       }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
}



 function mincss() {
     return src("src/css/*.css")  
      .pipe(rename({suffix: ".min"}))  
      .pipe(cleanCSS())  
      .pipe(dest("./dist/styles"));
}


exports.serve = bs;
exports.mincss = mincss;