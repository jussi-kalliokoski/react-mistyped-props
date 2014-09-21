"use strict";

var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jscs = require("gulp-jscs");
var istanbul = require("gulp-istanbul");
var mocha = require("gulp-mocha");

var files = [
    "./index.js",
];

var configFiles = [
    "./gulpfile.js",
    "./test/**/*.js",
];

function handleError (error) {
    throw error;
}

gulp.task("jscs", function jscsTask () {
    return gulp.src(files.concat(configFiles))
        .pipe(jscs("./.jscs.json"))
        .on("error", handleError);
});

gulp.task("jshint", function jshintTask () {
    return gulp.src(files.concat(configFiles))
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(jshint.reporter("fail"))
        .on("error", handleError);
});

gulp.task("mocha", function (callback) {
    gulp.src(["./index.js", "./lib/**/*.js"])
        .pipe(istanbul())
        .on("finish", function () {
            gulp.src(["test/*.js"])
                .pipe(mocha({
                    reporter: "spec",
                }))
                .pipe(istanbul.writeReports())
                .on("end", callback);
        });
});

gulp.task("test", ["jshint", "jscs", "mocha"]);
