
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-12");
          entry.target.classList.add("opacity-100", "translate-y-0");
          obs.unobserve(entry.target); // remove após exibir
        }
      });
    }, {
      threshold: 0.2
    });

    document.querySelectorAll(".observavel").forEach(element => {
      observer.observe(element);
    });
  });

  const scrollContainer = document.getElementById('partnerScroll');
      
  setInterval(() => {
    if (scrollContainer) {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
    }
  }, 20); // velocidade da rolagem

  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
  });
