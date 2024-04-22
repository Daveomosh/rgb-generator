let button=document.getElementById("generate")
console.log(generate)
let paragraph=document.getElementById("content")

function generateRandomRGB() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return`rgb(${r},${g},${b})`;
  }
button.addEventListener("click",function(e){

    let newColor= generateRandomRGB(e);
paragraph.textContent=newColor
document.querySelector("body").style.background=newColor
  
  console.log(e)
})