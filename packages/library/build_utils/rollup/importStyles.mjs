export default function importStyles() {
  const importPaths = [];
  return {
    generateBundle(options, bundle) {
      let importPath = '';
      for (const [fileName, fileMeta] of Object.entries(bundle)) {
        if (fileName === 'index.js') {
          importPath = './index.css';
        }
        importPaths.push(importPath);
        fileMeta.code = `import "${importPath}";\n${fileMeta.code}`;
      }
    },
  };
}
