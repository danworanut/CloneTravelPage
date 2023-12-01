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

// เรียกใช้ฟังก์ชัน showSlides เพื่อแสดงสไลด์เริ่มต้น
showSlides(slideIndex);

// ฟังก์ชัน plusSlides ใช้เพื่อเปลี่ยนสไลด์โดยเพิ่มหรือลดตามค่า n
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// ฟังก์ชัน currentSlide ใช้เพื่อตั้งค่าสไลด์ปัจจุบันเป็นค่า n
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// ฟังก์ชัน showSlides ใช้เพื่อแสดงสไลด์ตามค่า n
function showSlides(n) {
  // ดึงข้อมูลของสไลด์และจุด
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // ตรวจสอบว่า n มากกว่าจำนวนสไลด์ทั้งหมดหรือไม่ และปรับ slideIndex ตาม
  if (n > slides.length) {
    slideIndex = 1;
  }

  // ตรวจสอบว่า n น้อยกว่า 1 หรือไม่ และปรับ slideIndex ตาม
  if (n < 1) {
    slideIndex = slides.length;
  }

  // ซ่อนสไลด์ทั้งหมด
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // ปรับ className ของ dot ทั้งหมด
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" show", "");
  }

  // แสดงสไลด์และปรับ className ของ dot ที่เกี่ยวข้อง
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " show";
}

// ใช้ setInterval เพื่อเรียกฟังก์ชัน plusSlides(1) ทุก 2000 มิลลิวินาที (2 วินาที)
setInterval(function () {
  plusSlides(1);
}, 2000);