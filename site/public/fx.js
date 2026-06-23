// JLW Analytics — premium interaction layer (Berith-matched).
// 1) Magnetic custom cursor (ring + dot, grows over interactive elements).
// 2) Word-by-word headline reveal on scroll (progressive enhancement —
//    text stays fully visible if JS/clock fails; words just won't stagger).
// Both respect prefers-reduced-motion and touch devices.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarse = window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ---------- 1. Magnetic cursor ---------- */
  if (!reduce && !coarse) {
    var ring = document.createElement('div'); ring.className = 'fx-cursor';
    var dot = document.createElement('div'); dot.className = 'fx-cursor-dot';
    document.body.appendChild(ring); document.body.appendChild(dot);

    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my; // eased ring position

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
    }, { passive: true });

    function raf() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Grow over interactive targets.
    var hoverSel = 'a, button, [role="button"], .mcard, .scard, .pcard, input, textarea, [data-cursor]';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest && e.target.closest(hoverSel)) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest && e.target.closest(hoverSel)) ring.classList.remove('is-hover');
    });
    document.addEventListener('mouseleave', function () { ring.style.opacity = '0'; dot.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { ring.style.opacity = '1'; dot.style.opacity = '1'; });
  }

  /* ---------- 2. Word-by-word headline reveal ---------- */
  if (!reduce) {
    var heads = Array.prototype.slice.call(document.querySelectorAll('[data-split]'));
    // DOM-aware split: only wrap words inside TEXT nodes; keep element children
    // (e.g. an inline gradient <span>) and <br> intact, treated as one reveal unit.
    heads.forEach(function (el) {
      if (el.__split) return; el.__split = 1;
      var nodes = Array.prototype.slice.call(el.childNodes);
      el.textContent = '';
      nodes.forEach(function (node) {
        if (node.nodeType === 3) { // text node
          var words = node.textContent.split(/(\s+)/);
          words.forEach(function (w) {
            if (w === '' ) return;
            if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
            var s = document.createElement('span'); s.className = 'fx-word'; s.textContent = w;
            el.appendChild(s);
          });
        } else if (node.nodeName === 'BR') {
          el.appendChild(node);
        } else { // element child — reveal as a single unit, markup preserved
          if (node.classList) node.classList.add('fx-word');
          el.appendChild(node);
        }
      });
    });

    function reveal() {
      var h = window.innerHeight || 800;
      heads.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0 && !el.__shown) {
          el.__shown = 1;
          var words = el.querySelectorAll('.fx-word');
          for (var i = 0; i < words.length; i++) {
            (function (w, idx) { setTimeout(function () { w.classList.add('in'); }, idx * 45); })(words[i], i);
          }
        }
      });
    }
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal, { passive: true });
    // Safety: ensure all words visible after 5s no matter what.
    setTimeout(function () {
      document.querySelectorAll('.fx-word').forEach(function (w) { w.classList.add('in'); });
    }, 5000);
  }
})();
