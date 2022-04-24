const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      client: {
        overlay: {
          warnings: false
        }
      }
    },
    module: {
        rules: [
          {
            test: /\.s[ca]ss$/,
            use: [
              {loader: 'style-loader'},
              {
                loader: 'css-loader',
                options: { url: false }},
              { loader: 'sass-loader' }
            ]
          }
        ]
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            context: path.resolve(__dirname, "dist"),
            from: path.resolve(__dirname, "assets"),
            to: "assets"
          },
          {
            context: path.resolve(__dirname, "dist"),
            from: path.resolve(__dirname, "src", "pages")
          }
        ]
      })
    ]
}