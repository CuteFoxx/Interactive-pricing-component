const sliderInput = document.querySelector(".pricing-card__form-input");
const outputViews = document.querySelector(".pricing-card__pageviews-count");
const pricingAmount = document.querySelector(".pricing-card__pricing-amount");
const pricingPeriod = document.querySelector(".pricing-card__pricing-period");
const pricingPeriodToggle = document.querySelector(
  ".pricing-card__form-toggle"
);

const pricing = [
  {
    views: "10k",
    price: "8",
  },
  {
    views: "50k",
    price: "12",
  },
  {
    views: "100k",
    price: "16",
  },
  {
    views: "500k",
    price: "24",
  },
  {
    views: "1m",
    price: "36",
  },
];

window.addEventListener("load", displayBillingPlan());
window.addEventListener("load", (e) => {
  sliderInput.max = pricing.length;
  displayPriceForPageviews(pricing);
});

pricingPeriodToggle.addEventListener("input", (e) => {
  displayBillingPlan();
  if (isYearlyBillingChecked()) {
    pricingAmount.innerHTML = `\$ ${displayDiscountAmount(0.25)}.00`;
    return;
  }
  pricingAmount.innerHTML = `\$ ${pricing[sliderInput.value - 1].price}.00`;
});

sliderInput.addEventListener("input", (e) => displayPriceForPageviews(pricing));

function displayPriceForPageviews() {
  outputViews.innerHTML = pricing[sliderInput.value - 1].views;

  if (isYearlyBillingChecked()) {
    pricingAmount.innerHTML = `\$ ${displayDiscountAmount(0.25)}.00`;
    return;
  }

  pricingAmount.innerHTML = `\$ ${pricing[sliderInput.value - 1].price}.00`;
}

function isYearlyBillingChecked() {
  return pricingPeriodToggle.checked;
}
function displayBillingPlan() {
  isYearlyBillingChecked()
    ? (pricingPeriod.innerHTML = "year")
    : (pricingPeriod.innerHTML = "month");
}
function displayDiscountAmount(discount) {
  //should be 0.25 for 25% 0.1 for 10% etc
  let priceAfterDiscount =
    pricing[sliderInput.value - 1].price * 12 -
    pricing[sliderInput.value - 1].price * 12 * discount;

  return priceAfterDiscount;
}
