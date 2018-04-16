var gulp = require('gulp');

gulp.task('copy-ui', function(){
    return gulp.src(['../client/dist/**/*'])
        .pipe(gulp.dest('./public'));
});