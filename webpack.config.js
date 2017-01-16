const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (config, webpack) => {
  const plugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  });
  config.plugins.push(plugin);
  config.babel.plugins = ['transform-runtime'];
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      postcss: config.postcss,
      loaders: {
        less: ExtractTextPlugin.extract({
          loader: 'css-loader!postcss-loader!less-loader',
          fallbackLoader: 'vue-style-loader'
        })
      }
    }
  });
  config.devServer = {
    historyApiFallback: {
      rewrites: [{
        from: /./,
        to: '/demo/index.html'
      }]
    }
  };
  return config;
}