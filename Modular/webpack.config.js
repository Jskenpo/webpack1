const path = requiere('path');
const HtmlWebpackPlugin = requiere('html-webpack-plugin');


module.exports = {
    entry: {
        Principal: './src/Principal/index.js',
        NLanzamientos: './src/NuevosLanzamientos/nuevos-lanzamientos.js',
        Populares: './src/Populares/populares.js',
        Historia1: './src/Historia1/historia1.js',
        HistoriaAventura: './src/Historia2.1/HistoriaAventura.js',
        HistoriaDolor: './src/Historia2.2/HistoriaDolor.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
            chunks: ['index']
        })
    ]
};