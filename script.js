// Midlands Media Co. — site interactions

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }

  // Countdown to the grand-opening special deadline: Friday, Oct 23, 2026, 11:59 PM ET
  var deadline = new Date("2026-10-23T23:59:59-04:00").getTime();

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var now = Date.now();
    var diff = deadline - now;
    var label;
    if (diff <= 0) {
      label = "Offer ended";
    } else {
      var d = Math.floor(diff / 86400000);
      var h = Math.floor((diff % 86400000) / 3600000);
      var m = Math.floor((diff % 3600000) / 60000);
      label = d + "d " + pad(h) + "h " + pad(m) + "m";
    }
    ["countdown", "countdown2"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = label === "Offer ended" && id === "countdown"
        ? "Offer ended"
        : (id === "countdown" ? label.replace(/^0d /, "") : label);
    });
  }

  tick();
  setInterval(tick, 60000);
})();
