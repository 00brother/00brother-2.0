(() => {
  const intro = document.getElementById("brand-intro");
  if (!intro) return;

  const skip = document.getElementById("intro-skip");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let closed = false;

  const closeIntro = () => {
    if (closed) return;
    closed = true;
    intro.classList.add("intro-leaving");
    document.body.classList.remove("intro-lock");
    window.setTimeout(() => intro.remove(), reduceMotion ? 0 : 480);
  };

  // A abertura aparece rapidamente e não bloqueia a navegação.
  if (reduceMotion || sessionStorage.getItem("00brother-intro-seen") === "1") {
    intro.remove();
    return;
  }

  document.body.classList.add("intro-lock");
  sessionStorage.setItem("00brother-intro-seen", "1");

  // Pular funciona imediatamente, inclusive por teclado (Esc/Enter).
  skip.addEventListener("click", closeIntro);
  skip.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") closeIntro();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeIntro();
  }, { once: true });

  // Duração total curta: cerca de 1,5 segundo.
  window.setTimeout(closeIntro, 1450);
})();
