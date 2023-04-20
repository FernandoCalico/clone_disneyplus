const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const sourcemaps = require('gulp-sourcemaps');
// const uglify = require('gulp-uglify');
// const obfuscate = require('gulp-obfuscate');
// const imagemin = require('gulp-imagemin');

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

// function comprimeJavaScript() {
//     return gulp.src('./src/scripts/*.js')
//         .pipe(uglify())
//         .pipe(obfuscate())
//         .pipe(gulp.dest('./dist/scripts'))
// }

// function comprimeImagem() {
//     return gulp.src('./src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/images'))
// }
    
exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false} , gulp.series(compilaSass)) 
    // gulp.watch('./src/scripts/*.js', {ignoreInitial: false} , gulp.series(comprimeJavaScript)) 
    // gulp.watch('./src/images/*', {ignoreInitial: false} , gulp.series(comprimeImagem)) 
};
