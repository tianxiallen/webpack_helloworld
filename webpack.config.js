var path = require('path');
var webapck = require('webpack');
module.exports = {
    entry : {
        entry1 : '',
        entry2 : '',
    },
    output : {
        path : '',
        filename : ''
    },

    plugins : [

    ],

    module : {
        loaders : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                query : {
                    preset : ['es2015']
                }
            }
        ]
    }



};