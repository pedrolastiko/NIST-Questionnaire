const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const sourceFile = path.join(projectRoot, 'index.html');
const destFile = path.join(distDir, 'index.html');

if (!fs.existsSync(sourceFile)) {
  console.error(`Source file not found: ${sourceFile}`);
  process.exit(1);
}

fs.mkdirSync(distDir, { recursive: true });
fs.copyFileSync(sourceFile, destFile);

console.log('Build complete: dist/index.html updated.');
