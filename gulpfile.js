var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

/**
 * Three different forms:
 *
 * // Create a new task with name 'name'
 * gulp.task('name', function () {
 *  // do a thing
 * });
 *
 * // Create a new task with dependencies
 * gulp.task('all', ['thing-1', 'thing-2']);
 *
 * gulp.task('mega-mode', ['thing-1', 'thing-2'], function () {
 *  // do a thing after thing-1 and thing-2 are done
 * })
 */

// Specify dependencies
// protip: 'default' is...the...default
gulp.task('default', ['html', 'js', 'css']);
gulp.task('html', function () {
    gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
    // what to do for this task.
});
// Convert SASS into CSS
gulp.task('css', function () {
    gulp.src('./css/styles.css')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));

    // what to do for this task.
});

gulp.task('js', function () {
    gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'))
});

gulp.task('watch', function () {
    // files to watch, then what tasks to run when they change
    // gulp.watch('./scss/styles.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./views/*.js', ['js']);
    gulp.watch('./models/*.js', ['js']);
})
