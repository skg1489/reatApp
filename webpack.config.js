module.exports = {
	entry: './index.js',
  devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js',
		publicPath: ''
	},
	devServer: {
      historyApiFallback: true,
      port: 8080
   	},
	module: {
      loaders: [
        
         { test: /\.jsx?$/,exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
            presets: ['es2015', 'react']
            }
            },
        {
          test: /\.css$/, // Transform all .css files required somewhere within an entry point...
          loaders: ['style-loader', 'css-loader'] // ...with PostCSS
        }         
      ]              
   },
}