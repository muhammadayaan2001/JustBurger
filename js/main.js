// ======= Hamburger ======== ////
var cartItem = document.getElementById('cart-items');

var cartOverlay = document.getElementById('shopping-items');

cartItem.addEventListener('click', function() {
  cartOverlay.classList.toggle("overlay");
  this.classList.toggle("overlay"); // Toggle the overlay class on cart-items
});
// ======== Hamburger Ends ========= ///

// ====== Tabs Slider ======= ///
const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");
const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");
const tabList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(".scrollable-tabs-container .left-arrow")
const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow")

// removed active class from active tab on selected another tab
const removeAllActiveClasses = () => {
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });
};

// add active class on click on tab
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses(); // func call, when select another tab
    tab.classList.add("active");
  });
});

// manage icons on scroll
const  manageIcons = () => {
  // show/hide left arrow icon
  if (tabList.scrollLeft >= 20){
    leftArrowContainer.classList.add("active");
  }else{
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabList.scrollWidth - tabList.clientWidth - 20;
  // console.log("scroll width :", tabList.scrollWidth)
  // console.log("client width :", tabList.clientWidth)

  // show/hide right arrow icon
  if (tabList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  }else{
    rightArrowContainer.classList.add("active");
  }

};

// scroll with right arrow
rightArrow.addEventListener("click", () => {
  tabList.scrollLeft += 200;
  manageIcons();
});

// scroll with left arrow
leftArrow.addEventListener("click", () => {
  tabList.scrollLeft -= 200;
  manageIcons();
});

// to excute, show/hide icons on scroll 
tabList.addEventListener("scroll", manageIcons);

//for making draggable slider
 let dragging = false;

const drag = (e) => {
  if(!dragging) return;
  tabList.classList.add("dragging");
  tabList.scrollLeft -= e.movementX;
};
 
 tabList.addEventListener("mousedown", () => {
  dragging = true;
 });

tabList.addEventListener("mousemove", drag);

 document.addEventListener("mouseup", () => {
  dragging = false;
  tabList.classList.remove("dragging");
 });
// ===== Tabs Slider Ends