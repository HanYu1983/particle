const fs = require('fs');
const path = require('path');

// Read TSV file
const content = fs.readFileSync('fighter.tsv', 'utf-8');
const lines = content.split('\n');

// Get header
const header = lines[0].split('\t');
const titleIdx = header.findIndex(col => col.includes('title'));

console.log('Title column index:', titleIdx);

// Extract unique titles with their first occurrence row number
const titleMap = new Map();
for (let i = 1; i < lines.length; i++) {
    const parts = lines[i].split('\t');
    if (parts.length > titleIdx && parts[titleIdx]) {
        const title = parts[titleIdx];
        if (!titleMap.has(title)) {
            titleMap.set(title, i);
        }
    }
}

console.log(`Found ${titleMap.size} unique titles`);

// Create imagePrompt directory
const outputDir = 'imagePrompt';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Generate JSON files for each title
let count = 0;
for (const [title, rowNum] of [...titleMap.entries()].sort((a, b) => a[1] - b[1])) {
    // Use row number as filename to preserve order
    const filename = path.join(outputDir, `${String(count + 1).padStart(3, '0')}_${title}.json`);
    
    const promptData = {
        title: title,
        prompt: `${title}, martial arts weapon, traditional Chinese martial arts style, ink wash painting style, sumi-e, monochrome ink painting, flowing brush strokes, dynamic pose, ancient weapon aesthetic, minimalist composition, traditional Asian art style`
    };
    
    fs.writeFileSync(filename, JSON.stringify(promptData, null, 2), 'utf-8');
    count++;
}

console.log(`Generated ${count} prompt files`);