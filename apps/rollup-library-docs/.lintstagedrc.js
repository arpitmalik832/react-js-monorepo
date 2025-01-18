/**
 * @file Lintstaged configuration for the documentation site.
 */
const config = {
  '**/*.{mjs,cjs,js,jsx,mdx,md}': ['pnpm lint-js:fix', 'pnpm prettier:fix'],
  '**/*.{css,scss}': ['pnpm lint-css:fix', 'pnpm prettier:fix'],
  '**/*.json': ['pnpm prettier:fix'],
};

module.exports = config;
