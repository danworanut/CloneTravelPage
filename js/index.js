// Active navbar link

var listMenus = document.getElementsByClassName("menu-list")

for (let i = 0; i < listMenus.length; i++) 
{
    listMenus[i].addEventListener("click", function(){
        // console.log(listMenus[i].innerText);
   
        var current = document.getElementsByClassName("active")
      

        if(current.length > 0) {
            current[0].className = current[0].className.replace(" active", "")
        }

        this.className += " active";
    })
     
}

// sticky header 

window.onscroll = function() {stickyHeader()};

var header = document.querySelector("header")
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
