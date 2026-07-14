const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

const targetHeader = "/* ==========================================================================\n   INTERACTIVE ADOPTION ROADMAP TIMELINE LOGIC (REDESIGNED)";
const index = content.indexOf(targetHeader);

if (index === -1) {
  console.error("Target header not found!");
  process.exit(1);
}

const before = content.slice(0, index);

const newRoadmapCode = fs.readFileSync(path.join(__dirname, 'new_roadmap.txt'), 'utf8');

fs.writeFileSync(appJsPath, before + newRoadmapCode, 'utf8');
console.log("Successfully replaced the bottom adoption roadmap code with text file contents!");
