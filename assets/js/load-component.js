document.addEventListener("DOMContentLoaded", () => {
  fetch("components/navbar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");
      const navLinkItems = document.querySelectorAll(".nav-link");
      const nav = document.getElementById("mainNav");

      // Toggle hamburger
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        menuToggle.classList.toggle("active");
      });

      // Auto close menu on click (mobile)
      navLinkItems.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
          menuToggle.classList.remove("active");
        });
      });

      // Active section highlight
      window.addEventListener("scroll", () => {
        let current = "";

        document.querySelectorAll("section").forEach(section => {
          const sectionTop = section.offsetTop - 120;
          if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
          }
        });

        navLinkItems.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });

        // Navbar transparency on scroll
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });
    });
});

