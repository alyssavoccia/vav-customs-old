/*=======================
  NAVBAR
=======================*/
$('.menu-btn').click(function() {
  $('.main-menu').toggleClass('main-menu_show');
});

$('.nav-link').click(function() {
  if ($(document).width() < 769) {
    $('.main-menu').toggleClass('main-menu_show');
  } else {
    $('main-menu').removeClass('main-menu_show');

  }
});


/*==============================
  LOAD GALLERY IMAGES / RESIZE
==============================*/
let path = require('path');
const imgs = 'assets/grid-images/';
let read = require('read-directory');
let contents = read.sync(path.join(__dirname, 'assets/grid-images'));
Object.entries(contents).forEach(([key]) => {
  $('.gallery-masonry').append(
  `
    <a data-fancybox href=${imgs}${key}>
      <img class='item' src=${imgs}${key}>
    </a>
  `
  );
});