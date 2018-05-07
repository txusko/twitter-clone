const path = require('path');

const config = {
  entry: __dirname + '/app/assets/frontend/main.jsx',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          }
        }
      }
    ]
  }
};

module.exports = config;
