/**
 * Generates the build stats for the bundle.
 * @file This file is saved as `buildStats.js`.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import zlib from 'zlib';

/**
 * Builds statistics for the bundle.
 * @param {string} outputPath - The path where the build stats will be saved.
 * @returns {void}
 * @example
 * // Example usage
 * buildStats('path/to/output.json');
 */
export default function buildStats(outputPath = 'build-stats.json') {
  let startTime;

  return {
    name: 'build-stats-plugin',
    buildStart() {
      startTime = Date.now();
    },
    generateBundle(options, bundle) {
      const stats = {
        files: [],
        totalSize: 0,
        totalGzippedSize: 0,
        buildDuration: Date.now() - startTime,
        noOfFiles: 0,
        largestFile: null,
      };

      for (const [fileName, fileMeta] of Object.entries(bundle)) {
        if (!fileName.endsWith('.map')) {
          let size = 0;
          let gzippedSize = 0;
          let content = '';

          if (fileMeta.code) {
            content = fileMeta.code;
          } else if (fileMeta.source) {
            content = fileMeta.source;
          } else if (typeof fileMeta === 'string') {
            content = fileMeta;
          }

          size = Buffer.byteLength(content, 'utf8');
          gzippedSize = zlib.gzipSync(content).length;

          stats.files.push({
            fileName,
            size,
            gzippedSize,
            type: fileMeta.type || 'unknown',
          });

          stats.totalSize += size;
          stats.totalGzippedSize += gzippedSize;
        }
      }

      stats.noOfFiles = stats.files.length;

      if (stats.files.length > 0) {
        stats.largestFile = stats.files.reduce(
          (prev, current) => (prev.size > current.size ? prev : current),
          stats.files[0],
        );
        stats.files = stats.files.map(i => ({
          ...i,
          percentageBySize: ((i.size / stats.totalSize) * 100).toFixed(2),
        }));
      }

      // Ensure the directory exists
      mkdirSync(dirname(outputPath), { recursive: true });

      writeFileSync(outputPath, JSON.stringify(stats, null, 2));
    },
  };
}
