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