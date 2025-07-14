//Year auto update

window.addEventListener("load", () => {
    clock();
function clock() {


  let today = new Date();
  let year = today.getFullYear();


  document.getElementById("currentYear").innerHTML = "&copy " + year + " - ";



}});
