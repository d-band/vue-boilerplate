module.exports = (config) => {
  // 添加 vue-loader
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      extractCSS: true,
      cssModules: {
        localIdentName: '[local]___[hash:base64:5]'
      }
    }
  });
  return config;
}
