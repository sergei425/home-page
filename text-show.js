(function() {
  const btn = document.querySelector('.trial_btn-show')
  btn.addEventListener('click', () => {

    btn.classList.toggle('trial_btn-close')

    if(btn.classList.contains('trial_btn-close')) {
      [...document.querySelector('.trial_text-wrap').children].forEach(el => el.classList.add('trial_text-show'));
    } else {
      [...document.querySelector('.trial_text-wrap').children].slice(1).forEach(el => el.classList.remove('trial_text-show'));
    }
  })
})()