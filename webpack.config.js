var getConfig = require('hjs-webpack')

var config = getConfig({
    in: 'src/app.js',
    out: 'public',
    isDev: process.env.NODE_ENV !== 'production',
})

/*
config.module.loaders.push({
    test: /\.jison$/,
    loader: "jison-loader"
})

config.node = {
    fs: "empty"
}
*/

module.exports = config
