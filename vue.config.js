const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/ticket/api/": {
        target: "http://sunda-loadb-1ilq76xm360b1-3a2b3da45d8ac29a.elb.us-east-1.amazonaws.com/",
      }
    }
  }
})
