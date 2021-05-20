const babelConfig = require('../lib/configs/babelConfig');

module.exports = (api) => api.cache(false) || babelConfig;
