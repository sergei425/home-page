const btn = document.querySelector('.header_btn')
btn.addEventListener('click', toggleImage)

function toggleImage() {
  [...this.children].forEach(el => el.classList.toggle('visually-hidden'))
  document.querySelector('.header_nav').classList.toggle('header_nav-show')
}

const videoBtn = document.querySelector('.reviews_video-btn')
const video = document.getElementById('video')
videoBtn.addEventListener('click', videoPlay)

function videoPlay() {
  video.classList.remove('visually-hidden')
  video.play();
  videoBtn.style.display = 'none'
}

video.addEventListener('click', videoPause)

function videoPause() {
  //if (video.played) {
    video.pause();
    video.pause();
    video.pause();
    video.pause();
    videoBtn.style.display = 'block'
    //video.classList.add('visually-hidden')
  //}
}

