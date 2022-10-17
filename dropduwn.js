const list = document.querySelector(".trial_list");
const elem = document.querySelector(".trial_nested-list");

elem.addEventListener("click", (evt) => {
  if (evt.target instanceof HTMLParagraphElement) {
    [...elem.children].forEach((el) => el.classList.remove("show-active"));
    evt.target.parentNode.classList.add("show-active");
    document.querySelector(".trial_description-title").textContent =
      evt.target.textContent;
  }
});

list.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("trial_title")) {
    evt.target.classList.toggle("active");
    const nextElem = evt.target.nextElementSibling;
    nextElem.classList.toggle("visually-hidden");
    [...document.querySelectorAll(".trial_nested-list")].map((el) => {
      if (el !== nextElem) {
        el.classList.add("visually-hidden");
      }
    });

    [...document.querySelectorAll(".trial_title")].map((el) => {
      if (el !== evt.target) {
        el.classList.remove("active");
      }
    });

    nextElem?.addEventListener("click", (evt) => {
      if (evt.target instanceof HTMLParagraphElement) {
        [...nextElem.children].forEach((el) =>
          el.classList.remove("show-active")
        );

        evt.target.parentNode.classList.add("show-active");
        document.querySelector(".trial_description-title").textContent =
          evt.target.textContent;
      }
    });
  }
});
