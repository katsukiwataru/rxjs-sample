const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  }
};
