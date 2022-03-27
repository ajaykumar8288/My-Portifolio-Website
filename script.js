let toggleBtn = document.querySelector(".toggle-button")
let navList = document.querySelector(".nav-list")


let toggleButtonHide = true
toggleBtn.addEventListener("click", function(){
console.log("clicked")
if(toggleButtonHide){
  navList.style.display = "flex"
toggleButtonHide = false
} else{
navList.style.display = "none"
toggleButtonHide = true
}

})