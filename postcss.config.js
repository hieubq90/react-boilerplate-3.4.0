module.exports = {
  // parser: 'sugarss',
  plugins: [
    require('postcss-import')(), // eslint-disable-line global-require
    require('postcss-flexbugs-fixes'), // eslint-disable-line global-require
    require('postcss-cssnext')({
      // eslint-disable-line global-require
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
      warnForDuplicates: false,
    }),
    require('cssnano')(), // eslint-disable-line global-require
    require('postcss-modules')({
      // eslint-disable-line global-require
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    }),
  ],
};
