document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.top-nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('mobile-open');
    });
  }
});

document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

// Scroll animation
(function () {
  var els = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        } else {
          e.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (el) { obs.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }
})();

// Sound toggle for hero trailer
(function () {
  var btn = document.getElementById('soundToggle');
  var video = document.querySelector('.hero-bg video');
  if (btn && video) {
    btn.addEventListener('click', function () {
      video.muted = !video.muted;
      btn.innerHTML = video.muted ? 'Sound: OFF' : 'Sound: ON';
    });
  }
})();
