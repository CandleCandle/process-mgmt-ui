import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


let config = {
	entry: ['./src/index.js'],

	module: {
		rules: [
			{ test: /.ts$/, use: 'ts-loader' },
			{
				test: /.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env'
						],
						plugins: [
							'@babel/plugin-syntax-import-assertions',
							'@babel/plugin-syntax-dynamic-import',
						]
					}
				}
			}
		],
	},

	experiments: {
		topLevelAwait: true
	},

	resolve: {
 	 	fallback: {
  			"fs": false
  		}
	},

	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'process-mgmt-ui.bundle.js',
	},

	optimization: { },

}

export default (env, argv) => {
	if (argv.mode === 'development') {
		config.devtool = 'source-map';
		config.optimization.minimize = false;
	} else if (argv.mode === "production") {
		config.optimization.minimize = false;
	}
	return config;
};
