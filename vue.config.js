const { defineConfig } = require("@vue/cli-service");
const Dotenv = require("dotenv-webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new Dotenv()],
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  },

  chainWebpack: (config) => {
    // Clear existing environment variables set by Vue
    config.plugin("define").tap((definitions) => {
      delete definitions[0]["process.env"];
      return definitions;
    });
  },
});
