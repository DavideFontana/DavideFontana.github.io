const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  mousePosText.textContent = mousePos.x + "."+ mousePos.y;
});

//Detect touch device
function isTouchDevice() {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

const move = (e) => {
  //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
  try {
    //PageX and PageY return the position of client's cursor from top left of screen
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  } catch (e) {}
  //set left and top of div based on mouse position
  mousetx.style.left = x + 50 + "px";
  mousetx.style.top = y + 35 + "px";
};
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});
//For touch
document.addEventListener("touchmove", (e) => {
  move(e);
});
 

var elem = document.getElementById("df");
var r = Math.floor((Math.random() * 25));



//Random Image Carousel

var imagePool = [
  "Mediapool\\Full_images\\BIC_Full.png", 
  "Mediapool\\Full_images\\CanAnim-Full.png", 
  "Mediapool\\Full_images\\Frag (2).jpg", 
  "Mediapool\\Full_images\\Island_frame3.jpg", 
  "Mediapool\\Full_images\\Frag (5).jpg", 
  "Mediapool\\Full_images\\DM-2.jpg", 
  "Mediapool\\Full_images\\Island_frame1.jpg", 
];

function RandomImageCarousel(){
  var currentIndex = Math.floor(Math.random()*imagePool.length);
  document.getElementById("coverSlide").src = imagePool[currentIndex];
}







