const join = require('path').join;
const mockjs = require('mockjs');
const jsonServer = require('json-server');

module.exports = {
  publicPath: 'http://localhost:8000/',
  entry: {
    app: './src/index.js'
  },
  commons: {
    name: 'vendor',
    chunks: 'initial',
    test: /node_modules[\\/](.*)\.js$/i,
    enforce: true
  },
  babelPlugins: ['transform-runtime'],
  devServer: {
    historyApiFallback: {
      rewrites: [{
        from: /./,
        to: '/demo/index.html'
      }]
    },
    before(app) {
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