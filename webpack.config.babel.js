//Dependencies
import webpack from 'webpack';
import path from 'path';
//import ChunksPlugin from 'webpack-split-chunks';
import {
    devtool,
    module,
    optimization,
    plugins,
    resolve,
    target
  } from './webpack/configuration';
  
  console.log(devtool, module, optimization, plugins, resolve, target);
  

//Enviroment
const isDevelopment = process.env.NODE_ENV !== 'production';
//paths
const PATHS ={
    index: path.join(__dirname,'src/index'),
    build: path.join(__dirname,'/src/public'),
    src: path.join(__dirname,'src')

};
export default {
    devtool,
    module,
    optimization,
    plugins,
    resolve,
    target
  };

const getDevtool = () => 'cheap-module-eval-source-map';
const getEntry = () =>{
    const entry =[
        PATHS.index
    ];
    if(isDevelopment){
        entry.push('webpack-hot-middleware/client?reload=true');
    }
return entry;
};
const getOutput= () => ({
    path:PATHS.build,
    publicPath:'/',
    filename:'bundle.js'
});

const getPlugins = () => {
    const plugins =[
        new ChunksPlugins({
            to:'vendor',
            test:'/node_modules/'
        })
    ];
    if(isDevelopment){
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        );
    }else{
        plugins.push(
         new config.optimization.splitChunks({
             compress:{
                 screw_ie8:true,
                 warnings:false

                 }
                })   
                );
    }
    return plugins;
};
const getLoaders = ()=>({
        rules:[
           {
               test: /\.js?$/,
               loader: ['babel-loader'],
               include: PATHS.src
           },
           {
               test: /(\.css)$/,
               loader: ['style-loader','css-loader']
           },
           {
               test:/\.svg(\?v= \d+\.\d+\.\d+)?$/,
               loader:'url-loader?limit=1000&mimetype=image/svg+xml'
           }
       ]
    });
    /*
//webpack Config
export default{
     devtool: getDevtool(),
     entry:getEntry(),
     output:getOutput(),
     plugins:getPlugins(),
     module:getLoaders()
};*/