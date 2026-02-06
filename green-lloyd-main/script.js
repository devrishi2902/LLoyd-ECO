/* =========================
   ACTIVE NAV LINK HIGHLIGHT
========================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================
   IMAGE LAZY LOADING
========================= */
document.querySelectorAll("img").forEach(img => {
  img.setAttribute("loading", "lazy");
});