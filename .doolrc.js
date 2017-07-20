const join = require('path').join;
const mockjs = require('mockjs');
const jsonServer = require('json-server');

module.exports = {
  publicPath: 'http://localhost:8000/',
  entry: {
    app: './src/index.js',
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'vuex-router-sync',
      'element-ui'
    ]
  },
  commons: {
    name: 'vendor'
  },
  babelPlugins: ['transform-runtime'],
  devServer: {
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
  }
};