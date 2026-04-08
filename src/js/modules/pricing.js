export function initPricing() {
  const pricing = document.querySelector(".pricing");

  if (!pricing) {
    return;
  }

  const billingButtons = Array.from(pricing.querySelectorAll("[data-billing-target]"));
  const priceValues = Array.from(pricing.querySelectorAll("[data-price-monthly]"));
  const cards = Array.from(pricing.querySelectorAll(".pricing-card"));

  const replayAnimation = () => {
    cards.forEach((card) => {
      card.style.animation = "none";
      card.offsetHeight; // reflow
      card.style.animation = "";
    });
  };

  const setBilling = (period, animate = false) => {
    pricing.dataset.billing = period;
    billingButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.billingTarget === period);
      button.setAttribute("aria-pressed", String(button.dataset.billingTarget === period));
    });

    priceValues.forEach((price) => {
      const amount = period === "yearly" ? price.dataset.priceYearly : price.dataset.priceMonthly;
      const suffix = period === "yearly" ? "/yr" : "/mo";
      price.textContent = `$${amount}${suffix}`;
    });

    if (animate) replayAnimation();
  };

  setBilling(pricing.dataset.billing || "monthly");
  billingButtons.forEach((button) =>
    button.addEventListener("click", () => setBilling(button.dataset.billingTarget, true))
  );
}
