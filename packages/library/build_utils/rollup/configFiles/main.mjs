/**
 * Rollup configuration for the main library build.
 * @file This file is saved as `main.mjs`.
 */
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
import progress from 'rollup-plugin-progress';
import { visualizer } from 'rollup-plugin-visualizer';

import pkg from '../../../package.json' with { type: 'json' };
import svgrConfig from '../../../svgr.config.mjs';
import importStyles from '../customPlugins/importStyles.mjs';
import buildStats from '../customPlugins/buildStats.mjs';

const timestamp = new Date().toISOString().replace(/:/g, '-');

const plugins = [
  peerDepsExternal(),
  resolve({
    extensions: ['.js', '.jsx', '.scss', '.css'],
  }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    configFile: './babel.config.cjs',
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
  progress(),
];

if (process.env.INCLUDE_BUILD_STATS === 'true') {
  plugins.push(
    visualizer({
      filename: `distInfo/main/visualizers/${timestamp}/sunburst.html`,
      template: 'sunburst',
    }),
    visualizer({
      filename: `distInfo/main/visualizers/${timestamp}/list.html`,
      template: 'list',
    }),
    visualizer({
      filename: `distInfo/main/visualizers/${timestamp}/flamegraph.html`,
      template: 'flamegraph',
    }),
    visualizer({
      filename: `distInfo/main/visualizers/${timestamp}/network.html`,
      template: 'network',
    }),
    visualizer({
      filename: `distInfo/main/visualizers/${timestamp}/raw-data.html`,
      template: 'raw-data',
    }),
    visualizer({
      filename: `distInfo/main/visualizers/${timestamp}/treemap.html`,
      template: 'treemap',
    }),
    buildStats(`distInfo/main/buildStats/${timestamp}/index.json`),
  );
}

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
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
    /node_modules/,
  ], // Exclude node_modules
  plugins,
};

export default config;
