// Mobile navigation only. Everything else on the page works without JavaScript.
// Without this script the navigation links stay visible (see styles.css).
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('site-menu');
  if (!header || !toggle || !menu) return;

  // Keep in step with the max-width breakpoint in styles.css.
  var mobile = window.matchMedia('(max-width: 719.98px)');

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  document.documentElement.classList.add('nav-ready');

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Close after choosing a link.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });

  // Escape closes the menu and returns focus to the button.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when focus or a click moves outside the header.
  header.addEventListener('focusout', function (event) {
    if (isOpen() && event.relatedTarget && !header.contains(event.relatedTarget)) {
      setOpen(false);
    }
  });

  document.addEventListener('click', function (event) {
    if (isOpen() && !header.contains(event.target)) setOpen(false);
  });

  // Reset when the layout switches between mobile and desktop.
  mobile.addEventListener('change', function () {
    setOpen(false);
  });
})();
