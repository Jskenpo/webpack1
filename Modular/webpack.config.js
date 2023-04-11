const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        Principal: './src/Principal/principal.js',
        NLanzamientos: './src/NuevosLanzamientos/nuevos-lanzamientos.js',
        Populares: './src/Populares/populares.js',
        Historia1: './src/Historia1/historia1.js',
        HistoriaAventura: './src/Historia2.1/HistoriaAventura.js',
        HistoriaDolor: './src/Historia2.2/HistoriaDolor.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'Dist_babel')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'principal.html',
            template: './src/Principal/principal.html',
            chunks: ['principal']
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'nuevos-lanzamientos.html',
            template: './src/NuevosLanzamientos/nuevos-lanzamientos.html',
            chunks: ['nuevos-lanzamientos']
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'libros-populares.html',
            template: './src/Populares/libros-populares.html',
            chunks: ['populares']
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'Historia1.html',
            template: './src/Historia1/Historia1.html',
            chunks: ['historia1']
        }),
        new HtmlWebpackPlugin({ 
            title: 'Output Management',
            filename: 'HistoriaAventura.html',
            template: './src/Historia2.1/HistoriaAventura.html',
            chunks: ['HistoriaAventura']
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'HistoriaDolor.html',
            template: './src/Historia2.2/HistoriaDolor.html',
            chunks: ['HistoriaDolor']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        })

    ]
};