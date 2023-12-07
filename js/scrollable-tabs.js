
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
const manageIcons = () => {
    // show/hide left arrow icon
    if (tabList.scrollLeft >= 20) {
        leftArrowContainer.classList.add("active");
    } else {
        leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue = tabList.scrollWidth - tabList.clientWidth - 20;

    // show/hide right arrow icon
    if (tabList.scrollLeft >= maxScrollValue) {
        rightArrowContainer.classList.remove("active");
    } else {
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
    if (!dragging) return;
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

// auto tabs active on their section changed
// Get all section elements
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            current = section.getAttribute('id');
        }
    });

    Array.from(tabs).forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

});

// Auto Scrolling to Active Tab
// Function to set active tab and scroll to it if not visible
const setActiveTabAndScroll = (id) => {
    const activeTab = document.querySelector(`.scrollable-tabs-container a[href="#${id}"]`);

    if (activeTab) {
        removeAllActiveClasses();
        activeTab.classList.add("active");

        // Scroll to the active tab if it's not fully visible
        if (!isTabVisible(activeTab)) {
            activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        }
    }
};

// Scroll event to sync active tab with content
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    setActiveTabAndScroll(current);
});

// Function to check if tab is visible
const isTabVisible = (tab) => {
    if (tab) {
        const tabRect = tab.getBoundingClientRect();
        const containerRect = tabList.getBoundingClientRect();

        return (
            tabRect.left >= containerRect.left &&
            tabRect.right <= containerRect.right
        );
    }
    return false; // Return false if tab is null or undefined
};