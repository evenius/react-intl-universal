import * as p from 'path';
import babel from '@rollup/plugin-babel';
// import 'babel-preset-es2015-rollup';

const copyright = (`/*
 * Copyright ${new Date().getFullYear()}, Alibaba Group.
 * Copyrights licensed under the BSD License.
 * See the accompanying LICENSE file for terms.
 */
`);

export default {
    input : p.resolve('src/index.js'),
    output : [
        {
            file: 'lib/index.js',
            banner : copyright,
            exports: 'named',
            format: 'cjs'
        },
        {
            file: 'es/index.js',
            banner : copyright,
            exports: 'named',
            format: 'es'
        }
    ],
    external : [
        'invariant',
        'intl-messageformat',
        'intl',
        'escape-html',
        'cookie',
        'querystring',
        'react',
        'console-polyfill',
        'plain-object-merge',
    ],
    plugins : [babel({exclude: 'node_modules/**', babelHelpers: 'inline'})]
};
