/** sticky header **/
const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function stickIt() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

window.onscroll = function() {stickIt()};
