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
    gnb.style.display = "flex"
    xbars.style.display = "flex"
    bars.style.display = "none"
});


xbars.addEventListener("click", function(){
    bars.style.opacity = "1";
    xbars.style.opacity = "0";
    bars.style.zIndex = "200";
    xbars.style.zIndex = "0";
    gnb.style.display = "none"
    xbars.style.display = "none"
    bars.style.display = "flex"

});













