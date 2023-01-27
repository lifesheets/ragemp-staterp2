const path = require('path');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'wixcore', 'index.js')
  },
  output: {
    path: path.resolve('../client_packages'),
    filename: 'wixcore.js'
  },
  performance: {
    hints: false
  },
  module: {
    noParse: /nativeui/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: '@sucrase/webpack-loader',
            options: {
                transforms: ['imports']
            }
        }
      }
    ]
  }
};