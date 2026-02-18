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
