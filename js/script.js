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
  backgroundColor: 0x51414
});


VANTA.NET({
  el: "#exp",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  points: 8.00,
  maxDistance: 30.00,
  spacing: 16.00,
  color: 0x910da2,
  backgroundColor: 0x51414
})

VANTA.WAVES({
  el: "#footer",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x250e2d
})


/* code highlight */
$(document).ready(function(){
  hljs.initHighlightingOnLoad();
});