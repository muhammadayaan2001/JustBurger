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