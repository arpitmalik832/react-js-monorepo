/**
 * Add styles import statement to the main index file.
 * @file This file is saved as `importStyles.js`.
 */
/**
 * A Rollup plugin to import styles.
 * @returns {object} The Rollup plugin object.
 * @example
 * // Example usage:
 * importStyles();
 */
export default function importStyles() {
  return {
    name: 'import-styles-plugin',
    generateBundle(options, bundle) {
      let importPath = '';
      for (const [fileName, fileMeta] of Object.entries(bundle)) {
        if (fileName === 'index.js') {
          importPath = './index.css';
          fileMeta.code = `import "${importPath}";${!['production', 'beta'].includes(process.env.LIB_ENV) ? '\n' : ''}${fileMeta.code}`;
        }
      }
    },
  };
}
