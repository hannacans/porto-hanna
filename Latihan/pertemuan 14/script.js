// ===============================
// GLOBAL DOM READY
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initSmoothScroll();
  initAutoCloseMobileNav();
  initScrollAnimation();
});


// ===============================
// 1. NAVBAR TRANSPARENCY ON SCROLL
// ===============================
function initNavbarScroll() {
  const navbar = document.getElementById("mainNav");

  if (!navbar) return;

  const toggleNavbarBg = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  window.addEventListener("scroll", toggleNavbarBg);
  toggleNavbarBg(); // initial check
}


// ===============================
// 2. SMOOTH SCROLL (ANCHOR)
// ===============================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll(
    '#navbarNav .nav-link[href^="#"]'
  );

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      const offset = document.querySelector(".navbar").offsetHeight;

      const targetPosition =
        targetEl.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}


// ===============================
// 3. AUTO CLOSE MOBILE NAVBAR
// ===============================
function initAutoCloseMobileNav() {
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  if (!navbarCollapse) return;

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const collapseInstance =
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse);

        collapseInstance.hide();
      }
    });
  });
}


// ===============================
// 4. SCROLL ANIMATION (.animated)
// ===============================
function initScrollAnimation() {
  const animatedElements = document.querySelectorAll(".animated");

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedElements.forEach(el => observer.observe(el));
}
