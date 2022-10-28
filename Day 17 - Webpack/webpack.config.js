const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo"
        })
    ],
    devServer: {
        static: "./dist"
    },
    optimization: {
        usedExports: true
    }
}