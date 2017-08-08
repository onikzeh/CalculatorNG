const path = require('path');

const dirs = {
  api: path.join(__dirname, 'api'),
  css: path.join(__dirname, 'styles'),
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  modules: path.join(__dirname, 'node_modules'),
  views: path.join(__dirname, 'views')
};

module.exports = {
  dirs: dirs,
  js: path.join(dirs.src, 'app.js'),
  html: path.join(dirs.views, 'index.html'),
  clean: dirs.dist + '/*',
  partials: path.join(dirs.src, 'partials')
};
