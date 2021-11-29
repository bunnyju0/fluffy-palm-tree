const skillIcon = document.querySelectorAll(".skill-wrap ul li a"),
      skillOpen = document.getElementsByClassName("skill-info-wrap"),
      skillClose = document.getElementsByClassName("close-btn"),
      skillInfo = document.querySelectorAll('.skill-info-wrap ul li'),
      progressWrap = document.querySelectorAll(".porgress-bar"),
      progressBar = document.querySelectorAll(".bar"),
      progressText = document.querySelectorAll(".rate"),
      portfolioBtn = document.querySelectorAll('.portfolio-filter li'),
      portfolioSlide1 = document.querySelector('.portfolio-slide'),
      portfolioSlide2 = document.querySelector('.portfolio-slide2');





for(let i=0; i < skillIcon.length; ++i){
    //스킬 오픈
    skillIcon[i].addEventListener("click", function(e){
        e.preventDefault(); 
        skillOpen[0].style.height = "1000px"; 
        skillOpen[0].style.zIndex = "10";  
        setTimeout(function(){
            skillInfo[i].classList.add("show");
        },550);
        //숙련도
        let timer =  setInterval(textAnimationopen, 1000/10);

        let progressRate = progressText[i].dataset.rate;
        progressBar[i].animate({width : progressRate + "%"}, {duration: 1500, fill:'forwards'});
        function textAnimationopen(){
            let currentRate =  Math.ceil(progressBar[i].offsetWidth / progressWrap[i].offsetWidth * 100); 
            progressText[i].innerText = currentRate + "%";
            if ( currentRate == progressRate){
                clearInterval(timer);
           }
        }
     //스킬 닫기
        skillClose[0].addEventListener("click", function(){
            skillOpen[0].style.height = "0";   
            skillOpen[0].style.zIndex = "-1";
            skillInfo[i].classList.remove("show");
            //스킬 닫기 숙련도
            progressBar[i].animate({width : 0 + "%"}, {duration: 10, fill:'forwards'});
            clearInterval(timer);
        }); 

        
    });



}


//포트폴리오
portfolioBtn[0].addEventListener('click', function(){
    portfolioSlide2.style.display = 'none';
    portfolioSlide1.style.display = 'grid';

});

portfolioBtn[1].addEventListener('click', function(){
    portfolioSlide1.style.display = 'none';
    portfolioSlide2.style.display = 'grid';

});

const menu = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav');
const aboutOffset = document.querySelector('#about').offsetTop;
const skillOffset = document.querySelector('#skill').offsetTop;
const connectOffset = document.querySelector('#connect').offsetTop;
const docElem = document.documentElement;


//메뉴 스크롤
menu[0].addEventListener('click', function(ev){
    ev.preventDefault();
    docElem.scrollTop = aboutOffset;
});

menu[1].addEventListener('click', function(ev){
    ev.preventDefault(1);
    docElem.scrollTop = skillOffset;
});

menu[2].addEventListener('click', function(ev){
    ev.preventDefault(2);
    docElem.scrollTop = connectOffset;
});

const aboutText1 = document.querySelector('#about h2'),
      aboutText2 = document.querySelector('#about p'),
      workList = document.querySelectorAll('.work-wrap ul li');

//스크롤 애니메이션


for(let u = 0; u < workList.length; u++){
    for(let y = 0; y < menu.length; y++){
        let LASTSCROLLTOP = 0;
window.addEventListener('scroll', function(){


        if(aboutOffset / 2 < window.pageYOffset){
            nav.style.top = '-50px';
            nav.style.background = "#343F4F";

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

            if(scrollTop > LASTSCROLLTOP){
                nav.style.top = '-50px';
            }
            else{
                nav.style.top = '0';
            }
            LASTSCROLLTOP = scrollTop;
        }
        else{
           nav.style.top = '0';
           nav.style.background = "none";
        }

    if(aboutOffset / 2  < window.pageYOffset){
        aboutText1.style.opacity = '1';
        aboutText2.style.opacity = '1';
    }
    else{
        aboutText1.style.opacity = '0';
        aboutText2.style.opacity = '0';
    }
    if(workList[u].offsetTop /1.5 < window.pageYOffset){
        workList[u].style.opacity = '1';
        workList[u].style.marginLeft = '0';
    }
    else{
        workList[u].style.opacity = '0';
        workList[u].style.marginLeft = '50%';
    }
    

  
});
 }
}