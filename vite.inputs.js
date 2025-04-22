import fs from 'fs';
import path from 'path';

function getAllJsFiles(dir) {
  let results = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getAllJsFiles(fullPath));
    } else if (path.extname(fullPath) === '.js') {
      results.push(fullPath.replace(/\\/g, '/'));
    }
  }

  return results;
}

const crudJsFiles = getAllJsFiles('resources/js/dashboard/crud');

console.log('✅ Collected files:', crudJsFiles);

export default crudJsFiles;
