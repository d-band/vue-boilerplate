const join = require('path').join;
const jsonServer = require('json-server');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (config, webpack) => {
  const plugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  });
  config.plugins.push(plugin);
  config.babel.plugins = ['transform-runtime'];
  config.output.publicPath = 'http://localhost:8000/';
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      postcss: config.postcss,
      cssModules: {
        localIdentName: '[local]___[hash:base64:5]'
      },
      rules: {
        less: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader!less-loader',
          fallback: 'vue-style-loader'
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
    },
    setup(app) {
      const db = join(__dirname, 'demo/db.json');
      const router = jsonServer.router(db);
      const middlewares = jsonServer.defaults({
        static: join(__dirname, 'demo')
      });
      app.use(middlewares);
      app.use('/api', router);
    }
  };
  return config;
}
