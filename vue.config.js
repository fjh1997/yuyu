const webpack = require('webpack');
module.exports={

configureWebpack: {

    plugins: [

    new webpack.ProvidePlugin({

$:"jquery",

jQuery:"jquery",

"windows.jQuery":"jquery"

})

    ],
    devServer: {
    proxy: {
    	'/upload':
    	{
        target: 'http://stupidfish.ticp.net',
        ws: true,
        changeOrigin: true
      },
      '/download':
      {
        target: 'http://stupidfish.ticp.net',
        ws: true,
        changeOrigin: true
      },
      '/api':
      {
        target: 'http://stupidfish.ticp.net:6785',
        ws: true,
        changeOrigin: true
      }
    },
    open:true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    }

  }
    
  }

	
}