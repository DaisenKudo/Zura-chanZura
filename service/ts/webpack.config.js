module.exports = {
    mode: "development",
    entry: "./share.ts",
    output: {
        path: __dirname + "/../../assets/js",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};