// Conformance audit — run through the Figma bridge via figma_execute.
//
// Measures a frame (or set of frames) against MHC Type System v3, the 4dp
// spacing grid, and the object-style token sets. Emits counts, not opinions.
// Thresholds and rationale: reference/review/conformance.md
//
// Usage: set TARGET_IDS to the frame ids you want measured, or leave empty to
// audit the current selection. Pass timeout: 30000 to figma_execute for large sets.

const TARGET_IDS = [];            // e.g. ['2567:3736', '2567:4100']
const BREAKPOINT = 'compact';     // 'compact' (<600dp) or 'medium' (>=600dp)

// ---------- permitted value sets (cache of design/foundation/*) ----------
// Size and weight are NOT independent axes. Each of the 25 classes fixes both,
// so 16/Semibold is illegal even though 16 and Semibold are each legal elsewhere.
// Legal (weight -> sizes) pairs, Compact (<600dp):
const CLASSES = {
  compact: {
    Regular:  [14, 16, 18, 45, 51, 58],                        // Body 1-3, Paragraph 1-3, Display 1-3
    Medium:   [11, 12, 14, 16, 18, 20, 25, 28, 32, 36, 40],    // Label 0-3, Caption, Eyebrow, Title 1-3, Heading 1-6
    Semibold: [11],                                            // `Small` only
  },
  medium: {
    Regular:  [16, 18, 20, 52, 58, 66],
    Medium:   [12, 14, 16, 18, 20, 23, 29, 32, 36, 41, 46],
    Semibold: [12],
  },
};
const FAMILIES = ['SF Pro Display', 'SF Pro Text'];
const RADII    = [0, 2, 4, 8, 12, 16, 999];
const BORDERS  = [1, 2, 4, 8];
const CEIL     = { signatures: 6, fills: 8, families: 2, unbound: 0 };

// Radius and border tokens govern containers, not vector artwork. Icon internals
// carry arbitrary geometry by nature; counting them produced a ~5x false-positive
// rate on the first LifeForce run.
const SHAPED = ['FRAME', 'RECTANGLE', 'COMPONENT', 'INSTANCE', 'COMPONENT_SET'];
const hasVisibleStroke = n => 'strokes' in n && Array.isArray(n.strokes)
  && n.strokes.some(s => s.visible !== false);

