import mainConfig from './build_utils/rollup/main.mjs';
import svgrConfig from './build_utils/rollup/svgr.mjs';

const config = [mainConfig, svgrConfig];

export default config;
