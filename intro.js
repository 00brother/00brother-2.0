(() => {
  const intro = document.getElementById("brand-intro");

  if (!intro) return;

  const skip = document.getElementById("intro-skip");

  let closed = false;

  function closeIntro() {
    if (closed) return;

    closed = true;
    intro.classList.add("intro-leaving");

    sessionStorage.setItem("00brother-intro-seen", "1");

    setTimeout(() => {
      window.location.replace("boas-vindas.html");
    }, 450);
  }

  if (sessionStorage.getItem("00brother-intro-seen") === "1") {
    window.location.replace("boas-vindas.html");
    return;
  }

  if (skip) {
    skip.addEventListener("click", closeIntro);
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeIntro();
    }
  });

  setTimeout(closeIntro, 1500);
})();
