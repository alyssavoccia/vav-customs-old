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
  $('.gallery-masonry').append("<img class='item' src='" + imgs + `${key}` + "'>");
});

// <a data-fancybox="gallery" data-caption="I love hay bales. Took this snap on a drive through the countryside past some straw fields." href="images/01.jpg">
//   <img src="images/thumbnails/01.jpg" class="gallery-image" alt="Hay Bales">
// </a>

window.onload = function(){
  setTimeout(function(){
    resizeAllGridItems();
  }, 100);
 };

function resizeGridItem(item){
  let grid = document.getElementsByClassName("gallery-masonry")[0];
  
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  let allItems = document.getElementsByClassName("item");
  for (let x = 0; x < allItems.length; x++){
    resizeGridItem(allItems[x]);
  }
}

window.addEventListener("resize", resizeAllGridItems);