module.exports = {
    // publicPath: '/Sudoku/',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Sudoku/'
        : '/',
    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        navigateFallback: 'index.html',
        skipWaiting: true
      }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "судоку";
                return args;
            })
    }
  }