# Webpack

O [Webpack](https://webpack.github.io/) é um empacotador de módulos. O conceito é simples: atua como uma ferramenta que carrega dependências (arquivos como .js, .css, .html) empacota em um ou vários arquivos (.js, .css, .html) e entrega para o aplicativo na forma de um único módulo.

## Instalação

Esta ferramenta deve ser instalada com npm:

```
npm install webpack --save-dev
```

## Configuração

A configuração é baseada em um arquivo nomeado de forma padrão como `webpack.config.js`. Seu conteúdo especifica as seguintes seções principais:
* **context**: o contexto, o caminho (diretório) de *entrada*, onde se encontram os códigos-fontes do aplicativo
* **entry**: o caminho do *arquivo principal* (javascript) do aplicativo
* **output**: o caminho de *saída* do processo de empacotamento

Outras seções são importantes, mas opcionais:
* **plugins**: um array com plugins que podem ser aplicados nos arquivos de entrada para gerar saídas com processamentos diversos
* **module**: um array que especifica os diversos **loaders**, elementos que tratam de cada tipo de arquivo de forma específica (por exemplo, um *loader* de arquivos .css pode gerar uma saída minimificada)

## Exemplo

O código a seguir apresenta um arquivo `webpack.config.js` completo. Vários componentes adicionais (opcionais) são utilizados:
* `path`: utilizado no tratamento e localização de nomes de diretórios
* `html-webpack-plugin`: utilizado para manipular código HTML e gerar conteúdo necessário para incorporar os arquivos de saída (ex: tag <script>)
* `ng-annotate-webpack-plugin`: utilizado em conjunto com o AngularJS, para processamento dos nomes das dependências em módulos e controllers

```javascript
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        }),
        new ngAnnotatePlugin({ add: true }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            /*{test: /\.css$/, loader: 'style!css', exclude: /node_modules/},*/
            {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css?minimize!autoprefixer' },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};
```