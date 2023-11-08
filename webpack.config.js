const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, ''),
	},
	optimization: {
		// We do not want to minimize our code.
		minimize: false
	}  
};
