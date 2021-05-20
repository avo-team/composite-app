const { ModuleFederationPlugin } = require('webpack').container;
const webpackConfig = require('../lib/configs/webpackConfig');
const name = require('./package.json').name.split('/')[1];

module.exports = webpackConfig({
  name,
  dirname: __dirname,
  port: 3002,
  mfPlugin: new ModuleFederationPlugin({
    name,
    library: { type: 'var', name: 'auth' },
    filename: 'remoteEntry.js',
    exposes: require('./exposes.json'),
    shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
  }),
});
