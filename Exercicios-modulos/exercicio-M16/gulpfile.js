const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); 
const uglify = require ('gulp-uglify');

function comprimindoImagens(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimiJS(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}



exports.images = comprimindoImagens;
exports.javascript = comprimiJS;