//Function that selects elements
const selectElement = (element) => document.querySelector(element);

//Open Nav Menu On Click
selectElement('.open').addEventListener('click', () => {
  selectElement( '.nav-list').classList.add('active');
});

//Close Nav Menu On Click
selectElement( '.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove( 'active');
});

//Dynamic Background Info
VANTA.TOPOLOGY({
  el: "#vantajs",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x910da2,
  backgroundColor: 0x51414,
  
});


VANTA.TOPOLOGY({
  el: "#footer",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x910da2,
  backgroundColor: 0x51414,
  
});

/* Code for Tabs */
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

/* code highlight */
$(document).ready(function(){
  hljs.initHighlightingOnLoad();
});