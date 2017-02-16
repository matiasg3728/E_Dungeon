var concat = require('gulp-concat');
var gulp   = require('gulp');
var watch  = require('gulp-watch');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('watch', function(){
    gulp.watch(['./js/build/*.js'], ['scripts'])
});



gulp.task('scripts', function() {
    return gulp.src('./js/build/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('es6', function(){
    return browserify('js/all.js')
        .transform('babelify', {presets: ["es2015"]})
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./js/'))
});

gulp.task('default', ['scripts', 'watch', 'es6']);