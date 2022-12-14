(function () {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelector(".slider_sliders");
  const prev = slider.querySelector(".slider_prev");
  const next = slider.querySelector(".slider_next");
  const sliderToggle = slider.querySelector(".slider_toggle");
  const toggleList = [...sliderToggle.children];
  const slidesList = [...slides.children];
  let count = 0;

  const verifyCount = (count) => {
    if (count > 0) {
      prev.classList.remove("hidden");
    }
    if (count === slidesList.length - 1) {
      next.classList.add("hidden");
    }
    if (count < slidesList.length - 1) {
      next.classList.remove("hidden");
    }
    if (count === 0) {
      prev.classList.add("hidden");
    }
  }
  next.addEventListener("click", () => {
    count++;
    verifyCount(count)

    slidesList.forEach((el) => el.classList.remove("slider_item-show"));
    slidesList[count].classList.add("slider_item-show");
    toggleList.forEach((el) => el.classList.remove("active"));
    toggleList[count].classList.add("active");
  });

  prev.addEventListener("click", () => {
    count--;
    verifyCount(count)
    slidesList.forEach((el) => el.classList.remove("slider_item-show"));
    slidesList[count].classList.add("slider_item-show");
    toggleList.forEach((el) => el.classList.remove("active"));
    toggleList[count].classList.add("active");
  });

  sliderToggle.addEventListener("click", (evt) => {
    slidesList.forEach((el) => el.classList.remove("slider_item-show"));

    const index = toggleList.findIndex((el) => el === evt.target);
    count = index;
    verifyCount(count)
    slidesList[index].classList.add("slider_item-show");
    toggleList.forEach((el) => el.classList.remove("active"));
    toggleList[index].classList.add("active");
  });
})();
