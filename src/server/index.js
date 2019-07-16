import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

//WebPack configuration
import webpackConfig from '../../webpack.config.babel';

//serverport
const port= 3000;

//Enviroment
const isDevelopment = process.env.NODE_ENV !== 'production';

//public 
app.use(express.static(path.join(__dirname,'../public'))); // hacer publica la carpeta public
//Express App
const app= express();

//webpack compiler
const webpackCompiler =webpack(webpackConfig);

//webpack Middlewares
if(isDevelopment){
    app.use(webpackDevMiddleware(webpackCompiler));
    app.use(webpackHotMiddleware(webpackCompiler));
}

//Sending all traffic to react
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));

}
);

//Listen port
app.listen(port,err => {
    if(!err){
        open(`http://localhost:${port}`);
    }
});

