/**
 * Rollup configuration file for the library package.
 * @file This file is saved as `rollup.config.js`.
 */
import mainConfig from './build_utils/rollup/configFiles/main.mjs';
import svgrConfig from './build_utils/rollup/configFiles/svgr.mjs';

const config = [mainConfig, svgrConfig];

export default config;
