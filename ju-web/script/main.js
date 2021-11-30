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
    portfolioBtn[0].style.background = '#fc6d6d';
    portfolioBtn[0].style.color = '#000';
    portfolioBtn[1].style.background = '#343F4F';
    portfolioBtn[1].style.color = '#fff';
    portfolioSlide2.style.display = 'none';
    portfolioSlide1.style.display = 'grid';

});

portfolioBtn[1].addEventListener('click', function(){
    portfolioBtn[1].style.background = '#fc6d6d';
    portfolioBtn[1].style.color = '#000';
    portfolioBtn[0].style.background = '#343F4F';
    portfolioBtn[0].style.color = '#fff';
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


//포트폴리오 라이트 박스
const dim = document.querySelector('.dim');
const slides1 = portfolioSlide1.querySelectorAll('li');

for(let t = 0; t < slides1.length; t++){
    slides1[t].addEventListener('click', function(e){
        e.preventDefault();
        dim.style.display = 'flex';
        
    });
}

dim.addEventListener('click',function(){
    dim.style.display = 'none';
});


//포트폴리오 라이트 박스 컨텐츠
const lightBoxtitle = document.querySelector('.dim-picture h3'),
      lightBoxTextTitle = document.querySelector('.dim-text h3'),
      lightBoxTextSubTitle = document.querySelector('.dim-text h4'),
      lightBoxTextDIs = document.querySelector('.dim-text p'),
      lightBoxBtn = document.querySelector('.dim-text a'),
      lightBoxImage = portfolioSlide1.querySelectorAll('li a img'),   
      DimBoxImage = document.querySelectorAll('.dim-picture img');

slides1[0].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '오주영 포트폴리오<br>반응형 웹사이트';
    lightBoxTextTitle.innerHTML = '제작기간 : 디자인(2일), 퍼블리싱(3일)';
    lightBoxTextDIs.innerHTML = '제이쿼리나 기타 라이브러리를 사용하지 않고 순수 자바스크립트를 사용한<br>반응형 포트폴리오 사이트 입니다. 모든 모바일 기기 및 가로모드에 맞춰 퍼블리싱 하였습니다.';
    lightBoxBtn.href = "http://www.naver.com";
    DimBoxImage[0].setAttribute('src',lightBoxImage[0].getAttribute('src'));

});
slides1[1].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '제작 예정';
    lightBoxTextTitle.innerHTML = '제작기간 : 디자인(0일), 퍼블리싱(0일)';
    lightBoxTextDIs.innerHTML = '제작중';
    lightBoxBtn.href = "#";
    DimBoxImage[0].setAttribute('src',lightBoxImage[1].getAttribute('src'));
});

slides1[2].addEventListener('click', function(){
    lightBoxtitle.innerHTML = 'SYMEKOREA<br>반응형 웹사이트';
    lightBoxTextTitle.innerHTML = '제작기간 : 디자인(10일), 퍼블리싱(7일)';
    lightBoxTextDIs.innerHTML = '웹퍼블리싱 국비 수료 후 처음이로 만든 웹 사이트 입니다.<br>제이쿼리를 사용 하여 만들었으며 그 외 라이브러리는 사용하지 않았습니다.<br>디자인, 웹기획, 퍼블리싱 작업 모두 스스로 하였습니다.';
    lightBoxBtn.href = "http://www.symekorea.com";
    DimBoxImage[0].setAttribute('src',lightBoxImage[2].getAttribute('src'));
});

slides1[3].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '제작 예정';
    lightBoxTextTitle.innerHTML = '제작기간 : 디자인(0일), 퍼블리싱(0일)';
    lightBoxTextDIs.innerHTML = '제작중';
    lightBoxBtn.href = "#";
    DimBoxImage[0].setAttribute('src',lightBoxImage[3].getAttribute('src'));
});