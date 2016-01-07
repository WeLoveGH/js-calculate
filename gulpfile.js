'use strict';

/**
 * Created by hongjian1993 on 16/1/7.
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename');

gulp.task('default', function() {
    // 默认的任务代码
});

gulp.task('jshint', function() {
    return gulp.src('dist/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', ['jshint'], function() {
    return gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'Scripts task complete' }));
});