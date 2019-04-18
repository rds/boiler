import path from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
  context: path.resolve(__dirname, 'src'),
  devServer: {
    port: 7071,
  },
  devtool: 'source-map',
  entry: ['./index.ts'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        use: ['react-hot-loader/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.mjs', '.js', '.json'],
  },
}

export default config