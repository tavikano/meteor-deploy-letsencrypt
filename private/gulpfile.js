/* globals require: false, process: false */
"use strict"; // eslint-disable-line

const s3 = require('gulp-s3');
const gulp = require('gulp');

const s3options = { headers: { 'Cache-Control': 'max-age=600, public' } };
const aws = JSON.parse(require('fs').readFileSync('./aws.json'));

gulp.task('build', () => {
  gulp.src('../public/css/main-app.css')
    .pipe(s3(aws, s3options));
});
