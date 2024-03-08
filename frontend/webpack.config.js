
// Note : This is a very Important configuration in order for us to transpile the react modules properly for them to run alongside the Django App.
// RUN : npx webpack --config webpack.config.js

// Developer Note - Make sure you edit first the original javascript modules then transpile them.


// Debuggers, have patience - 
// For some fucking stupid reason, when transpiling all the Javascript react modules, any imported components (for example in Index.js)
// will for some god forsaken reason include a transpiled version of all those imported modules INSIDE the index.js.
// Yes, that's right, all the code for a specific component for some reason will be transpiled, and written inside index.js 
// instead of just having example.js and index.js transpiled and linking them instead of having a merged transpiled module. I'm sorry.


// Fun fact, the only reason we're using this transpiler is because react doesn't have a compiler. it was just announced 29/02/2024 that we're getting
// a compiler, Fucking finally.


const path = require('path');

module.exports = {
  entry: { // List down each react module alongside their directory including './' 
    login: './react_modules/backend/login.js',
    testLogin: './react_modules/Navigation/testLogin.js',
    index: './react_modules/Navigation/index.js',
    homeNav: './react_modules/Navigation/homeNav.js',
    homeComponent: './react_modules/Navigation/homeComponent.js',
    sideNav: './react_modules/Navigation/sideNav.js',
    courseContent: './react_modules/Navigation/courseContent.js',
    fetch: './react_modules/Navigation/fetch.js'
  },
  output: {
    filename: '[name].js', // Name of outputted javascript file
    path: path.resolve(__dirname, 'build'), // Output to what folder in the directory
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