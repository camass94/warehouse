const gulp = require('gulp'),
    uglify = require('gulp-uglify'),    
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    browserify = require("gulp-browserify")
    babelify = require("babelify")
    minificss = require('gulp-minify-css'),
    fileinclude = require('gulp-file-include'),
    filelist = require('gulp-filelist'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    changed = require('gulp-changed'),
    del = require('del');

const devsrc = 'src',
    pubsrc = 'build',
    paths = {
        "src" : {
            "js" : devsrc + '/js/*.js',
            "css" : devsrc + '/css/*.scss',
            "img" : devsrc + '/images/*+(png|jpg|gif)',
            "html" : devsrc + '/html/page/*/*.html'
        },
        "pub" : {
            "js" : pubsrc+'/js',
            "css" : pubsrc + '/css',
            "img" : pubsrc + '/images',
            "html" : pubsrc + '/'
        }
    };


gulp.task('js', () => {
    gulp.src(paths.src.js) //개발코드 위치
    // .pipe(babel({presets: ['babel-preset-env']}))
    .pipe(browserify())
    // .transform("babelify", {presets: ["babel-preset-env"]})
    .pipe(jshint())
    // .pipe(uglify()) //코드 압축하고
    // .pipe(concat('result.js')) //result.js에 모든 js를 합친다.
    .pipe(gulp.dest(paths.pub.js)); //배포 저장 위치 지정
});
     
gulp.task('css', () => {
    gulp.src(paths.src.css) //개발코드 위치
    .pipe(sass().on('error', sass.logError)) //scss 컴파일하며 오류로그는 나오게한다.
    .pipe(minificss()) //코드 압축하고
//    .pipe(concat('result.css')) //본인은 css는 합치지 않는다.
    .pipe(gulp.dest(paths.pub.css)); //배포 저장 위치 지정
});

gulp.task('filemap', () => {
    gulp.src([paths.src.html])
    // .pipe(rename(function(path) { path.dirname = '/' }))
    .pipe(filelist('filemap.json', { relative: true }))
    .pipe(gulp.dest(devsrc+'/js/data'))
});
    
gulp.task('html', () => {
    gulp.src([devsrc + '/html/*.html', paths.src.html]) //개발코드 위치
    .pipe(fileinclude({ basepath: devsrc + '/html' }))
    .pipe(gulp.dest(paths.pub.html)) //복사해서 이동시킴
    .pipe(connect.reload()); //변경되면 실시간 새로고침
});
    
gulp.task('server', () => {
    connect.server({
        root : pubsrc,
        livereload : true,
        port : 8001
    });
});

gulp.task('imgmin', () => {
    gulp.src(paths.src.img) //개발용 이미지 위치
    .pipe(changed(paths.pub.img)) //변경 파일 감지
    .pipe(imagemin()) //이미지 압축
    .pipe(gulp.dest(paths.pub.img)); //배포 저장 위치 지정
});

gulp.task('clean', () => {
    del([pubsrc + '/*']);
})

gulp.task('watch', () => {
    gulp.watch(paths.src.js, ['js']);
    gulp.watch(paths.src.css, ['css']);
    gulp.watch(paths.src.html, ['html']);
    gulp.watch(paths.src.img, ['imgmin']);
});

gulp.task('default', ['server', 'css', 'html', 'imgmin', 'js', 'filemap', 'watch']);
gulp.task('dev', ['clean', 'css', 'html', 'js', 'imgmin', 'filemap']);
