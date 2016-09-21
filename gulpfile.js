// ////////////////////////////////////////
// Required
// ///////////////////////////////////////

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    plumber = require('gulp-plumber');
// ////////////////////////////////////////
// Scripts
// ///////////////////////////////////////

gulp.task('scripts', function() {
  gulp.src(['src/js/**/*.js', '!src/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('src/js'))
  .pipe(reload({stream:true}));
});

// ////////////////////////////////////////
// compass / sass tasks
// ///////////////////////////////////////

gulp.task('compass', function() {
  gulp.src('src/scss/style.scss')
  .pipe(plumber())
  .pipe(compass({
    config_file: 'config.rb',
    css: 'src/css',
    sass: 'src/scss',
    image: 'src/img'

  }))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('src/../'))
  .pipe(reload({stream:true}));
});

// ////////////////////////////////////////
// html task
// ///////////////////////////////////////

gulp.task('html', function() {
  gulp.src('src/**/*.html')
  .pipe(reload({stream:true}));
});


// ////////////////////////////////////////
// build task
// ///////////////////////////////////////

//////////////NEED TO REVISIT///////////////

//clear out all files and folders from build folder
gulp.task('build:cleanfolder', function(cb) {
  del([
    'build/**'
  ], cb);
});


// task to create build directory for all files
gulp.task('build:copy', ['build:cleanfolder'], function() {
  return gulp.src('src/**/*/')
  .pipe(gulp.dest('build/'));
});

//task to remove unwanted build files
//list all files and directories here that you don't want to include
gulp.task('build:remove', ['build:copy'], function(cb) {
  del([
    'build/scss/',
    'build/js!(*.min.js)'
  ], cb);
});
gulp.task('build', ['build:copy', 'build:remove']);

// ////////////////////////////////////////
// browserSync task
// ///////////////////////////////////////

gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: "./src/"
    }
  });
});




// ////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['compass']);
  gulp.watch('src/**/*.html', ['html']);
});

// ////////////////////////////////////////
// Default Task
// ///////////////////////////////////////

gulp.task('default', ['scripts', 'compass', 'html', 'browser-sync', 'watch']);
