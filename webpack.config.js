const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isProduction = process.argv.indexOf('-p') !== -1;
const glob = require("glob");

const themes = glob.sync('src/themes/*.scss').map(fileName => fileName.replace(/(.+\/)|(\.scss)/g , ''));

const themeExtractors = themes.map(themeName => new ExtractTextPlugin({
	filename:function(getPath) {
		return getPath("themes/" + themeName + (isProduction ? '.min' : '') + ".css");
	}
}));

const plugins = [...themeExtractors];

if ( isProduction ) {
	plugins.push(new UglifyJSPlugin({
		compress:true ,
		comments:false
	}));
}
const outputFilename = !isProduction ? '[name].js' : '[name].min.js';

module.exports = {
	entry    :{
		'TableOfContents':[
			...(themes.map(themeName => './src/themes/' + themeName + '.scss')),
			'./index.js'
		] ,
		'TableOfContentsRedux':['./src/redux/redux.js']
	} ,
	output   :{
		path         :path.resolve('./dist') ,
		filename     :outputFilename ,
		libraryTarget:'var' ,
		library      :'[name]'
	} ,
	externals:{
		'react':'React' ,
		'prop-types':'PropTypes'
	} ,
	module   :{
		rules:[
			{test:/\.(js|jsx)$/ , loader:'babel-loader' , exclude:/node_modules/} ,
			...(themes.map((themeName , index) => ({test:new RegExp(themeName + "\.scss$") , loader:themeExtractors[index].extract(['css-loader' , 'sass-loader'])}))) ,
		]
	} ,
	plugins  :plugins
};