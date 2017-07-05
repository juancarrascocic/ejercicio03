const jshint = require('gulp-jshint');
const gulp   = require('gulp');
 
gulp.task('lint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', function() {
  // place code for your default task here
  console.log('Paso por aqui');
});