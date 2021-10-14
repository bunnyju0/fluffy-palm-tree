const bars = document.getElementById("bars");
const tt = document.querySelector("#bars i");
const gnb = document.getElementById("gnb");
console.log(gnb);

const xbars = document.getElementById("xbars");

let e = 0;

bars.addEventListener("click", function(){
    bars.style.opacity = "0";
    xbars.style.opacity = "1";
    bars.style.zIndex = "0";
    xbars.style.zIndex = "200";
    gnb.style.right = "0";
    xbars.style.right = "4.3%";
    bars.style.right = "-10%";
});


xbars.addEventListener("click", function(){
    bars.style.opacity = "1";
    xbars.style.opacity = "0";
    bars.style.zIndex = "200";
    xbars.style.zIndex = "0";
    gnb.style.right = "-50%";
    bars.style.right = "5%";

});






