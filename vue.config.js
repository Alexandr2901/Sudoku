module.exports = {
    publicPath: '/Sudoku/',
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        navigateFallback: 'index.html',
        skipWaiting: true
      }
    }
  }