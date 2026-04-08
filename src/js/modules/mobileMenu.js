export function initMobileMenu() {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".site-header__toggle");
  const menu = document.querySelector(".site-header__menu");
  const backdrop = document.querySelector(".site-header__backdrop");

  const closeMenu = () => {
    if (!header || !toggle || !menu) {
      return;
    }

    header.classList.remove("site-header--open");
    body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("site-header--open");
    body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  backdrop?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header?.classList.contains("site-header--open")) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!header || !toggle || !menu || window.innerWidth > 960) {
      return;
    }

    const target = event.target;
    const clickedInsideMenu = menu.contains(target);
    const clickedToggle = toggle.contains(target);

    if (!clickedInsideMenu && !clickedToggle && header.classList.contains("site-header--open")) {
      closeMenu();
    }
  });

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 960) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}
