document.addEventListener("DOMContentLoaded", () => {
  // hamburger
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // active menu
  const current = location.pathname.split("/").pop();
  document.querySelectorAll(".nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
