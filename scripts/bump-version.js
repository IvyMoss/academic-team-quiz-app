#!/usr/bin/env node
// Increments every ?v=N asset query in index.html so browsers and the
// GitHub Pages cache fetch fresh copies of edited CSS/JS. Run before pushing:
//   npm run bump
const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const versions = [...html.matchAll(/\?v=(\d+)/g)].map((m) => Number(m[1]));
if (versions.length === 0) {
  console.error('No ?v= asset versions found in index.html');
  process.exit(1);
}
const next = Math.max(...versions) + 1;
fs.writeFileSync(file, html.replace(/\?v=\d+/g, `?v=${next}`));
console.log(`Asset version bumped to v=${next} (${versions.length} references)`);
