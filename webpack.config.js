const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);

const PATH_SOURCE = path.join(__dirname, "./src");
const PATH_DIST = path.join(__dirname, "./dist");

module.exports = (env) => {
    const environment = env.environment;
    const isProduction = environment === `production`;
    const isDevelopment = environment === `development`;

    return {
        mode: environment,
        entry: [path.join(PATH_SOURCE, "./index.js")],
        // entry:   {
        //     index: `./src/index.js`,
        // },
        devtool: `inline-source-map`,
        plugins: [
            new HtmlWebpackPlugin({
                title: `Development`,
                template: path.join(PATH_SOURCE, `./index.html`),
            }),
            new CleanWebpackPlugin(),
        ],
        output: {
            // filename: `[name].bundle.js`,
            // path: path.resolve(__dirname, `dist`),
            path: PATH_DIST,
            filename: "js/[name].[contenthash].js",
            publicPath: "/",
        },

        devServer: {
            static: {
                directory: PATH_DIST,
            },
            host: "localhost",
            port: 8080,
            historyApiFallback: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: true,
                },
            },
        },
    
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [`style-loader`, `css-loader`, {
                        loader: `sass-loader`,
                        options: {
                            implementation: require(`sass`),
                        },
                    },],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: `asset/resource`,
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: `asset/resource`,
                },
                {
                    test:/\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: `babel-loader`,
                        options: {
                            presets: [
                                ["@babel/preset-env", {
                                    debug: true,
                                    useBuiltIns: "usage",
                                    corejs: 3,
                                }],
                            ],
                        },
                    }
                }
            ],
        },
    };
};
