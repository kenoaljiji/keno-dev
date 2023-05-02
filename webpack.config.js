module.exports = {
  //...
  module: {
    rules: [
      // Apply loader
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
              // Provide path to the file with resources

              // Or array of paths
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

  //...
};
