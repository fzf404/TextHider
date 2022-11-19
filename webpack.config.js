const path = require('path')

module.exports = {
  entry: './core/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'TextHider',
  },
  mode: 'production',
}
