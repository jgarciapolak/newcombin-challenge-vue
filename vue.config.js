// vue.config.js
module.exports = {
  publicPath: "/",
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
  },
};
