var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");

var paths = {
  css: {
    src: 'src/styles.css',
    dest: 'dist'
  },
  html: {
    src: 'src/index.html',
    dest: 'dist'
  },
  images: {
    src: 'src/assets/images/**/*.{jpg,jpeg,png}',
    dest: 'dist/assets/images',
  }
};

function html() {
  return gulp.src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
};

function css() {
  return gulp.src(paths.css.src)
    .pipe(cssnano())
    .pipe(gulp.dest(paths.css.dest));
};

function images() {
  return new Promise(function (resolve) {
    [320, 480, 640, 960, 1280].forEach(function (size) {
      gulp.src(paths.images.src)
        .pipe(imageResize({ width: size }))
        .pipe(rename(function (path) { path.basename = `${path.basename}@${size}w`; }))
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest))
    });
    resolve();
  });
}

function watch() {
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.css.src, css);
}

exports.watch = watch;

exports.default = gulp.parallel(html, css, images);
