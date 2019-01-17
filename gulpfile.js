var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    rename          = require('gulp-rename');
    //uglify          = require('gulp-uglify');
    concat          = require('gulp-concat');
    browserSync     = require('browser-sync').create();

    // SASS to CSS compile
    gulp.task('css', function(){
        return gulp.src('scss/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(concat('style.css'))
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            // .pipe(rename({
            //     suffix: '.min'
            // }))
            .pipe(gulp.dest('css'))
            .pipe(browserSync.stream())
    });

    // BrowserSync
    gulp.task('browserSync', function(){
        browserSync.init({
            server: {
                baseDir: './'
            }
        })
    })

    // Watch task
    gulp.task('watch', ['browserSync'], function(){
        gulp.watch('scss/**/*.scss', ['css'])
        gulp.watch('*.html').on('change', browserSync.reload)
        gulp.watch(['js/main.js']).on('change', browserSync.reload)
    });


    // DEFAULT TASK
    gulp.task('default', ['watch']);