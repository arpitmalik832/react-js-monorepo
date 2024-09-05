const config = {
  '**/*.{mjs,cjs,js,jsx,mdx}': [
    'yarn lint-js:fix',
    'yarn prettier:fix "**/*.{mjs,cjs,js,jsx,mdx}"',
  ],
  '**/*.{css,scss}': [
    'yarn lint-css:fix',
    'yarn prettier:fix "**/*.{css,scss}"',
  ],
  '**/*.json': ['yarn prettier:fix "**/*.json"'],
  '**/*.md': ['yarn prettier:fix "**/*.md"'],
};

export default config;
