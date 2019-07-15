
var path = require('path')
const NODE_ENV = process.env.NODE_ENV

module.exports = {
  build: {
    mode: NODE_ENV,
    sourceMap: false,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    bundleAnalyzerReport: process.env.analyz
  },
  dev: {
    mode: NODE_ENV,
    sourceMap: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './',
    assetsPublicPath: '/',
    host: {{#if mobile}}'0.0.0.0'{{else}}'localhost'{{/if}},
    port: 3001,
    autoOpenBrowser: true,
    overlay: true,
    historyApiFallback: true,
    noInfo: true
  }{{#if mobile}},
  common: {
    remUnit: 75,
    autoRem: true
  }{{/if}}{{#with pwa}},
  workboxOption: {
    clientsClaim: true,
    skipWaiting: true
  }{{/with}}
}
