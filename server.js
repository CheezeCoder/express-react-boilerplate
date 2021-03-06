const path      = require('path');
const fs        = require('fs');
const express   = require('express');
const webpack   = require('webpack');
const config    = require('./webpack.config.js');

const port  = 3000;
const app   = express();

const webpackMiddleware = require('webpack-dev-middleware');
const webPackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats : {
        colors: true,
        hash: false,
        timings: true,
        chunks: true,
        chunkModules: false,
        modules: false
    }
});

app.use(middleware);
app.use(webPackHotMiddleware(compiler));



app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, 'localhost', function onStart(err){
    if(err){
        console.log(err);
    }

    console.info('==> 🌎 Listening on port %s. Open up localhost:%s/ in your browser.', port, port);
});

