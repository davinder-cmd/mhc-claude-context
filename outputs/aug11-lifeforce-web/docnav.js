/* ============================================================
   DOC-ONLY flow navigation — NOT part of the product.
   A floating "‹ Prev / Next ›" bar so reviewers can flip through
   every screen in journey order without returning to the index.
   ←/→ arrow keys also work. Hidden in print. Strip this file +
   its <script> include before any real handoff.
   ============================================================ */
(function () {
  var ORDER = [
    ['01-getting-set-up.html',      'Getting set up'],
    ['02-complete-lab-work.html',   'Complete lab work'],
    ['02b-lab-submitted.html',      'Lab submitted → HA'],
    ['03-health-assessment.html',   'Health Assessment'],
    ['04-scheduling.html',          'Being scheduled'],
    ['05-scheduled.html',           'Scheduled'],
    ['active.html',                 'Active'],
    ['08-deadline-labs.html',       'Labs due'],
    ['09-deadline-ha.html',         'HA due'],
    ['10-deadline-rebook.html',     'Missed visit'],
    ['11-deadline-overdue.html',    'Overdue'],
    ['dependent-sent.html',         'Dependent · sent'],
    ['dependent-reminder.html',     'Dependent · reminder'],
    ['dependent-done.html',         'Dependent · done'],
    ['progress-populated.html',     'My Progress'],
    ['progress-full-results.html',  'Full results'],
    ['progress-awaiting.html',      'Awaiting results'],
    ['records.html',                'Records']
  ];
  var here = (location.pathname.split('/').pop() || '').toLowerCase();
  var idx = -1;
  for (var k = 0; k < ORDER.length; k++) { if (ORDER[k][0].toLowerCase() === here) { idx = k; break; } }
  if (idx === -1) return; // index.html or unknown — no bar

  var n = ORDER.length;
  var prev = ORDER[(idx - 1 + n) % n];   // loops
  var next = ORDER[(idx + 1) % n];

  var css =
    '.docnav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99999;'
    + 'display:flex;align-items:center;gap:2px;background:#2C2E2E;color:#fff;border-radius:999px;'
    + 'padding:4px;box-shadow:0 8px 28px rgba(0,0,0,.30);'
    + 'font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text",system-ui,sans-serif;}'
    + '.docnav button,.docnav a{all:unset;box-sizing:border-box;cursor:pointer;display:inline-flex;'
    + 'align-items:center;gap:6px;color:#fff;font-size:13px;font-weight:600;padding:9px 13px;border-radius:999px;}'
    + '.docnav button:hover,.docnav a:hover{background:rgba(255,255,255,.15);}'
    + '.docnav .n{font-variant-numeric:tabular-nums;color:#AFB1B1;font-weight:500;font-size:12px;'
    + 'padding:0 8px;min-width:46px;text-align:center;letter-spacing:.02em;}'
    + '.docnav .ix{color:#AFB1B1;font-size:15px;padding:9px 11px;}'
    + '.docnav .lbl{color:#AFB1B1;font-weight:500;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}'
    + '@media (max-width:520px){.docnav .lbl{display:none;}}'
    + '@media print{.docnav{display:none!important;}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('nav');
  bar.className = 'docnav';
  bar.setAttribute('aria-label', 'Documentation flow navigation');
  bar.innerHTML =
      '<a class="ix" href="index.html" title="All screens" aria-label="All screens">☰</a>'
    + '<button type="button" data-go="' + prev[0] + '" title="' + prev[1] + '">‹ Prev</button>'
    + '<span class="n">' + (idx + 1) + ' / ' + n + '</span>'
    + '<button type="button" data-go="' + next[0] + '" title="' + next[1] + '">Next ›</button>'
    + '<span class="lbl" title="' + next[1] + '">' + next[1] + '</span>';
  document.body.appendChild(bar);

  bar.addEventListener('click', function (e) {
    var b = e.target.closest('[data-go]');
    if (b) location.href = b.getAttribute('data-go');
  });
  document.addEventListener('keydown', function (e) {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowLeft')  { location.href = prev[0]; }
    else if (e.key === 'ArrowRight') { location.href = next[0]; }
  });
})();
