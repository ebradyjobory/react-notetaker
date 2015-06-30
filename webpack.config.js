module.exports = {
  entry: './app/components/Main.js',
  ouput:  {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/,
        loader: 'babel'
      }
    ]
  }
};