const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry: {
        bundle:path.resolve(__dirname,'src/index.js')
    },
    output: {
        path:path.resolve(__dirname, 'dist'),
        // fileName:'bundle'
        filename:'[name][contenthash].js', // name hamun key bala tu entry ro mige yani bundle ro
        clean:true, // vaghti build mizanim bundle ghabli ro pak kone
        assetModuleFilename:'[name][ext]'
    },
    devtool:'source-map', // bara debug
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'] /* style loader ghable css loader biyad // webpack fgt mitune js ro bundle kone //
                     pass age bexad css ro bundle kone bayad az loader ha komak begire // css-loader css ha ro tabdil b string mikone
                     ve style loader in string ro b tag style mirize
                */
            },{
                test: /\.js$'/, // babel vase tabdil es6 b es5 dar browser haye ghadimi
                exclude:/node_modules/, // b estesnaye node-module
                use:{
                    loader:'babel-loader',
                    options: {
                        presets:['@babel/preset-env'],

                    }
                }
            },{
                test:/\.(png|jpg)$/, // bara img o assesst ina
                type:'assest/resource'
            }
        ]
    },
    devServer:{
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true
    },
    plugins:[
        new htmlPlugin({
            title:'webpack',
            filename:'index.html',
            template:'src/index.html'
        })
    ]
}