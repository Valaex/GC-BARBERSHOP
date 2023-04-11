const menu_btn = document.querySelector(".hamburger");
const mobile_nav = document.querySelector(".mobile-nav");
const header_content = document.querySelector(".header-content");
const mobile_links = document.querySelectorAll(".mobile-nav a");

menu_btn.addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  mobile_nav.classList.toggle("active");
  header_content.classList.toggle("active");
});

mobile_links.forEach((link) => {
  link.addEventListener("click", () => {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_nav = document.querySelector(".mobile-nav");
    const header_content = document.querySelector(".header-content");
    menu_btn.classList.toggle("active");
    mobile_nav.classList.toggle("active");
    header_content.classList.toggle("active");
  });
});

// Bouton
const backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.dataset.revealed = "true";
    } else if (!entry.target.dataset.revealed) {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
