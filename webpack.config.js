module.exports = (config, webpack) => {
  const plugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  });
  config.plugins.push(plugin);
  config.babel.plugins = ['transform-runtime'];
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader'
  });
  console.log(config.devServer);
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