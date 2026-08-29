(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Hero parallax ---------- */
  var heroImg = document.querySelector(".hero-media img");
  if (heroImg && !reduceMotion) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var offset = Math.min(window.scrollY * 0.25, 160);
        heroImg.style.transform = "scale(1.08) translateY(" + offset + "px)";
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var counters = new WeakMap();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var group = el.closest("[data-reveal-group]");
        if (group) {
          var count = counters.get(group) || 0;
          el.style.setProperty("--i", count);
          counters.set(group, count + 1);
        }
        el.classList.add("is-visible");
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Open / closed status, real hours, Calgary time ---------- */
  var HOURS = [
    { open: 10, close: 21 }, // Sunday
    { open: 9, close: 21 },  // Monday
    { open: 9, close: 21 },  // Tuesday
    { open: 9, close: 21 },  // Wednesday
    { open: 9, close: 21 },  // Thursday
    { open: 9, close: 22 },  // Friday
    { open: 9, close: 22 }   // Saturday
  ];

  function calgaryNow() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Edmonton",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false
    }).formatToParts(new Date());
    var map = {};
    parts.forEach(function (p) { map[p.type] = p.value; });
    var weekdayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(map.weekday);
    var hour = parseInt(map.hour, 10) % 24;
    var minute = parseInt(map.minute, 10);
    return { day: weekdayIndex, hour: hour, minute: minute };
  }

  var statusEl = document.querySelector("[data-open-status]");
  var dotEl = document.querySelector("[data-open-dot]");
  var todayRowEl = document.querySelector('[data-today-row]');

  if (statusEl) {
    var now = calgaryNow();
    var today = HOURS[now.day];
    var nowDecimal = now.hour + now.minute / 60;
    var isOpen = nowDecimal >= today.open && nowDecimal < today.close;

    statusEl.textContent = isOpen
      ? "Open now · closes " + formatHour(today.close)
      : "Closed now · opens " + formatHour(today.open);
    if (dotEl) dotEl.classList.add(isOpen ? "is-open" : "is-closed");

    if (todayRowEl) {
      var dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      var row = document.querySelector('[data-day="' + dayNames[now.day] + '"]');
      if (row) row.classList.add("today");
    }
  }

  function formatHour(h) {
    var period = h >= 12 ? "PM" : "AM";
    var hour12 = h % 12 === 0 ? 12 : h % 12;
    return hour12 + " " + period;
  }
})();
