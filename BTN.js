  const btnRight = document.getElementById("scrollRight");
  const btnLeft = document.getElementById("scrollLeft");
  const divscroll = document.getElementsByClassName("scrollCont");

  var n;

  function clickRight(n){
    divscroll[n].scrollLeft += 300;
  }
  function clickLeft(n){
    divscroll[n].scrollLeft -= 300;
  }

 