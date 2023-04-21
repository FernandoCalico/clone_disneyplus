const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
// const sourcemaps = require('gulp-sourcemaps');
// const uglify = require('gulp-uglify');
// const obfuscate = require('gulp-obfuscate');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}
// function comprimeJavaScript() {
//     return gulp.src('./src/scripts/*.js')
//         .pipe(uglify())
//         .pipe(obfuscate())
//         .pipe(gulp.dest('./dist/scripts'))
// }

exports.default = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false} , gulp.parallel(styles))
    gulp.watch('./src/images/*', {ignoreInitial: false} , gulp.parallel(images));
}

