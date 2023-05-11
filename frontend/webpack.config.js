module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/sass/base.scss',
                './src/sass/mixins.scss',
                './src/sass/utility.scss',
                './src/sass/variables.scss',
              ],
            },
          },
        ],
      },
    ],
  },
};
