var gulp = require('gulp');
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify');  // Transforms React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
// var pug = require('gulp-pug');
// var less = require('gulp-less');
// var minifyCSS = require('gulp-csso');
// var concat = require('gulp-concat');
// var sourcemaps = require('gulp-sourcemaps');

var config = {
	port: 3000,
	devBaseUrl: 'http://localhost',
	paths: {
		//js: './app/assets/frontend/*.jsx',
		mainJs: __dirname + '/app/assets/frontend/main.jsx'
	}
}

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./app/assets/javascripts'));
		//.pipe(connect.reload());
});

gulp.task('default', [ 'js' ]);
