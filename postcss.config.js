module.exports = {
  // parser: 'sugarss',
  plugins: [
    require('postcss-import')(),
    require('postcss-flexbugs-fixes'),
    require('postcss-cssnext')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
      warnForDuplicates: false,
    }),
    require('cssnano')(),
    require('postcss-modules')({ generateScopedName: '[name]__[local]___[hash:base64:5]' }),
  ],
};
