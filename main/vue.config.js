module.exports = {
  devServer: {
    proxy: {
      '/vyatsu': {
        target: 'https://new.vyatsu.ru/',
        changeOrigin: true,
        pathRewrite: {
          '^/vyatsu': '',
        },
      },
      '/api': {
        target: 'http://localhost:8082/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
