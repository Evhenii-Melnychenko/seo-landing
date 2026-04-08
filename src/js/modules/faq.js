export function initFaq() {
  const faqItems = Array.from(document.querySelectorAll(".faq__item"));

  if (!faqItems.length) {
    return;
  }

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");
    const isOpen = item.classList.contains("is-open");
    button?.setAttribute("aria-expanded", String(isOpen));

    button?.addEventListener("click", () => {
      const shouldOpen = !item.classList.contains("is-open");

      faqItems.forEach((current, currentIndex) => {
        const currentButton = current.querySelector(".faq__question");
        const isActive = shouldOpen ? current === item : false;
        current.classList.toggle("is-open", isActive);
        currentButton?.setAttribute("aria-expanded", String(isActive));

        // Keep first item open by default if user closes active one.
        if (!shouldOpen && currentIndex === 0) {
          current.classList.add("is-open");
          currentButton?.setAttribute("aria-expanded", "true");
        }
      });
    });
  });
}
