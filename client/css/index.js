require('normalize.css');
require('./global');

/**
 * Components.
 * Include all css files just if you need
 * to hot reload it. And make sure that you
 * use `webpack.optimize.DedupePlugin`
 */
require('Components/app/styles');
require('Components/homepage/styles');
require('Components/usage/styles');
require('Components/not-found/styles');
