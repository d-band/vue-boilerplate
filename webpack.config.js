const join = require('path').join;
const mockjs = require('mockjs');
const jsonServer = require('json-server');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (config, webpack) => {
  config.output.publicPath = 'http://localhost:8000/';
  // 添加 CommonsChunkPlugin
  const plugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  });
  config.plugins.push(plugin);

  const babel = { loader: 'babel-loader' };
  // 添加 babel plugin
  config.module.rules.forEach(rule => {
    if (rule.key === 'js' || rule.key === 'jsx') {
      rule.options.plugins = [
        'transform-runtime'
      ];
      babel.options = rule.options;
    }
  });
  // 添加 vue-loader
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      extractCSS: true,
      postcss: [require('autoprefixer')({
        browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
      })],
      cssModules: {
        localIdentName: '[local]___[hash:base64:5]'
      },
      loaders: { js: babel }
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
      const data = mockjs.mock({
        'users|100': [{
          'id|+1': 1,
          name: '@cname',
          email: '@email',
          'address|1-20': 20
        }],
        'cities|20': [{
          'id|+1': 1,
          name: '@city(true)'
        }]
      });
      const router = jsonServer.router(data);
      const middlewares = jsonServer.defaults({
        static: join(__dirname, 'demo')
      });
      app.use(middlewares);
      app.use('/api', router);
    }
  };
  return config;
}
