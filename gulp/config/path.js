import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFodler = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`
  },
  src: {
    images: `${srcFodler}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFodler}/img/**/*.svg`,
    js: `${srcFodler}/js/app.js`,
    scss: `${srcFodler}/scss/style.scss`,
    html: `${srcFodler}/*.html`,
    fonts: `${srcFodler}/fonts/**/*.*`,
    svgicons: `${srcFodler}/svgicons/*.svg`
  },
  watch: {
    html: `${srcFodler}/**/*.html`,
    scss: `${srcFodler}/**/*.scss`,
    js: `${srcFodler}/**/*.js`,
    images: `${srcFodler}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
    fonts: `${srcFodler}/fonts/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFodler: srcFodler,
  rootFolder: rootFolder,
  ftp: ``
};