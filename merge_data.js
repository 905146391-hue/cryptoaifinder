const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'lib');

// Read all parts
const part1 = fs.readFileSync(path.join(dataDir, 'data_part1.ts'), 'utf-8');
const part2 = fs.readFileSync(path.join(dataDir, 'data_part2.ts'), 'utf-8');
const part3 = fs.readFileSync(path.join(dataDir, 'data_part3.ts'), 'utf-8');
const part4 = fs.readFileSync(path.join(dataDir, 'data_part4.ts'), 'utf-8');
const part5 = fs.readFileSync(path.join(dataDir, 'data_part5.ts'), 'utf-8');
const part6 = fs.readFileSync(path.join(dataDir, 'data_part6.ts'), 'utf-8');

// Extract interface and categories from part1
const interfaceMatch = part1.match(/export interface Tool[\s\S]*?\n\}/);
const categoriesMatch = part1.match(/export const categories[\s\S]*?\];/);
const toolsStart = part1.match(/export const tools: Tool\[.*?\]\s*=\s*\[/);
const toolsPart1 = part1.substring(part1.indexOf('[\n', part1.indexOf('export const tools')) + 1);

// Extract tool arrays from each part
function extractTools(content, varName) {
  const match = content.match(new RegExp(`export const ${varName}[\\s\\S]*?=\\s*\\[([\\s\\S]*)\\];`));
  if (match) return match[1].trim();
  return '';
}

const tools2 = extractTools(part2, 'securityTools');
const tools3 = extractTools(part3, 'chartTools');
const tools4 = extractTools(part4, 'walletTools');
const tools5 = extractTools(part5, 'exchangeTools');
const tools6 = extractTools(part6, 'newsDataTools');

// Extract part1 tools (after the array opening bracket)
const part1ToolsMatch = part1.match(/export const tools: Tool\[.*?\]\s*=\s*\[([\s\S]*)\];/);
const tools1 = part1ToolsMatch ? part1ToolsMatch[1].trim() : '';

// Combine all tools
const allTools = [tools1, tools2, tools3, tools4, tools5, tools6].join(',\n');

// Count tools per category
const categoryCounts = {};
const categoryMatches = allTools.matchAll(/category:\s*"([^"]+)"/g);
for (const match of categoryMatches) {
  const cat = match[1];
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
}

const totalTools = Object.values(categoryCounts).reduce((a, b) => a + b, 0);

console.log('Category counts:', categoryCounts);
console.log('Total tools:', totalTools);

// Update categories with correct counts
const categories = `export const categories = [
  { id: "all", name: "All Tools", count: ${totalTools} },
  { id: "trading-bots", name: "Trading Bots", count: ${categoryCounts['trading-bots'] || 0} },
  { id: "analytics", name: "On-Chain Analytics", count: ${categoryCounts['analytics'] || 0} },
  { id: "portfolio", name: "Portfolio Management", count: ${categoryCounts['portfolio'] || 0} },
  { id: "defi", name: "DeFi AI", count: ${categoryCounts['defi'] || 0} },
  { id: "security", name: "Security & Audit", count: ${categoryCounts['security'] || 0} },
  { id: "sentiment", name: "Sentiment & News", count: ${categoryCounts['sentiment'] || 0} },
  { id: "charting", name: "Chart & TA", count: ${categoryCounts['charting'] || 0} },
  { id: "wallet", name: "Wallet & Key", count: ${categoryCounts['wallet'] || 0} },
  { id: "nft", name: "NFT & Gaming", count: ${categoryCounts['nft'] || 0} },
  { id: "exchange", name: "CEX & DEX", count: ${categoryCounts['exchange'] || 0} },
  { id: "news-data", name: "News & Data Feeds", count: ${categoryCounts['news-data'] || 0} },
];`;

// Write final data.ts
const finalData = `${interfaceMatch[0]}\n\n${categories}\n\nexport const tools: Tool[] = [\n${allTools},\n];\n`;

fs.writeFileSync(path.join(dataDir, 'data.ts'), finalData);

console.log('Successfully merged data.ts!');
console.log(`Total: ${totalTools} tools across ${Object.keys(categoryCounts).length} categories`);
