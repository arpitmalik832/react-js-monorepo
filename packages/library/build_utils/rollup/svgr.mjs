import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';

import icons_list from '../../static/enums/icons_list.mjs';
import svgrConfig from '../../svgr.config.mjs';
import copyPlugin from './copy.mjs';

const plugins = [svgr(svgrConfig), copyPlugin()];

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
  external: id => /node_modules/.test(id), // Exclude node_modules
  plugins,
};

export default config;
