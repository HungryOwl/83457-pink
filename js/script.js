'use strict';

ymaps.ready(function() {
   var myMap;
       myMap = new ymaps.Map("map", {
         center: [59.9380,30.3200],
         zoom: [17],
         controls: []
      }),

      myMap.behaviors.disable("scrollZoom");
      myMap.controls.add("zoomControl");

      var myPlacemark = new ymaps.Placemark([59.9386,30.3225], {
         hintContent: "",
         balloonContent: ""
         }, {

         iconLayout: "default#image",
         iconImageHref: "./img/icon-map-marker.svg",
         iconImageSize: [36, 36],
         iconImageOffset: [0, 0]
      });

      myMap.geoObjects.add(myPlacemark);
   });

var nav = document.querySelector('.main-nav__wrapper');
var toggle = document.querySelector('.main-nav__toggle');
var pageheaderwrapper = document.querySelector('.page-header__wrapper');

nav.classList.add('main-nav__wrapper--top');
nav.classList.toggle('main-nav__wrapper--closed');

pageheaderwrapper.classList.add('page-header__wrapper--index');

toggle.addEventListener('click', function() {
  console.log('Алерт!');
  nav.classList.toggle('main-nav__wrapper--closed');
  toggle.classList.toggle('main-nav__toggle--closed');
});



