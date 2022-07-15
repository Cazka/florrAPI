const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'florrAPI.js',
        library: 'florrAPI',
    },
    optimization: {
        minimize: true,
    },
};
