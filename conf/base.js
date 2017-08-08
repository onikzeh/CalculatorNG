const hostname = 'localhost';

module.exports = {
  isDev: true,
  env: require('./env'),
  name: require('../package').name,
  hostname: hostname,
  url: `http://${hostname}/`
};
