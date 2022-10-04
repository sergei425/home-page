(function() {
  const btn = document.querySelector('.trial_btn-show')
  btn.addEventListener('click', () => {

    [...document.querySelector('.trial_text-wrap').children].forEach(el => el.classList.add('trial_text-show'));
  })
})()