
(() => {
  const intro = document.getElementById("brand-intro");
  if (!intro) return;

  const skip = document.getElementById("intro-skip");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let closed = false;

  function closeIntro() {
    if (closed) return;
    closed = true;

    intro.classList.add("intro-leaving");

    setTimeout(() => {
      window.location.replace("boas-vindas.html");
    }, reduceMotion ? 0 : 480);
  }

  if (reduceMotion) {
    window.location.replace("boas-vindas.html");
    return;
  }

  if (skip) {
    skip.addEventListener("click", closeIntro);
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeIntro();
  });

  setTimeout(closeIntro, 1450);
})();
