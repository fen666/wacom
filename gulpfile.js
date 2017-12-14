var gulp = require('gulp')
var less = require('gulp-less')
var browserSync = require('browser-sync').create()
var htmlmin = require('gulp-htmlmin')
var cssmin = require('gulp-minify-css')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var path = {
	html: ['./index.html', './page/*.html'],
	less: './css/*.less',
	css: './css/*.css',
	js: './js/*.js',
	image: './images/*.{png,jpg,gif,ico}'
}
var out = {
	html: './dist',
	css: './dist/css',
	js: './dist/js',
	image: './dist/images'
}

// ---dev---
gulp.task('less2css', function () {
	gulp.src(path.less)
		.pipe(less())
		.pipe(gulp.dest('./css'))
})

/* 实时监控，启动静态服务器 */
gulp.task('watch', ['less2css'], function () {
	browserSync.init({
		server: {
			port: 3000,
			baseDir: './'
		}
	})
	gulp.watch(path.html).on('change', browserSync.reload)
	gulp.watch(path.less, ['less2css']).on('change', browserSync.reload)
	gulp.watch(path.js).on('change', browserSync.reload)
})

gulp.task('default', ['watch'])

// ---build---
gulp.task('html', function () {
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(['./**/*.html', '!node_modules/**', '!dest/**'])
    	.pipe(htmlmin(options))
    	.pipe(gulp.dest(out.html))
})
gulp.task('css', function () {
	gulp.src(path.css)
		.pipe(cssmin())
		.pipe(gulp.dest(out.css))
})
gulp.task('js', function() {
  gulp.src(path.js)
    .pipe(uglify())
    .pipe(gulp.dest(out.js))
})
gulp.task('image', function() {
  gulp.src(path.image)
    // .pipe(imagemin())
    .pipe(gulp.dest(out.image))
})
gulp.task('build', ['html','css','js','image'], function () {
	console.log('[build] DONE!')
})