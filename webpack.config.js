const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
    module: {
        rules: [
          // {
          //   test: /\.(png|jpg|gif)$/,
          //   use: [
          //     {
          //         loader: 'file-loader',
          //         options: {
          //           name: 'assets/image/[name].[ext]',
          //           outputPath: '',
          //         }
          //     }
          //   ]
          // },
          {
            test: /\.s[ca]ss$/,
            use: [
              {loader: 'style-loader'},
              {
                loader: 'css-loader',
                options: {
                  url: false
                }},
              {loader: 'sass-loader'}
            ]
          }
        ]
    }
}