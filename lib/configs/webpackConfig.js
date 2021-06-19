const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = ({ libName, dirname, port, mfPlugin }) => ({
  entry: {
    main: path.join(dirname, 'src', 'index'),
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(dirname, 'dist'),
    port,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@src': path.resolve(dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        include: path.join(dirname, 'src'),
      },
      {
        test: /\.scss|\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('autoprefixer')()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jpeg|jpg|png|docx)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000'] },
    ],
  },
  plugins: [
    mfPlugin,
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, 'public/index.html'),
      excludeChunks: [libName],
    }),
  ],
});
