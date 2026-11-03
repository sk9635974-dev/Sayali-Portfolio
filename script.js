const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close menu after selecting a section.
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Update footer year automatically.
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal cards smoothly as they enter the screen.
const revealItems = document.querySelectorAll(
  ".skill-card, .info-card, .project-card, .timeline-item"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        obs.unobserve(entry.target);

      }

    });

  }, { threshold: 0.12 });

  revealItems.forEach((item) => {

    item.classList.add("reveal");

    observer.observe(item);

  });

}