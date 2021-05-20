module.exports = {
  presets: [
    ['@babel/preset-typescript'],
    ['@babel/preset-react'],
    ['@babel/preset-env', { targets: 'defaults' }],
  ],
  plugins: [['@babel/plugin-transform-runtime', { useESModules: true, regenerator: true }]],
};
