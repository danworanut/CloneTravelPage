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

// slide show

let slideInx = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  for( i = 0; i < slides.length; i++ ) {
    slides[i].style.display = "none";  
  }
  slideInx++;

  if(slideInx > slides.length) {
    slideInx = 1
  }

  for (i = 0; i < dots.length ; i++ ){
    dots[i].className = dots[i].className.replace(" show", "")
  }

  slides[slideInx-1].style.display = "block";  
  dots[slideInx-1].className += " show";
  setTimeout(showSlides, 2000);


}