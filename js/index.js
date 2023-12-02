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

// กำหนดตัวแปร slideIndex เพื่อติดตามสไลด์ปัจจุบัน
var slideIndex = 1;

// กำหนดตัวแปร slideInterval เพื่อใช้เก็บ setInterval สำหรับการเปลี่ยนสไลด์อัตโนมัติ
var slideInterval;

// เรียกใช้ฟังก์ชัน showSlides เพื่อแสดงสไลด์เริ่มต้น
showSlides(slideIndex);

// ฟังก์ชัน plusSlides ใช้เพื่อเปลี่ยนสไลด์โดยเพิ่มหรือลดตามค่า n
function plusSlides(n) {
  clearInterval(slideInterval); // ล้าง setInterval ที่มีอยู่
  showSlides((slideIndex += n));
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 5000); // ตั้งค่า setInterval ใหม่
}

// ฟังก์ชัน currentSlide ใช้เพื่อตั้งค่าสไลด์ปัจจุบันเป็นค่า n
function currentSlide(n) {
  clearInterval(slideInterval); // ล้าง setInterval ที่มีอยู่
  showSlides((slideIndex = n));
  slideInterval = setInterval(function () {
    plusSlides(1);
  }, 5000); // ตั้งค่า setInterval ใหม่
}

// ฟังก์ชัน showSlides ใช้เพื่อแสดงสไลด์ตามค่า n
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" show", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " show";
}

// ใช้ setInterval เพื่อเรียกฟังก์ชัน plusSlides(1) ทุก 5000 มิลลิวินาที (5 วินาที)
slideInterval = setInterval(function () {
  plusSlides(1);
}, 5000);
