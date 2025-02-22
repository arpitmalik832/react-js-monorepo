/**
 * @file Knip configuration for the documentation site.
 */
const config = {
  entry: ['src/index.js'],
  project: ['{src,public}/**/*.{mjs,cjs,js,ts,jsx,css,scss,json,md,mdx}'],
};

module.exports = config;
