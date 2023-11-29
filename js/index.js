// Active navbar link

var menu = document.getElementsByClassName("menu");


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