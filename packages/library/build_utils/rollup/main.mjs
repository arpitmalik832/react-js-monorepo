import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';

import svgrConfig from '../../svgr.config.mjs';
import importStyles from './importStyles.mjs';

const plugins = [
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.scss', '.css'],
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    configFile: './.babelrc.cjs',
  }),
  commonjs(),
  postcss({
    extensions: ['.css', '.scss'],
    extract: true,
    minimize: true,
    modules: true,
    use: ['sass'],
    failOnError: true,
  }),
  image(),
  url(),
  svgr(svgrConfig),
  json(),
  importStyles(),
];

if (['production', 'beta'].includes(process.env.LIB_ENV)) {
  plugins.push(
    terser({
      compress: {
        dead_code: true,
        drop_debugger: true,
        drop_console: process.env.LIB_ENV === 'production',
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        keep_fargs: false,
        hoist_vars: true,
        if_return: true,
        join_vars: true,
        side_effects: true,
        warnings: false,
      },
      mangle: true,
    }),
  );
}

const config = {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: !['production', 'beta'].includes(process.env.LIB_ENV),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: id => /node_modules/.test(id), // Exclude node_modules
  plugins,
};

export default config;
