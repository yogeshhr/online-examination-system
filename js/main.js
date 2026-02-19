document.addEventListener("DOMContentLoaded", function () {

  enableSmoothScroll();

});

// Smooth Scroll Function

function enableSmoothScroll() {

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }

    });
  });

}

// Active Navbar Highlight

window.addEventListener("scroll", function () {

  const sections = document.querySelectorAll("section, footer");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach(section => {

    const rect = section.getBoundingClientRect();
    const sectionMiddle = rect.top + rect.height / 2;

    if (sectionMiddle >= 0 && sectionMiddle <= window.innerHeight) {
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
