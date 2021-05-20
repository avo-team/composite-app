const { ModuleFederationPlugin } = require('webpack').container;
const webpackConfig = require('../lib/configs/webpackConfig');
const name = require('./package.json').name.split('/')[1];

module.exports = webpackConfig({
  name,
  dirname: __dirname,
  port: 3001,
  mfPlugin: new ModuleFederationPlugin({
    name,
    remotes: {
      auth: 'auth@http://localhost:3002/remoteEntry.js',
    },
    shared: {
      react: { singleton: true },
      'react-dom': { singleton: true },
    },
  }),
});
