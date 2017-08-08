const config = require('./base');
Object.assign(config, require(`./${require('./env')}`));

module.exports = config;
