document.querySelector('.trial_list').addEventListener('click', (evt) => {
  if (evt.target.classList.contains('trial_title')) {
    evt.target.classList.toggle('active')
    evt.target.nextElementSibling.classList.toggle('show');
    [...document.querySelectorAll('.trial_item > ul')].filter((el) => {
    if(el !== evt.target.nextElementSibling) {
     el.classList.remove('show');
    }
   });
   [...document.querySelectorAll('.trial_title')].filter((el) => {
    if(el !== evt.target) {
     el.classList.remove('active');
    }
   });
  }
 });
