window.addEventListener("load", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-list");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("show");
  });

  // Close menu after clicking a link (mobile UX)
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
});
