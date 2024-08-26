const config = {
  entry: ['src/index.js'],
  project: ['{src,public}/**/*.{mjs,cjs,js,ts,jsx,css,scss,json,md,mdx}'],
  ignore: ['packages/library/*', 'packages/library/lib/library.js'],
};

export default config;
