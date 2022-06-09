const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));


//============ All Functions =============

// func imgSquash
const imgSquash = () => {
    return gulp
        .src("./src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./src/images/minifed"))
        .pipe(imagemin([
            // gifsicle — Compress GIF images, lossless
            imagemin.gifsicle({interlaced: true}),
            // mozjpeg — Compress JPEG images, lossy
            imagemin.mozjpeg({quality: 70, progressive: true}),
            // optipng — Compress PNG images, lossless
            imagemin.optipng({optimizationLevel: 3}),
            // svgo — Compress SVG images, lossless
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]));
}


// func styles
const styles = () =>{
    return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
}


//============ All Tasks =============

// task to optimize images
gulp.task("imgSquash", imgSquash);

// task to compile sass to css
gulp.task('styles', styles);



// task to watch other tasks
gulp.task("watch", () => {
    // watch imgSquash
    // gulp.watch("./src/images/*", imgSquash);

    // watch styles
    gulp.watch("./src/scss/**/*.scss", styles);
});



gulp.task("default",gulp.series("styles", "watch"));
