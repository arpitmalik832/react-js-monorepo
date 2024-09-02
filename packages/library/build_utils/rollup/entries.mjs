import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

import { ENTRIES } from '../config/entries.mjs';
import svgrConfig from '../../svgr.config.mjs';

const getEntryConfig = ({ inputFile }) => {
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

  return {
    input: inputFile,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        sourcemap: !['production', 'beta'].includes(process.env.LIB_ENV),
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins,
  };
};

const getEntries = () => ENTRIES.map(entry => getEntryConfig(entry));

export default getEntries;
