(() => {
  const overlay = document.querySelector(".page-transition");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Animação das seções ao aparecerem na tela.
  if (!reduceMotion && "IntersectionObserver" in window) {
    const items = document.querySelectorAll(
      ".section-head, .card, .team-edit-hint, .band-inner, .form-layout, .project-card"
    );

    items.forEach((item, index) => {
      item.classList.add("scroll-reveal");
      item.style.setProperty(
        "--reveal-delay",
        `${(index % 3) * 90}ms`
      );
    });

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });

    items.forEach(item => observer.observe(item));
  }

  // Não interceptar links entre as páginas.
  // Isso evita atrasos e conflitos nos redirecionamentos.
})();
