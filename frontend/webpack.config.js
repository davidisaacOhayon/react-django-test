
// Note : This is a very Important configuration in order for us to transpile the react modules properly for them to run alongside the Django App.
// RUN : npx webpack --config webpack.config.js


const path = require('path');

module.exports = {
  entry: { // List down each react module alongside their directory including './' 
    index: './react_modules/Navigation/index.js',
    homeNav: './react_modules/Navigation/homeNav.js',
    homeComponent: './react_modules/Navigation/homeComponent.js',
    sideNav: './react_modules/Navigation/sideNav.js',
    courseContent: './react_modules/Navigation/courseContent.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
}; 