'use strict';

var nav = document.querySelector('.main-nav__wrapper');
var toggle = document.querySelector('.main-nav__toggle');

nav.classList.add('main-nav__wrapper--top');

toggle.addEventListener('click', function() {
  console.log('Алерт!');
  nav.classList.toggle('main-nav__wrapper--closed');
  toggle.classList.toggle('main-nav__toggle--closed');
});



