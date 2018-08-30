var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

// compile all scss styles
gulp.task('sass', function(){
   return gulp.src('public/styles/*.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind( console ))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
});

// compile all js files
gulp.task('minifyjs', function() {
    return gulp.src(['public/scripts/vendor/*.js' ,'public/scripts/**/*.js'])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

// compile all hbs files
gulp.task('hbs', function () {
    var templateData = {
        firstName: 'Kaanon'
    },
    options = {
        batch : ['./view/partials']
    }
    return gulp.src('view/*.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename(function(path) {
            path.extname = '.html';
        }))
        .pipe(gulp.dest('dist'));
});

// run a server to test result
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: 8000
    });
})

gulp.task('default', ['sass', 'minifyjs','hbs','connect']);