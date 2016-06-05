import { src, dest } from 'gulp';
import webpack from 'webpack-stream';
import webpackConfig from '../webpack.config';

export default done =>
    src('src/js/index.js')
        .pipe(webpack(webpackConfig))
        .on('error', done)
        .pipe(dest('dist'));
