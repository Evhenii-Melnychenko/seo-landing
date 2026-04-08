export function initTabs() {
  const tabButtons = Array.from(document.querySelectorAll(".services__tab"));
  const tabPanels = Array.from(document.querySelectorAll(".services__panel"));

  if (!tabButtons.length || !tabPanels.length) {
    return;
  }

  const activateTab = (target) => {
    tabButtons.forEach((button) => {
      const isActive = button.dataset.tabTarget === target;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.tabPanel === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  activateTab(
    tabButtons.find((button) => button.classList.contains("is-active"))?.dataset.tabTarget ||
      tabButtons[0].dataset.tabTarget
  );

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tabTarget));
  });
}
