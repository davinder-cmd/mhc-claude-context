// MH Colors v2 — create the "{Family} 50" paint styles.
// Run via figma_execute ON THE "MH colors v2" FILE'S ACTIVE TAB (cross-file times out).
// Idempotent: skips any "… 50" style that already exists. Grey has no 50 (by design).
// Values = the CIELAB-derived tier from tier-50.css (chroma held; do NOT flatten-over-white).

if (figma.root.name !== 'MH colors v2') return { abort: 'wrong file: ' + figma.root.name };

const hex = h => ({
  r: parseInt(h.slice(1,3),16)/255,
  g: parseInt(h.slice(3,5),16)/255,
  b: parseInt(h.slice(5,7),16)/255,
});

const VALS = {
  Coffee:'#FBF5EF', Cocoa:'#FEF7F1', Mub:'#FAF7F0', Honeydew:'#FDFDF5', Lime:'#F9FDF6',
  Green:'#F7FCF7', Jade:'#F6FCFA', Teal:'#F4FDFC', Turquoise:'#F4FAFD', Ocean:'#F5F8FD',
  Blue:'#F5F7FD', Indigo:'#F6F4FD', Purple:'#F9F3FC', Violet:'#FCF3FA', Pink:'#FEF4F7',
  Coral:'#FEF2F2', Ember:'#FFF6F3', Orange:'#FFF6F0', Mustard:'#FFF9F0', Yellow:'#FFFAF0',
  Lemon:'#FFFCF1',
}; // 21 families — Grey deliberately excluded

const existing = await figma.getLocalPaintStylesAsync();
const byName = new Map(existing.map(s => [s.name, s]));

const created = [], skipped = [];
for (const [fam, h] of Object.entries(VALS)) {
  const name = `${fam} / ${fam} 50`;
  if (byName.has(name)) { skipped.push(name); continue; }
  const s = figma.createPaintStyle();
  s.name = name;
  s.paints = [{ type: 'SOLID', color: hex(h) }];
  created.push(name);
}
return { created: created.length, skipped: skipped.length, createdNames: created };
