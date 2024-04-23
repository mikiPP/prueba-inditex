const path = require('path');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  return {
    mode: options.mode,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      open: true,
      compress: isProduction ? true : false,
      hot: false,
      port: 3200,
    },
  };
};
