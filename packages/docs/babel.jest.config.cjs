const config = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-env',
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/plugin-syntax-import-attributes',
    '@babel/plugin-proposal-optional-chaining',
  ],
};

module.exports = config;
