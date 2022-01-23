'use strict';
// import { src, dest, series, watch, parallel } from 'gulp';
// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// export default defaultTask
import gulp from 'gulp';
const { series, parallel } = pkg;
import pkg from 'gulp';
const { src, dest } = pkg1;
import pkg1 from 'gulp';
import concat from 'gulp-concat';

import htmlMin from 'gulp-htmlmin';
import autoprefixes from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import svgSprite from 'gulp-svg-sprite';
import image from 'gulp-image';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify-es';
import { onError } from 'gulp-notify';
const { init, write } = pkg2;
import pkg2 from 'gulp-sourcemaps';
import del from 'del';
import browserSync from 'browser-sync';
import pkg3 from 'node-notifier';
const { notify } = pkg3;
// import { notify } from 'node-notifier';
import watch from 'gulp-watch';
browserSync.create();
const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
}

const styles = async () => {
  return src(['src/styles/normalize.css', 'src/styles/style.css'])
    .pipe(pkg2.init())
    .pipe(pkg2.write())
    .pipe(concat('main.css'))
    .pipe(dest('dist/styles'))
    .pipe(browserSync.stream())

}

const html = async () => {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = async () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())

}

const svgSprites = async () => {
  return src('src/images/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
}

const scripts = async () => {
  return src([
    'src/js/**/*.js',
    'src/js/main.js'
  ])
    .pipe(pkg2.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // .pipe(uglify().on('error', onError()))
    .pipe(write())
    .pipe(concat('app.js'))
    .pipe(dest('dist/js'))

    .pipe(browserSync.stream())
}

const fonts = () => {
  return src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
    .pipe(dest('dist/fonts'))
}

const images = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.jpeg',
    'src/images/**/*.png',
    'src/images/**/*.webp',
    'src/images/**/*.svg',
  ])
    .pipe(image())
    .pipe(dest('dist/images'))
    .pipe(browserSync.stream())
}

const prebuild = async function () {
  const ind = src('src/**/*.html')
    .pipe(dest('dist'))
  const resource = src('src/resources/**')
  const css = src(['src/styles/normalize.css', 'src/styles/**/*.css'])
    .pipe(concat('main.css'))
    .pipe(autoprefixes({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist/styles'))

}

const buildM = async function () {
  const js = src([
    'src/js/**/*.js',
    'src/js/main.js'
  ])
    .pipe(concat('app.js'))
    .pipe(dest('dist/js'))
  const spritesSvg = src('src/images/svg/**/*.svg')
    .pipe(dest('dist/images'))
  const fnt = src(['src/fonts/**/*.woff', 'src/fonts/**/*.woff2'])
    .pipe(dest('dist/fonts'))
  // return src(['src/fonts/**/*.woff'])
  // .pipe(dest('dist/fonts'))
}



const watchFiles = async () => {
  watch('src/styles/**/*.css', styles)
  watch('src/**/*.html', htmlMinify)
  watch('src/**/*.html', html)
  watch([
    'src/images/**/*.jpg',
    'src/images/**/*.jpeg',
    'src/images/**/*.png',
    'src/images/*.svg',
  ], images)
  watch('src/images/svg/**/*.svg', svgSprites)
  watch('src/js/**/*.js', scripts)
  watch('src/resources/**', resources)
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
    notify: false
  })
}


export const dev = series(resources, parallel(styles, scripts, html, fonts), svgSprites, images, watchFiles)
export const build = series(clean, htmlMinify, fonts, images, parallel(prebuild, buildM))

