var path = require('path');

module.exports = {
	mode: 'production',

	// 주요속성 1) 빌드를 할 대상 파일을 지정
	entry: './js/app.js',

	// 주요속성 2) 빌드를 하고 나서 즉 웹팩으로 변환을 하고 나서 나오는 결과물을 정의하는 경로
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js'
	},

	// 주요속성 3) entry -> output으로 변환할 때 중간에 개입하는 부분
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'	// 개발자 도구의 소스맵 기능을 활용할 수 있게 된다.
};
