const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

const isProduction = process.argv[process.argv.indexOf('--mode') + 1] === 'production';

module.exports = (env) => {
  const mode = isProduction ? 'production' : 'development';
  let plugins = generateHtmlPlugins('./source/pug/page');
  plugins.push(new MiniCssExtractPlugin({
    filename: 'css/style.css'
  }))
  plugins.push(new webpack.DefinePlugin( {
    "process.env": dotenv.parsed
  }));
  const output = {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/script.js'
  };

  const entry = {
    script : './source/script.js'
  }

  const devServer = {
    port: dotenv.parsed.PORT,
    compress: true,
    disableHostCheck: true
  }

  const module = {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options:{
          presets:["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: mode === 'development',
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('precss'),
                require('autoprefixer'),
                require('css-mqpacker'),
                require('cssnano')({
                  preset: [
                    'default', {
                      normalizeWhitespace: 1
                    }
                  ]
                })
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img',
          publicPath: '../img'
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[contenthash].[ext]',
          outputPath: 'fonts',
          publicPath: '../fonts'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
          compileDebug : true,
          filters: false
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          attributes: true
        }
      }
    ]
  }

  return {
      mode,
      entry,
      output,
      plugins,
      module,
      devServer
  };
};

const generateHtmlPlugins = (templateDir) => {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  let resultNew = [],
    id = 0;
  templateFiles.forEach((v, i) => {
    const parts = v.split('.');
    const name = parts[0];
    const extension = parts[1];
    if(extension === 'pug'){
      resultNew[id] = new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
      })
      id++;
    }
  })
  return resultNew;
}
