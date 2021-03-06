import gulp from 'gulp';
import compileCss from './gulp-tasks/compile-css';
import compileJs from './gulp-tasks/compile-js';
import copyHtml from './gulp-tasks/copy-html';

gulp.task('compile-css', compileCss);
gulp.task('compile-js', compileJs);
gulp.task('copy-html', copyHtml);

gulp.task('watch', () => {
    gulp.watch('src/css/**/*.css', compileCss);
    gulp.watch('src/css/**/*.js', compileJs);
    gulp.watch('src/css/*.html', copyHtml);
});

gulp.task('build', ['compile-css', 'compile-js', 'copy-html']);
gulp.task('default', ['build']);
