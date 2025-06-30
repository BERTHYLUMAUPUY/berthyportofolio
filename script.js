const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.dataset.target;

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(targetId).classList.add("active");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").classList.add("active");
});
