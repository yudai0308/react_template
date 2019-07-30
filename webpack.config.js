const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ]
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    inline: true,
    open: true,
  },
}
