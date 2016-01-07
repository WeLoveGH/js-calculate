'use strict';

/**
 * Created by hongjian1993 on 16/1/7.
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('jshint', function() {
    return gulp.src(['dist/*.js', '!dist/*.min.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('dist', ['clean', 'jshint'], function() {
    return gulp.src(['dist/*.js', '!dist/*.min.js'])
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Scripts dist task complete' }));
});

gulp.task('clean', function() {
    del(['dist/*.min.js']);
});