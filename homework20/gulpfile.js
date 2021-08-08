const { src, dest, parallel, series, watch } = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const babel = require('gulp-babel');
const del = require("del");
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const webserver = require('gulp-webserver');
 
function webServer() {
  return src('./')
    .pipe(webserver({
      path: "dist",
      port:"8080",
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: "./index.html"
    }));
}

function browsersync() {
	browserSync.init({
		server: { baseDir: './' },
		notify: false,
		online: true
	})
}

function clean() {
  return del("dist");
}

function buildJS() {
  return src(["src/**/*.js", "src/*.js", "!src/**/*.min.js"])
    .pipe(babel({
      presets:[
        "@babel/preset-env",
        "@babel/react"
      ]
    }))
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream())
}

function buildCSS() {
  return src(["src/**/*.scss", "src/*.scss", "!src/**/*.min.css"])
    .pipe(sass({
      outputStyle: 'compressed'
  }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(cleancss( { level: { 1: { specialComments: 0 } } } ) )
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream())
}

function startWatch() {
  watch(["./src/**/*.js", "./src/*.js", "!./src/**/*.min.js"], buildJS);
  watch(["./src/**/*.scss", "./src/*.scss", "!./src/**/*.min.css"], buildCSS);
  watch(["./*.html"], browserSync.reload);
}

exports.browserSync = browsersync;
exports.buildJS = buildJS;
exports.buildCSS = buildCSS;
exports.startWatch = startWatch;
exports.clean = clean;

exports.default = series(clean, buildJS, buildCSS, webServer, startWatch);