// ---------- colour: sRGB -> CIELAB -> CIEDE2000 ----------
// Similarity is measured in CIEDE2000. Never by hex string, RGB distance, or HSL.
function rgbToLab(r, g, b) {
  const inv = v => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  const R = inv(r), G = inv(g), B = inv(b);
  const X = (R * 0.4124564 + G * 0.3575761 + B * 0.1804375) / 0.95047;
  const Y = (R * 0.2126729 + G * 0.7151522 + B * 0.0721750) / 1.0;
  const Z = (R * 0.0193339 + G * 0.1191920 + B * 0.9503041) / 1.08883;
  const f = t => (t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116);
  const fx = f(X), fy = f(Y), fz = f(Z);
  return { L: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

function deltaE2000(p, q) {
  const rad = Math.PI / 180, deg = 180 / Math.PI;
  const C1 = Math.sqrt(p.a * p.a + p.b * p.b), C2 = Math.sqrt(q.a * q.a + q.b * q.b);
  const Cb = (C1 + C2) / 2, Cb7 = Math.pow(Cb, 7);
  const G = 0.5 * (1 - Math.sqrt(Cb7 / (Cb7 + Math.pow(25, 7))));
  const a1 = (1 + G) * p.a, a2 = (1 + G) * q.a;
  const C1p = Math.sqrt(a1 * a1 + p.b * p.b), C2p = Math.sqrt(a2 * a2 + q.b * q.b);
  let h1 = Math.atan2(p.b, a1) * deg; if (h1 < 0) h1 += 360;
  let h2 = Math.atan2(q.b, a2) * deg; if (h2 < 0) h2 += 360;
  const dL = q.L - p.L, dC = C2p - C1p;
  let dh = 0;
  if (C1p * C2p !== 0) {
    dh = h2 - h1;
    if (dh > 180) dh -= 360; else if (dh < -180) dh += 360;
  }
  const dH = 2 * Math.sqrt(C1p * C2p) * Math.sin((dh * rad) / 2);
  const Lb = (p.L + q.L) / 2, Cbp = (C1p + C2p) / 2;
  let hb;
  if (C1p * C2p === 0) hb = h1 + h2;
  else if (Math.abs(h1 - h2) <= 180) hb = (h1 + h2) / 2;
  else hb = h1 + h2 < 360 ? (h1 + h2 + 360) / 2 : (h1 + h2 - 360) / 2;
  const T = 1 - 0.17 * Math.cos((hb - 30) * rad) + 0.24 * Math.cos(2 * hb * rad)
              + 0.32 * Math.cos((3 * hb + 6) * rad) - 0.20 * Math.cos((4 * hb - 63) * rad);
  const Cbp7 = Math.pow(Cbp, 7);
  const Rc = 2 * Math.sqrt(Cbp7 / (Cbp7 + Math.pow(25, 7)));
  const Sl = 1 + (0.015 * Math.pow(Lb - 50, 2)) / Math.sqrt(20 + Math.pow(Lb - 50, 2));
  const Sc = 1 + 0.045 * Cbp;
  const Sh = 1 + 0.015 * Cbp * T;
  const Rt = -Math.sin(2 * (30 * Math.exp(-Math.pow((hb - 275) / 25, 2))) * rad) * Rc;
  return Math.sqrt(Math.pow(dL / Sl, 2) + Math.pow(dC / Sc, 2) + Math.pow(dH / Sh, 2)
                   + Rt * (dC / Sc) * (dH / Sh));
}

const hex = c => '#' + [c.r, c.g, c.b]
  .map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');

// ---------- audit one frame ----------
function audit(frame) {
  const legal = CLASSES[BREAKPOINT];
  const allowed = Object.keys(legal).reduce((a, w) => a.concat(legal[w]), []);
  const out = {
    frame: frame.name,
    id: frame.id,
    typeSignatures: {}, offScaleSizes: {}, illegalPairs: {},
    families: {}, unboundText: 0, textNodes: 0,
    fills: {}, offGridSpacing: [], offTokenRadius: [], offTokenBorder: [],
  };

  for (const t of frame.findAll(n => n.type === 'TEXT')) {
    out.textNodes++;
    const size = typeof t.fontSize === 'number' ? t.fontSize : null;
    const fam  = t.fontName && t.fontName.family ? t.fontName.family : 'mixed';
    const wt   = t.fontName && t.fontName.style ? t.fontName.style : 'mixed';
    out.typeSignatures[`${fam} ${size}/${wt}`] = (out.typeSignatures[`${fam} ${size}/${wt}`] || 0) + 1;
    out.families[fam] = (out.families[fam] || 0) + 1;
    if (size !== null && allowed.indexOf(size) === -1) out.offScaleSizes[size] = (out.offScaleSizes[size] || 0) + 1;
    // size+weight must land on a real class, not merely on two legal axes
    else if (!legal[wt] || legal[wt].indexOf(size) === -1) {
      out.illegalPairs[`${size}/${wt}`] = (out.illegalPairs[`${size}/${wt}`] || 0) + 1;
    }
    const sid = t.textStyleId;
    if (typeof sid !== 'string' || sid === '') out.unboundText++;
  }

  for (const n of frame.findAll(() => true).concat([frame])) {
    if ('fills' in n && Array.isArray(n.fills)) {
      for (const f of n.fills) {
        if (f.type === 'SOLID' && f.visible !== false) {
          const h = hex(f.color);
          out.fills[h] = (out.fills[h] || 0) + 1;
        }
      }
    }
    const shaped = SHAPED.indexOf(n.type) !== -1;
    // borders: only where a stroke is actually visible, and only on containers
    if (shaped && hasVisibleStroke(n) && typeof n.strokeWeight === 'number'
        && n.strokeWeight > 0 && BORDERS.indexOf(n.strokeWeight) === -1) {
      out.offTokenBorder.push({ node: n.name, w: n.strokeWeight });
    }
    if (shaped && 'cornerRadius' in n && typeof n.cornerRadius === 'number'
        && RADII.indexOf(n.cornerRadius) === -1) {
      out.offTokenRadius.push({ node: n.name, r: n.cornerRadius });
    }
    if ('layoutMode' in n && n.layoutMode && n.layoutMode !== 'NONE') {
      for (const k of ['itemSpacing', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight']) {
        const v = n[k];
        if (typeof v === 'number' && v % 4 !== 0) out.offGridSpacing.push({ node: n.name, [k]: v });
      }
    }
  }

  // near-duplicate fills, CIEDE2000
  const hexes = Object.keys(out.fills);
  const labs = hexes.map(h => rgbToLab(
    parseInt(h.slice(1, 3), 16) / 255,
    parseInt(h.slice(3, 5), 16) / 255,
    parseInt(h.slice(5, 7), 16) / 255));
  out.invisibleDuplicates = [];   // dE < 2.0  — hard fail
  out.subStepPairs = [];          // dE 2.0-4.9 — under one palette step
  for (let i = 0; i < hexes.length; i++) {
    for (let j = i + 1; j < hexes.length; j++) {
      const dE = deltaE2000(labs[i], labs[j]);
      const pair = { a: hexes[i], b: hexes[j], dE: Math.round(dE * 100) / 100 };
      if (dE < 2.0) out.invisibleDuplicates.push(pair);
      else if (dE < 4.9) out.subStepPairs.push(pair);
    }
  }

  const sigCount = Object.keys(out.typeSignatures).length;
  const fillCount = hexes.length;
  const famCount = Object.keys(out.families).length;
  out.summary = {
    signatures: sigCount, fills: fillCount, families: famCount,
    unbound: out.unboundText, textNodes: out.textNodes,
    offScaleSizes: Object.keys(out.offScaleSizes),
    illegalSizeWeightPairs: Object.keys(out.illegalPairs),
    invisibleDuplicates: out.invisibleDuplicates.length,
    subStepPairs: out.subStepPairs.length,
    offTokenBorders: out.offTokenBorder.length,
    offTokenRadii: out.offTokenRadius.length,
    offGrid: out.offGridSpacing.length,
  };
  out.verdict = (sigCount <= CEIL.signatures && fillCount <= CEIL.fills
    && famCount <= CEIL.families && out.unboundText === CEIL.unbound
    && Object.keys(out.offScaleSizes).length === 0
    && Object.keys(out.illegalPairs).length === 0
    && out.invisibleDuplicates.length === 0 && out.offTokenBorder.length === 0
    && out.offGridSpacing.length === 0 && out.offTokenRadius.length === 0) ? 'PASS' : 'FAIL';
  return out;
}

// ---------- run ----------
// getNodeByIdAsync is required — the sync form is deprecated and fails on
// unloaded pages. Wrap in an async IIFE if your runner needs it.
const targets = [];
if (TARGET_IDS.length) {
  for (const id of TARGET_IDS) {
    const n = await figma.getNodeByIdAsync(id);
    if (n) targets.push(n);
  }
} else {
  targets.push.apply(targets, figma.currentPage.selection.slice());
}

const results = targets.map(audit);
return {
  breakpoint: BREAKPOINT,
  ceilings: CEIL,
  frames: results.length,
  failing: results.filter(r => r.verdict === 'FAIL').length,
  results,
};
