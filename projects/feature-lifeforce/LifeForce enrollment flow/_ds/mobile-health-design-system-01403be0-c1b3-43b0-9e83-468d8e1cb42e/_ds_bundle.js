/* @ds-bundle: {"format":3,"namespace":"MobileHealthDesignSystem_01403b","components":[],"sourceHashes":{"deck-stage.js":"ad1c016a6256","ui_kits/marketing_site/Button.jsx":"488a90cb07c3","ui_kits/marketing_site/CTABanner.jsx":"f702d18139a6","ui_kits/marketing_site/ElementalStrip.jsx":"06708aec45b3","ui_kits/marketing_site/FeatureGrid.jsx":"4d9a85a5d9cd","ui_kits/marketing_site/Footer.jsx":"238ec33af090","ui_kits/marketing_site/Header.jsx":"ecee71db934f","ui_kits/marketing_site/Hero.jsx":"14c24a3eeaaf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MobileHealthDesignSystem_01403b = window.MobileHealthDesignSystem_01403b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Button.jsx
try { (() => {
// Button.jsx — shared CTA for marketing site
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  as: Tag = 'button',
  href
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 999,
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 600,
    letterSpacing: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background 180ms cubic-bezier(.2,.6,.2,1), border-color 180ms, color 180ms',
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      padding: '7px 16px',
      fontSize: 13,
      border: '2px solid'
    },
    md: {
      padding: '11px 24px',
      fontSize: 15,
      border: '2px solid'
    },
    lg: {
      padding: '14px 32px',
      fontSize: 17,
      border: '2px solid'
    }
  };
  const variants = {
    primary: {
      background: '#0f497f',
      color: '#fff',
      borderColor: '#0f497f'
    },
    'outline-orange': {
      background: 'transparent',
      color: '#fff',
      borderColor: '#f15922'
    },
    'outline-aqua': {
      background: 'transparent',
      color: '#0f497f',
      borderColor: '#04a0b7'
    },
    ghost: {
      background: 'transparent',
      color: '#0f497f',
      borderColor: 'transparent'
    },
    white: {
      background: '#fff',
      color: '#0f497f',
      borderColor: '#fff'
    }
  };
  const hoverRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? {
    primary: {
      background: '#0b3a65',
      borderColor: '#0b3a65'
    },
    'outline-orange': {
      background: '#f15922',
      borderColor: '#f15922'
    },
    'outline-aqua': {
      background: '#04a0b7',
      color: '#fff',
      borderColor: '#04a0b7'
    },
    ghost: {
      background: 'rgba(15,73,127,0.06)'
    },
    white: {
      background: '#e6ebec'
    }
  }[variant] : {};
  const props = {
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick
  };
  if (Tag === 'a') props.href = href;
  return React.createElement(Tag, props, children);
}
window.Button = Button;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/CTABanner.jsx
try { (() => {
// CTABanner.jsx — Night Sky dark CTA band
function CTABanner() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#062a42',
      color: '#fff',
      padding: '72px 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -100,
      top: -100,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: '#0f497f',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 80,
      bottom: -60,
      width: 160,
      height: 160,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 4px #f15922'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 42,
      fontWeight: 700,
      lineHeight: 1.15,
      margin: 0
    }
  }, "Take a Breath.", /*#__PURE__*/React.createElement("br", null), "We've Got the Rest."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.82)',
      lineHeight: 1.55,
      margin: '16px auto 28px',
      maxWidth: 520
    }
  }, "Join the members already letting small daily habits quietly change their days."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-orange",
    size: "lg"
  }, "start the journey")));
}
window.CTABanner = CTABanner;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/CTABanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ElementalStrip.jsx
try { (() => {
// ElementalStrip.jsx — full-bleed band evoking elemental photography
function ElementalStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      borderRadius: 24,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,#92d5da,#04a0b7)',
      padding: 32,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, "Water"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.15,
      marginTop: 6
    }
  }, "Move with the current.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,#c4d939,#52a045)',
      padding: 32,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.95
    }
  }, "Earth"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.15,
      marginTop: 6
    }
  }, "Roots hold fast.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(180deg,#f6851f,#f15922)',
      padding: 32,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.95
    }
  }, "Fire"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.15,
      marginTop: 6
    }
  }, "A spark, tended well."))));
}
window.ElementalStrip = ElementalStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ElementalStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/FeatureGrid.jsx
try { (() => {
// FeatureGrid.jsx — three-up feature block using brand icons
function FeatureGrid() {
  const features = [{
    icon: '../../assets/icon-clock.png',
    eyebrow: 'Daily',
    title: 'Small Steps, Every Day',
    body: 'Your coach keeps the streak. You just show up.'
  }, {
    icon: '../../assets/icon-tree-drop.png',
    eyebrow: 'Growth',
    title: 'Looked After, Always',
    body: 'Weekly check-ins that feel like a good friend, not a nag.'
  }, {
    icon: '../../assets/icon-mountain.png',
    eyebrow: 'Goals',
    title: 'Your Journey, Your Pace',
    body: 'No hype, no streak-breakers — just steady progress you can feel.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#0f497f'
    }
  }, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 44,
      fontWeight: 700,
      color: '#0f497f',
      margin: '12px 0 0',
      lineHeight: 1.15
    }
  }, "Create Healthy Cultures"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: '#6e7a7d',
      lineHeight: 1.55,
      margin: '14px auto 0',
      maxWidth: 560
    }
  }, "Three simple pieces, working together quietly in the background of your day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 28
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: '#fff',
      borderRadius: 16,
      padding: '32px 28px',
      boxShadow: '0 4px 12px rgba(6,42,66,0.08), 0 2px 4px rgba(6,42,66,0.04)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: '#e6ebec',
      display: 'grid',
      placeItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: f.icon,
    style: {
      width: 44,
      height: 44,
      objectFit: 'contain'
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#04a0b7'
    }
  }, f.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 22,
      fontWeight: 700,
      color: '#0f497f',
      margin: '6px 0 10px',
      lineHeight: 1.2
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#373d3f',
      lineHeight: 1.55,
      margin: 0
    }
  }, f.body))))));
}
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Footer.jsx
try { (() => {
// Footer.jsx
function Footer() {
  const cols = [{
    title: 'Platform',
    links: ['How it works', 'For individuals', 'For teams', 'Pricing']
  }, {
    title: 'Resources',
    links: ['Blog', 'Guides', 'Research', 'Stories']
  }, {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'Contact']
  }, {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Accessibility', 'Cookies']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#e6ebec',
      padding: '64px 32px 32px',
      color: '#373d3f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.png",
    alt: "mobilehealth",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: '#6e7a7d',
      lineHeight: 1.55,
      marginTop: 16,
      maxWidth: 260
    }
  }, "We make creating healthy cultures simple. Your guardian for everyday health.")), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#0f497f',
      marginBottom: 14
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: 8
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      color: '#373d3f',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '48px auto 0',
      paddingTop: 20,
      borderTop: '1px solid #c6cccd',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: '#6e7a7d'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 mobilehealth. All rights reserved."), /*#__PURE__*/React.createElement("div", null, "Version 1.2")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Header.jsx
try { (() => {
// Header.jsx — Sticky top nav for marketing site
function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  const links = ['Platform', 'For Teams', 'Resources', 'About'];
  const [active, setActive] = React.useState('Platform');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#fff',
      borderBottom: scrolled ? '1px solid #dfe4e5' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 2px rgba(6,42,66,0.06)' : 'none',
      transition: 'box-shadow 180ms, border-color 180ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.png",
    alt: "mobilehealth",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      setActive(l);
    },
    style: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: 14,
      fontWeight: 600,
      color: active === l ? '#0f497f' : '#6e7a7d',
      textDecoration: 'none',
      paddingBottom: 4,
      whiteSpace: 'nowrap',
      borderBottom: `2px solid ${active === l ? '#0f497f' : 'transparent'}`
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "start the journey")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Hero.jsx
try { (() => {
// Hero.jsx — Brand Blue hero, reference-style (page 20 of brand book)
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#0f497f',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -140,
      bottom: -140,
      width: 380,
      height: 380,
      borderRadius: '50%',
      background: '#04a0b7',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 220,
      bottom: -80,
      width: 160,
      height: 160,
      borderRadius: '50%',
      background: '#f15922',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 40,
      bottom: 60,
      width: 80,
      height: 80,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 4px #f3b31e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px 128px',
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 56,
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#92d5da',
      marginBottom: 18
    }
  }, "For Every Day"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Raleway',sans-serif",
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      margin: 0
    }
  }, "Small Habits,", /*#__PURE__*/React.createElement("br", null), "Looked After."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#f15922',
      lineHeight: 1.3,
      marginTop: 18
    }
  }, "Your Guardian for Everyday Health"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.88)',
      marginTop: 16,
      maxWidth: 480
    }
  }, "A quiet, steady hand on your shoulder. Your coach checks in so you don't have to remember to. Take a breath \u2014 we've got the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline-orange",
    size: "lg"
  }, "start the journey"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    as: "a",
    href: "#"
  }, "See how it works \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      height: 360,
      borderRadius: '50%',
      background: 'linear-gradient(160deg,#92d5da 0%,#04a0b7 55%,#0f497f 100%)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(6,42,66,0.4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '58%',
      transform: 'translateX(-50%)',
      width: 180,
      height: 200,
      borderRadius: '90px 90px 0 0',
      background: 'rgba(6,42,66,0.65)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '32%',
      transform: 'translateX(-50%)',
      width: 110,
      height: 110,
      borderRadius: '50%',
      background: 'rgba(6,42,66,0.72)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.18), transparent 45%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -20,
      top: 40,
      width: 70,
      height: 70,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 4px #fff',
      opacity: 0.9
    }
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Hero.jsx", error: String((e && e.message) || e) }); }

})();
