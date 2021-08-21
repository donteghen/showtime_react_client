//const { createProxyMiddleware } = require('http-proxy-middleware');
var proxy = require('http-proxy-middleware')
module.exports = function (app) {
    app.use('/api/**', proxy({target: 'http://localhost:8080', secure:false,changeOrigin: true,}))
}