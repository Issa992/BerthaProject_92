/*
  A webpack configuration file designed
  for webdevelopment with typescript and scss
  by Ebbe Vang, evang.dk
*/

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
 
module.exports = {
  // which files should webpack watch and transpile
  entry: {
    index: './src/js/index.ts',
    mainPage:'./src/js/MainPage.ts',
    userRegistration:'./src/js/userRegistration.ts',
    userPage:'./src/js/UsersPage.ts',
    login:'./src/index.htm',
    adminPage:'./src/MainPage.html',
    signUp:'./src/SignUpPage.htm',
    usersPage:'./src/Consumer.html',
    style:'./src/scss/styles.scss',
    addData:'./src/AddData.html',
    addDataTs:'./src/js/AddData.ts',
    addEnviro:'./src/AddEnviro.html',
    addEnviroDa:'./src/js/AddEnviroData.ts'
  },
  module: {
    // rules webpack should follow when watching...
    rules: [
    {
        //TypeScipt files will be handles (transpiled) by the typescript-loader
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    },
    {
        //(s)css files wil be handled by the scss-loader and then send to the css-loader and fuinally saved as a bundle
        test:/\.(s*)css$/,
        use:[{loader :'file-loader', options: {name: 'bundle.css'}}, 'extract-loader', 'css-loader', 'sass-loader']
    },
    {
      // html files will be copied to the dist folder
      test: /.htm(l*)/,
      use:
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
      
    },

    {
      //all fonts are vopied to the fonts folder
      test: /.(ttf|otf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',    // where the fonts will go
          publicPath: './fonts/'       // override the default path
        }
      }]
    }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ]
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  devtool: 'source-map',
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      reload: true,
      port: 3000,
      files: ["*.htm", "*.html","*.ts", "scss/*.*"],
      index: 'index.htm',
      server: { baseDir: ['dist'] }
    })
  ]
};