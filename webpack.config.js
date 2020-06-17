// webpack.config.js 
var webpack = require('webpack');
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'logger.min.js',
		library: 'Logger',
		libraryTarget: 'umd',
		//加上这个配置才可以在script tag情况下直接instance,否则只能先接收 类库名.default,再new这个接收
		libraryExport: 'default',
		umdNamedDefine: true
	},
	/* optimization: {
		minimizer: [new UglifyJsPlugin({
			sourceMap: true,
		})],
	}, */
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader', 'eslint-loader'],
			exclude: /node_modules/, // 排除不处理的目录
			include: path.resolve(__dirname, 'src') // 精确指定要处理的目录
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(png|jpg|gif|jpeg|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader'
			},
			exclude: /node_modules/,
		}]
	},
	resolve: {
		extensions: ['.js']
	}
};

module.exports = config;
