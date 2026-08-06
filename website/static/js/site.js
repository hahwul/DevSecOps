(function () {
  "use strict";

  // Reveal panels as they enter the viewport. Hidden states only exist
  // under html.js + prefers-reduced-motion: no-preference (see site.css),
  // so no-JS and reduced-motion readers always see everything.
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Tools page phase filter: chips set data-filter on the list container,
  // CSS does the showing and hiding.
  var grid = document.querySelector("[data-filter]");
  if (grid) {
    var chips = document.querySelectorAll(".filter-chip");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        chip.setAttribute("aria-pressed", "true");
        grid.setAttribute("data-filter", chip.getAttribute("data-phase"));
      });
    });
  }
})();
