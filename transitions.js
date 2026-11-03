(() => {
  const overlay = document.querySelector(".page-transition");
  if (!overlay) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal sections as they enter the viewport.
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealItems = document.querySelectorAll(".section-head, .card, .team-edit-hint, .band-inner, .form-layout, .project-card");
    revealItems.forEach((item, index) => {
      item.classList.add("scroll-reveal");
      item.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
    });
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach(item => observer.observe(item));
  }
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || reduceMotion || event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        link.target === "_blank" || link.hasAttribute("download")) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname && url.hash) return;
    if (!/^https?:$/.test(url.protocol)) return;
    event.preventDefault();
    document.body.classList.add("lock");
    overlay.classList.add("is-active");
    window.setTimeout(() => { location.href = url.href; }, 760);
  });
})();