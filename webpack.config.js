const path = require('path')

module.exports = {
  entry: './stegcloak.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.'),
    library: 'StegCloak',
  },
  mode: 'production',
}
