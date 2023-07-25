const { src, dest, parallel, watch, series } = require("gulp");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require('sass'));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();

const FilesPath = {
  sassFiles: "src/sass/*.scss",
  jsFiles: "src/js/*.js",
  htmlFiles: "src/pages/*.pug",
};

function sassTask() {
    return src(FilesPath.sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function htmlTask() {
  return src(FilesPath.htmlFiles)
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

function jsTask() {
  return src(FilesPath.jsFiles).pipe(concat("all.js")).pipe(dest("dist/js"));
}

function assetsTask() {
  return src("src/assets/**/*").pipe(dest("dist/assets"));
}

function serve() {
  browserSync.init({ server: { baseDir: "./dist" } });
  watch(FilesPath.sassFiles, sassTask);
  watch(FilesPath.jsFiles, jsTask);
  watch(FilesPath.htmlFiles, htmlTask);
}

exports.js = jsTask;
exports.sass = sassTask;
exports.html = htmlTask;
exports.assets = assetsTask;
exports.default = series(parallel(htmlTask, sassTask, jsTask, assetsTask));
exports.serve = series(serve, parallel(htmlTask, sassTask, jsTask, assetsTask));
