var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var gm = require('gulp-gm');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var jp2 = require('gulp-jpeg-2000');
var jxr = require('gulp-jpeg-xr');
var rename = require("gulp-rename");
var webp = require("gulp-webp");

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
}

function css() {
  return gulp.src(paths.css.src)
    .pipe(cssnano())
    .pipe(gulp.dest(paths.css.dest));
}

function imagesFormatted(size) {
  return gulp.src(paths.images.src)
    .pipe(gm(function (file) { return file.resize(size, size); }))
    .pipe(rename(function (path) { path.basename = `${path.basename}@${size}w`; }));
}

function imagesWebp(size) {
  imagesFormatted(size)
    .pipe(webp())
    .pipe(gulp.dest(paths.images.dest));
}

// Requires nConvert
function imagesJxr(size) {
  imagesFormatted(size)
    .pipe(jxr())
    .pipe(gulp.dest(paths.images.dest));
}

// Requires ImageMagick
function imagesJp2(size) {
  imagesFormatted(size)
    .pipe(jp2())
    .pipe(gulp.dest(paths.images.dest));
}

function imagesPngJpeg(size) {
  imagesFormatted(size)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function images() {
  return new Promise(function (resolve) {
    [320, 480, 640, 960, 1280].forEach(function (size) {
      imagesPngJpeg(size);
      imagesJxr(size);
      imagesWebp(size);
      imagesJp2(size);
    });
    resolve();
  });
}

function watch() {
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.images.src, images);
}

exports.watch = watch;

exports.default = gulp.parallel(html, css, images);