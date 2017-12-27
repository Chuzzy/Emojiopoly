module.exports = {
    devtool: 'inline-source-map',
    
    entry: './src/public/main.ts',
    output: {
        filename: 'dist/public/bundle.js'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}