const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api/*", "/auth/google","/auth/twitch"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin:false
    })
  );
};