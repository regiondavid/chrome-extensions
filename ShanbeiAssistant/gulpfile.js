const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', ()=>{
    gulp.src("./style/sass/style.scss")
        .pipe(sass({
            outputStyle: 'expanded'
        })).on('error',sass.logError)
        .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch',()=>{
    gulp.watch('./style/sass/style.scss',['sass']);
})
