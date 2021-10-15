const caseSizeBox1 = document.getElementById("box1");
const caseSizeBox2 = document.getElementById("box2");
const connectBox3 = document.getElementById("box3");
const connectBox4 = document.getElementById("box4");
let caseSizeBoxTitle = document.getElementsByClassName("watch_case_size");
let caseSizeBoxPrice = document.getElementsByClassName("watch_cass_price");
let connectBoxTitle = document.getElementsByClassName("watch_gps");
let connectBoxPrice = document.getElementsByClassName("watch_gps_price");


const colorGray = "#838383";
const colorBlack = "#000";
const boxShadowOn = "7px 7px 16px -4px rgba(0,0,0,0.67)";
const boxShadowOff = "none";

const totalPrice = document.getElementById("total_price");

let box1Price = 449;
let box2Price = 479;
let box3Price =  0;
let box4Price =  70;

//totalPrice.innerText = "$449";



caseSizeBox1.addEventListener("click", function(){
    caseSizeBoxTitle[1].style.color = colorGray;
    caseSizeBoxPrice[1].style.color = colorGray;
    caseSizeBox1.style.boxShadow = boxShadowOn;
    caseSizeBoxTitle[0].style.color = colorBlack;
    caseSizeBoxPrice[0].style.color = colorBlack;
    caseSizeBox2.style.boxShadow = boxShadowOff;
    totalPrice.innerText = `$${box1Price}`

});

caseSizeBox2.addEventListener("click", function(){
    caseSizeBoxTitle[0].style.color = colorGray;
    caseSizeBoxPrice[0].style.color = colorGray;
    caseSizeBox2.style.boxShadow = boxShadowOn;
    caseSizeBoxTitle[1].style.color = colorBlack;
    caseSizeBoxPrice[1].style.color = colorBlack;
    caseSizeBox1.style.boxShadow = boxShadowOff;
    totalPrice.innerText = `$${box2Price}`
});

connectBox3.addEventListener("click", function(){
    connectBoxTitle[0].style.color = colorBlack;
    connectBoxPrice[0].style.color = colorBlack;
    connectBox3.style.boxShadow = boxShadowOn;
    connectBoxTitle[1].style.color = colorGray;
    connectBoxPrice[1].style.color = colorGray;
    connectBox4.style.boxShadow = boxShadowOff;
    totalPrice.innerText = `$${box1Price + box3Price}`
});

connectBox4.addEventListener("click", function(){
    connectBoxTitle[1].style.color = colorBlack;
    connectBoxPrice[1].style.color = colorBlack;
    connectBox4.style.boxShadow = boxShadowOn;
    connectBoxTitle[0].style.color = colorGray;
    connectBoxPrice[0].style.color = colorGray;
    connectBox3.style.boxShadow = boxShadowOff;
    totalPrice.innerText = `$${box1Price + box4Price}`
});

connectBox3.addEventListener("click", function(){
    caseSizeBox1.addEventListener("click", function(){
        totalPrice.innerText = `$${box1Price + box3Price}`
    });
});

connectBox4.addEventListener("click", function(){
    caseSizeBox1.addEventListener("click", function(){
        totalPrice.innerText = `$${box1Price + box4Price}`
    });
});
caseSizeBox2.addEventListener("click", function(){
    connectBox4.addEventListener("click", function(){
        totalPrice.innerText = `$${box2Price + box4Price}`
    });
});

connectBox4.addEventListener("click", function(){
    caseSizeBox2.addEventListener("click", function(){
        totalPrice.innerText = `$${box2Price + box4Price}`
    });
});

connectBox3.addEventListener("click", function(){
    caseSizeBox2.addEventListener("click", function(){
        totalPrice.innerText = `$${box2Price + box3Price}`
    });
});
caseSizeBox2.addEventListener("click", function(){
    connectBox3.addEventListener("click", function(){
        totalPrice.innerText = `$${box2Price + box3Price}`
    });
});

connectBox4.addEventListener("click", function(){
    connectBox3.addEventListener("click", function(){
        totalPrice.innerText = `$${box1Price + box3Price}`
    });
});

connectBox4.addEventListener("click", function(){
    connectBox3.addEventListener("click", function(){
    caseSizeBox2.addEventListener("click", function(){
        totalPrice.innerText = `$${box2Price + box3Price}`
    });
    })
});
caseSizeBox2.addEventListener("click", function(){
    caseSizeBox1.addEventListener("click", function(){
    connectBox3.addEventListener("click", function(){
        totalPrice.innerText = `$${box1Price + box3Price}`
    });
    })
});
caseSizeBox1.addEventListener("click", function(){
    connectBox3.addEventListener("click", function(){
    connectBox4.addEventListener("click", function(){
        totalPrice.innerText = `$${box1Price + box4Price}`
    });
    })
});
caseSizeBox2.addEventListener("click", function(){
    caseSizeBox1.addEventListener("click", function(){
    connectBox4.addEventListener("click", function(){
        totalPrice.innerText = `$${box1Price + box4Price}`
    });
    })
});






let colorBox = document.getElementsByClassName("color_box");
let colorCircle = document.getElementsByClassName("color_cercle");
let colorCircleCount = colorCircle.length;



// color part
function opacity(){
for(let i =0; i<=8; i++){
    colorCircle[i].style.opacity = "0.3";
    }
}   


function boxShadow(){
    for(let i =0; i<=8; i++){
        colorBox[i].style.boxShadow = boxShadowOff;
        }
    }   

for(let t =0; t<=8; t++){
    colorBox[t].addEventListener("click",function(){
        opacity();
        boxShadow();
        mobiMainUl.style.left = t * -328 + "px";
        colorCircle[t].style.opacity = "1";
        colorBox[t].style.boxShadow = boxShadowOn;
    
    });
    
}

let mobiMainUl = document.getElementById("mobi_main_ul");
let mobiMainImages = document.getElementsByClassName("mobi_main_images");   

// 이미지 값 right 변경

//해야할일
// 클래스 번호를 클릭하면 Id 의 right 값을 변경  I x 328  









//box 5,6
const bandSizebox5 = document.getElementById("box5") 
const bandSizebox6 = document.getElementById("box6") 


bandSizebox5.addEventListener("click", function(){
    bandSizebox5.style.boxShadow = boxShadowOn;
    bandSizebox6.style.boxShadow = boxShadowOff;
})

bandSizebox6.addEventListener("click", function(){
    bandSizebox6.style.boxShadow = boxShadowOn;
    bandSizebox5.style.boxShadow = boxShadowOff;
})



let subsImages = document.getElementsByClassName("subsImages");
let mainImagecontaner = document.getElementsByClassName("main_imgage_contaner");


for(let t =0; t<=2; t++){
    subsImages[t].addEventListener("click", function(){
        mainimagsdisplay()
        mainImagecontaner[t].style.display = "flex";
   });
    
}

function mainimagsdisplay(){
    for(let t =0; t<=2; t++){
        mainImagecontaner[t].style.display = "none"
    }
}



