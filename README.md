# React Django Integration

This project is mainly to experiment on implementing a javascript framework React with a Python web development framework, Django.


# Important 
Django will not be able to "render" the React modules directly without transpiling them into a universal format of javascript. We can
use a JS package called **babel** but this unfortunately can cause problems.

Instead, in the same directory that contains all your javascript files, create a JS file named **webpack.config.js**
```javascript
// Note : This is a very Important configuration in order for us to transpile the react modules properly for them to run alongside the Django App.
// RUN : npx webpack --config webpack.config.js

// Developer Note - Make sure you edit first the original javascript modules then transpile them.
const path = require('path');

module.exports = {
  entry: { // List down each react module alongside their directory including './' 
    exampleFile : './path/to/file/exampleFile.js



  },
  output: {
    filename: '[name].js', // Name of outputted javascript file
    path: path.resolve(__dirname, 'FolderName'), // Output to what folder in the directory



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
```
