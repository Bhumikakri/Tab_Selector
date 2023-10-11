let buttons = document.querySelectorAll("button");
let paragraph=document.querySelectorAll(".text-container div");
let image=document.querySelector(".image-container");
buttons[0].classList.add("selectedButton");

buttons.forEach((val,indx)=>{
    val.addEventListener("click", () => {
        addClass(indx);
        removeClass(indx)
    });
})
function addClass(idx) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == idx){
      buttons[i].classList.remove("selectedButton");
      paragraph[i].style.display = "block";
      image.style.left=`-${100*(i)}%`;

      
    } 
    else{ 
    buttons[i].classList.add("selectedButton");
    paragraph[i].style.display = "none";
  }
}
}
function removeClass(indx) {
  for (let i = 0; i < buttons.length; i++) {
    if (i == indx){
      buttons[i].classList.add("selectedButton");
    }else{
      buttons[i].classList.remove("selectedButton");
    }
     
  }
}


