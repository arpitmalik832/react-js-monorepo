export default function importStyles() {
  return {
    generateBundle(options, bundle) {
      let importPath = '';
      for (const [fileName, fileMeta] of Object.entries(bundle)) {
        if (fileName === 'index.js') {
          importPath = './index.css';
          fileMeta.code = `import "${importPath}";\n${fileMeta.code}`;
        }
      }
    },
  };
}
