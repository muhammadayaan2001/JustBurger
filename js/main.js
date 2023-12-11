// ======= Hamburger ======== ////
var cartItem = document.getElementById('cart-icon');
var cartOverlay = document.getElementById('cart');
var overlay = document.getElementById('overlay');
var closeSvg = document.getElementById('close');

cartItem.addEventListener('click', function() {
  cartOverlay.classList.toggle("list"); // add class 'list' on div where id = cart
  overlay.classList.toggle("overlay"); // Toggle the overlay class on the entire page
  disappearOverlay();
});

const disappearOverlay = () => {
  overlay.addEventListener("click", () => {
    overlay.classList.remove("overlay");
    cartOverlay.classList.remove("list");
  });
  closeSvg.addEventListener("click", () => {
    overlay.classList.remove("overlay");
    cartOverlay.classList.remove("list");
  });
};

// ======== Hamburger Ends ========= ///

// ======== Owl carousel slider ====== ///

$(document).ready(function(){
  $(".nw-arrival").owlCarousel({
    items:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        600:{
            items:4
        }
    }
  });
  $(".herobg-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    // responsive:{
    //     600:{
    //         items:4
    //     }
    // }
  });
});