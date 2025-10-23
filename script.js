// basic JS: smooth scroll, mobile menu toggle, simple form handling, testimonials carousel
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = a.getAttribute("href");
    if (target.length > 1) {
      e.preventDefault();
      document
        .querySelector(target)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile menu (very simple)
const toggle = document.querySelector(".menu-toggle");
toggle?.addEventListener("click", () => {
  const nav = document.querySelector("nav ul");
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  if (nav.style.display === "flex") nav.style.display = "none";
  else nav.style.display = "flex";
  nav.style.flexDirection = "column";
});

// Contact form — simulate submission (replace with real endpoint)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");
const clear = document.getElementById("clearBtn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  // Basic validation
  if (!data.get("name") || !data.get("email")) {
    msg.textContent = "Please provide your name and email.";
    return;
  }
  msg.textContent = "Sending...";
  // Simulate network request
  setTimeout(() => {
    msg.textContent =
      "Thanks — your request has been received. We will contact you within 1 business day.";
    form.reset();
  }, 900);
});
clear.addEventListener("click", () => {
  form.reset();
  msg.textContent = "";
});

// Simple testimonials auto-scroll
(function carousel() {
  const cont = document.getElementById("testiContainer");
  if (!cont) return;
  let offset = 0;
  setInterval(() => {
    offset += 292; // approx card width + gap
    if (offset > cont.scrollWidth - cont.clientWidth) offset = 0;
    cont.scrollTo({ left: offset, behavior: "smooth" });
  }, 2000);
})();

// Accessibility: focus first input when navigating to #book
window.addEventListener("hashchange", () => {
  if (location.hash === "#book") {
    document.getElementById("name")?.focus();
  }
});
