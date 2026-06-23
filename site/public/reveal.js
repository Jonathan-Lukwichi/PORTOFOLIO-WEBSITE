// Shared scroll-reveal + count-up for JLW Analytics portfolio pages.
// Visibility NEVER depends on the animation clock: elements default to
// opacity:1 in markup and we only animate a small translateY slide. If the
// clock is throttled/frozen (offscreen iframe) the worst case is content that
// is fully visible but not slid — never blank. Counters use setInterval
// (timers fire regardless of paint state).
(function () {
  function reveal(rootEl) {
    var root = (rootEl && rootEl.querySelector) ? rootEl : document;
    var reveals = Array.prototype.slice.call(root.querySelectorAll('[data-reveal]'));
    var counts = Array.prototype.slice.call(root.querySelectorAll('[data-count]'));

    function runCount(el) {
      if (el.__c) return; el.__c = 1;
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var start = Date.now();
      var id = setInterval(function () {
        var t = Math.min((Date.now() - start) / 1300, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))).toString();
        if (t >= 1) clearInterval(id);
      }, 33);
    }
    function vh() { return window.innerHeight || document.documentElement.clientHeight || 800; }

    var check = function () {
      var h = vh();
      reveals.forEach(function (el) {
        if (el.__s) return;
        var r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > -40) { el.__s = 1; el.style.transform = 'none'; el.style.opacity = '1'; }
      });
      counts.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < h * 0.96 && r.bottom > 0) runCount(el);
      });
    };

    check();
    setTimeout(check, 80);
    var iv = setInterval(check, 150);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    // Safety: ensure everything ends visible and counted.
    setTimeout(function () {
      reveals.forEach(function (el) { el.style.transition = 'none'; el.style.transform = 'none'; el.style.opacity = '1'; });
      counts.forEach(runCount);
    }, 6000);
    setTimeout(function () { clearInterval(iv); }, 45000);
  }
  window.__jlwReveal = reveal;
})();
