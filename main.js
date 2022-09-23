const slider = document.querySelector('.slider')
const slides = slider.querySelector('.slider__sliders')
const prev = slider.querySelector('.slider__prev')
const next = slider.querySelector('.slider__next')
const sliderToggle = slider.querySelector('.slider__toggle')
const toggleList = [...sliderToggle.children];

let count = 0

next.addEventListener('click', () => {
  count++
  if (count > 0) {
    prev.classList.remove('hidden')
  }
  if (count === slides.children.length - 1) {
    next.classList.add('hidden')
  }
  [...slides.children].forEach(el => el.classList.remove('slider__item-show'))
  slides.children[count].classList.add('slider__item-show')
  toggleList.forEach(el => el.classList.remove('active'))
  toggleList[count].classList.add('active')
})

prev.addEventListener('click', () => {
  count--
  if (count < slides.children.length - 1) {
    next.classList.remove('hidden')
  }
  if (count === 0) {
    prev.classList.add('hidden')
  }
  [...slides.children].forEach(el => el.classList.remove('slider__item-show'))
  slides.children[count].classList.add('slider__item-show')
  toggleList.forEach(el => el.classList.remove('active'))
  toggleList[count].classList.add('active')
})

sliderToggle.addEventListener('click', (evt) => {
  [...slides.children].forEach(el => el.classList.remove('slider__item-show'))

  const index =  toggleList.findIndex(el => el === evt.target)
  if (index > 0) {
    prev.classList.remove('hidden')
  }
  if (index === slides.children.length - 1) {
    next.classList.add('hidden')
  }
  if (index < slides.children.length - 1) {
    next.classList.remove('hidden')
  }
  if (index === 0) {
    prev.classList.add('hidden')
  }
  slides.children[index].classList.add('slider__item-show')
  toggleList.forEach(el => el.classList.remove('active'))
  toggleList[index].classList.add('active')
})
