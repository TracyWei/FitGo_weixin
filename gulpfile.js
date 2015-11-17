// Herald App gulpfile
// This file build all of the sass file and start the server

// 1. LIBRARIES
// - - - - - - - - - - - - - - - 

var $         = require('gulp-load-plugins')();
var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename    = require('gulp-rename');
var sequence  = require('run-sequence');


// 2. FILE PATHS
// - - - - - - - - - - - - - - -

var paths = {
    sass:['./scss/**/*.scss']
};

// 3.TASKS
// - - - - - - - - - - - - - - -

// compile scss file 
// - - - - - - - - - - - - - - -
gulp.task('sass',function(done){
    gulp.src('./scss/herald.app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(minifyCss({
            keepSpecialComments:0
        }))
        .pipe(rename({extname:'.min.css'}))
        .pipe(gulp.dest('./css/'))
        .on('end',done);
});

// before start server,compile scss file
// - - - - - - - - - - - - - - -

gulp.task('build',function(done){
    sequence('sass',done);
})

// start the server
// - - - - - - - - - - - - - - -

gulp.task('server',['build'],function(){
    gulp.src('./')
        .pipe($.webserver({
            port: 3000,
            host: 'localhost',
            fallvack: 'index.html',
            livereload: true,
            open: true
        }));
});


// watch file's change and reload server
// - - - - - - - - - - - - - - -

gulp.task('default',['server'],function(){
    gulp.watch(paths.sass, ['sass']);
});