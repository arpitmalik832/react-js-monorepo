/**
 * Rollup configuration file for building SVG icons using SVGR.
 * @file This file is saved as `svgr.mjs`.
 */
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import progress from 'rollup-plugin-progress';
import { visualizer } from 'rollup-plugin-visualizer';

import icons_list from '../../../static/enums/icons_list.mjs';
import svgrConfig from '../../../svgr.config.mjs';
import copyPlugin from '../customPlugins/copy.mjs';
import pkg from '../../../package.json' with { type: 'json' };
import buildStats from '../customPlugins/buildStats.mjs';

const timestamp = new Date().toISOString().replace(/:/g, '-');

const plugins = [svgr(svgrConfig), copyPlugin(), progress()];

if (process.env.INCLUDE_BUILD_STATS === 'true') {
  plugins.push(
    visualizer({
      filename: `distInfo/svgr/visualizers/${timestamp}/sunburst.html`,
      template: 'sunburst',
    }),
    visualizer({
      filename: `distInfo/svgr/visualizers/${timestamp}/list.html`,
      template: 'list',
    }),
    visualizer({
      filename: `distInfo/svgr/visualizers/${timestamp}/flamegraph.html`,
      template: 'flamegraph',
    }),
    visualizer({
      filename: `distInfo/svgr/visualizers/${timestamp}/network.html`,
      template: 'network',
    }),
    visualizer({
      filename: `distInfo/svgr/visualizers/${timestamp}/raw-data.html`,
      template: 'raw-data',
    }),
    visualizer({
      filename: `distInfo/svgr/visualizers/${timestamp}/treemap.html`,
      template: 'treemap',
    }),
    buildStats(`distInfo/svgr/buildStats/${timestamp}/index.json`),
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
  input: icons_list.map(i => `src/assets/icons/${i}`),
  output: {
    dir: 'dist',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: !['production', 'beta'].includes(process.env.LIB_ENV),
  },
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
    /node_modules/,
  ], // Exclude node_modules
  plugins,
};

export default config;
