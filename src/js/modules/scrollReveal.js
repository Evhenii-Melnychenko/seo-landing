export function initScrollReveal() {
  const elements = Array.from(document.querySelectorAll("[data-reveal]"));

  if (!elements.length) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
  const speedMap = {
    fast: 520,
    normal: 700,
    slow: 880
  };

  const targets = new Set(elements);

  elements.forEach((element) => {
    const requestedEffect = element.dataset.reveal || "from-bottom";
    const effect = isMobile && requestedEffect !== "zoom" ? "from-bottom" : requestedEffect;
    const delay = Number(element.dataset.revealDelay || 0);
    const speed = element.dataset.revealSpeed || "normal";
    const duration = speedMap[speed] || speedMap.normal;

    element.classList.add("reveal", `reveal--${effect}`);
    element.style.setProperty("--reveal-delay", `${delay}ms`);
    element.style.setProperty("--reveal-duration", `${duration}ms`);
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((element) => element.classList.add("reveal--in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("reveal--in");
        io.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  targets.forEach((element) => observer.observe(element));
}
