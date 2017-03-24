'use strict';

var gulp         = require('gulp'),
    browserSync  = require('browser-sync').create(),
    sass         = require('gulp-sass'),
    include      = require('gulp-include'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin     = require('gulp-imagemin'),
    del          = require('del'),
    cache        = require('gulp-cache');

// server
gulp.task('browser-sync', function() {
  browserSync.init({
    open: false,
    notify: false,
    server: 'src',
    port: 1111
  });
});


// html
gulp.task('htmlInclude', function() {
  return gulp.src('src/html/*.html')
  .pipe(include())
  .pipe(gulp.dest('src'));
});


// css
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 8 versions', '> 1%', 'ie 10'],
    cascade: true
  }))
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.reload({stream: true}));
});


//img
gulp.task('imgMin', function() {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    })))
    .pipe(gulp.dest('dist/img'));
});


// biuld to production
gulp.task('build', ['clean', 'imgMin', 'sass'], function() {
  var buildCss = gulp.src('src/css/*.css')
                  .pipe(gulp.dest('dist/css'))
  var buildFonts = gulp.src('src/fonts/**/*')
                  .pipe(gulp.dest('dist/fonts'))
  var buildJs = gulp.src('src/js/**/*')
                  .pipe(gulp.dest('dist/js'))
  var buildHtml = gulp.src('src/*.html')
                  .pipe(gulp.dest('dist'));
});


// clean dist before build
gulp.task('clean', function() {
  return del.sync('dist');
});


// cache clear
gulp.task('clear', function (callback) {
  return cache.clearAll();
})


// watch
gulp.task('watch', ['htmlInclude', 'sass', 'browser-sync'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/html/**/*', ['htmlInclude']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});


// default
gulp.task('default', ['watch']);