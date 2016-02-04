'use strict';

var outDir = 'build/';

module.exports = {
  host: 'localhost',
  port: 4300,

  // app directories
  appDir: 'app',

  // src dir
  srcDir: 'src',

  // distribution dir
  distDir: 'dist',

  // unit test directories
  unitTestDir: 'app',

  // build test dir
  buildTestDir: outDir + 'test/',

  // build directories
  buildDir: outDir + 'app/',
  buildCss: outDir + 'app/css/',
  buildFonts: outDir + 'app/fonts/',
  buildImages: outDir + 'app/images/',
  buildJs: outDir + 'app/js/',
  extDir: outDir + 'app/vendor/',
  extCss: outDir + 'app/vendor/css/',
  extFonts: outDir + 'app/vendor/fonts/',
  extJs: outDir + 'app/vendor/js/'
};
