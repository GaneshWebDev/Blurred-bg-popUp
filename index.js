const mConst = document.querySelector(".container");
const popConst = document.querySelector(".popup-container");
const btnE= document.querySelector(".btn");
const iconE = document.querySelector(".icon-effect");
console.log(mConst)
console.log(popConst)
console.log(btnE)
console.log(iconE)

btnE.addEventListener("click",()=>{
    mConst.classList.add("active1");
    popConst.classList.remove("active2");

});
iconE.addEventListener("click",()=>{
    mConst.classList.remove("active1");
    popConst.classList.add("active2");

});
