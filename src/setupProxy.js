const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/maps', {
      target: 'https://maps.googleapis.com',
      changeOrigin: true,
      // pathRewrite: { '^/maps/': '/' },
    }),
  );
};
