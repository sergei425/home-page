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
//trial_title
//  document.querySelector('.menu').addEventListener('click', (evt) => {
//   let div = evt.target.nextElementSibling;
//   div.classList.toggle('d-none');
//   [...document.querySelectorAll('.dropdown-menu')].filter((el) => {
//     if(el !== div) {
//      el.classList.add('d-none');
//     }
//    })
//  });