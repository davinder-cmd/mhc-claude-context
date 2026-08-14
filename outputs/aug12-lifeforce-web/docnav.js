(function(){
  var screens = [
    ['about.html','About / Overview'],
    ['01-getting-set-up.html','Getting set up · 3 left'],
    ['02-complete-lab-work.html','Complete lab work · 2 left'],
    ['02b-lab-submitted.html','Lab submitted · awaiting Peak'],
    ['03-health-assessment.html','Health Assessment · 1 left'],
    ['04-scheduling.html','Being scheduled'],
    ['05-scheduled.html','Scheduled'],
    ['active.html','You’re active'],
    ['08-deadline-labs.html','Labs due'],
    ['09-deadline-ha.html','Health Assessment due'],
    ['10-deadline-rebook.html','Missed visit'],
    ['11-deadline-overdue.html','Overdue'],
    ['dependent-sent.html','Dependent · invitation sent'],
    ['dependent-reminder.html','Dependent · HA reminder'],
    ['dependent-done.html','Dependent · credit maximized'],
    ['records.html','Records'],
    ['progress-populated.html','My Progress · populated'],
    ['progress-results.html','My Progress · full results'],
    ['progress-awaiting.html','My Progress · awaiting']
  ];
  var file = (location.pathname.split('/').pop() || 'index.html');
  var i = screens.findIndex(function(s){return s[0]===file;});
  if(i<0) return;
  var prev = screens[(i-1+screens.length)%screens.length];
  var next = screens[(i+1)%screens.length];
  var bar = document.createElement('div');
  bar.className = 'docnav';
  bar.innerHTML =
    '<a href="index.html" title="All screens" aria-label="All screens">☰</a>' +
    '<a href="'+prev[0]+'">‹ Prev</a>' +
    '<span class="dn-c">'+(i+1)+' / '+screens.length+'</span>' +
    '<a href="'+next[0]+'">Next ›</a>';
  document.body.appendChild(bar);
  document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight') location.href = next[0];
    if(e.key==='ArrowLeft')  location.href = prev[0];
  });
})();
