let isOpenNav=0;
const bodyWidth = document.body.offsetWidth;
const newWidth = bodyWidth - 250;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    isOpenNav=1;
    }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    isOpenNav=0;
    document.getElementById("main").style.width = "100%";
  }
  
 