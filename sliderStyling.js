const sliderRangeColor = "hsl(174, 77%, 80%)";
const emptySliderRangeColor = "hsl(224, 65%, 95%)";

const slider = document.querySelector(".pricing-card__form-input");

window.addEventListener("load", fillSLider);

slider.addEventListener("input", fillSLider);

function fillSLider(e) {
  let sliderFillValue = (slider.value / slider.max) * 100;

  slider.style.background = `linear-gradient(to right, ${sliderRangeColor} ${
    sliderFillValue - 25
  }%, ${emptySliderRangeColor} ${sliderFillValue - 5}%)`;
}
