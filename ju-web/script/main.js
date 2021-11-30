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
const portfolioOffset = document.querySelector('#portfolio').offsetTop;
const connectOffset = document.querySelector('#text').offsetTop;
const docElem = document.documentElement;



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

//메뉴 크릭 스크롤

menu[0].addEventListener('click', function(ev){
    ev.preventDefault();
    let scrollInrervalUp = setInterval(function(){
        if(docElem.scrollTop > aboutOffset){
            window.scrollBy(0, -55);
        }
        else{
            clearInterval(scrollInrervalUp);
        }
    }, 5);

    let scrollInrervalDown = setInterval(function(){
        if(docElem.scrollTop < aboutOffset){
            window.scrollBy(0, 55);
        }
        else{
            clearInterval(scrollInrervalDown);
        }
    }, 5);

});

menu[1].addEventListener('click', function(ev){
    ev.preventDefault();
    let scrollInrervalUp = setInterval(function(){
        if(docElem.scrollTop > skillOffset){
            window.scrollBy(0, -55);
        }
        else{
            clearInterval(scrollInrervalUp);
        }
    }, 5);

    let scrollInrervalDown = setInterval(function(){
        if(docElem.scrollTop < skillOffset){
            window.scrollBy(0, 55);
        }
        else{
            clearInterval(scrollInrervalDown);
        }
    }, 5);
});

menu[2].addEventListener('click', function(ev){
    ev.preventDefault();
    let scrollInrervalUp = setInterval(function(){
        if(docElem.scrollTop > portfolioOffset){
            window.scrollBy(0, -55);
        }
        else{
            clearInterval(scrollInrervalUp);
        }
    }, 5);

    let scrollInrervalDown = setInterval(function(){
        if(docElem.scrollTop < portfolioOffset){
            window.scrollBy(0, 55);
        }
        else{
            clearInterval(scrollInrervalDown);
        }
    }, 5);
});

menu[3].addEventListener('click', function(ev){
    ev.preventDefault();
    let scrollInrervalUp = setInterval(function(){
        if(docElem.scrollTop > connectOffset){
            window.scrollBy(0, -55);
        }
        else{
            clearInterval(scrollInrervalUp);
        }
    }, 5);

    let scrollInrervalDown = setInterval(function(){
        if(docElem.scrollTop < connectOffset){
            window.scrollBy(0, 55);
        }
        else{
            clearInterval(scrollInrervalDown);
        }
    }, 5);
});


//포트폴리오 라이트 박스

const dim = document.querySelector('.dim');
const slides1 = portfolioSlide1.querySelectorAll('li');
const content1 = document.querySelector('.dim_content');
const slides2 = portfolioSlide2.querySelectorAll('li');
const content2 = document.querySelector('.dim_content2');

for(let t = 0; t < slides1.length; t++){

    slides1[t].addEventListener('click', function(e){
        e.preventDefault();
        dim.style.display = 'flex';
        content1.style.display = 'flex';
    });
}


for(let r = 0; r < slides2.length; r++){

    slides2[r].addEventListener('click', function(e){
        e.preventDefault();
        dim.style.display = 'flex';
        content2.style.display = 'flex';
    });
}


dim.addEventListener('click',function(){
    content1.style.display = 'none';
    content2.style.display = 'none';
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


//포트폴리오 1
slides1[0].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '오주영 포트폴리오<br>반응형 웹사이트';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(2일), 퍼블리싱(3일)<br>2021.11.26 - 11.30';
    lightBoxTextDIs.innerHTML = '제이쿼리나 기타 라이브러리를 사용하지 않고 순수 자바스크립트를 사용한<br>반응형 포트폴리오 사이트입니다. 모든 모바일 기기 및 가로모드에 맞춰 퍼블리싱 하였습니다.';
    lightBoxBtn.href = "#";
    DimBoxImage[0].setAttribute('src',lightBoxImage[0].getAttribute('src'));

});
slides1[1].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '제작 예정';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(0일), 퍼블리싱(0일)';
    lightBoxTextDIs.innerHTML = '제작중';
    lightBoxBtn.href = "#";
    DimBoxImage[0].setAttribute('src',lightBoxImage[1].getAttribute('src'));
});

slides1[2].addEventListener('click', function(){
    lightBoxtitle.innerHTML = 'SYMEKOREA<br>반응형 웹사이트';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(10일), 퍼블리싱(7일)<br>2021.11.08 - 11.24';
    lightBoxTextDIs.innerHTML = '웹 퍼블리싱 국비 수료 후 처음으로 만든 웹사이트입니다.<br>제이쿼리를 사용하여 만들었으며 그 외 라이브러리는 사용하지 않았습니다.<br>디자인, 웹기획, 퍼블리싱 작업 모두 스스로 하였습니다.';
    lightBoxBtn.href = "http://www.symekorea.com";
    DimBoxImage[0].setAttribute('src',lightBoxImage[2].getAttribute('src'));
});

slides1[3].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '제작 예정';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(0일), 퍼블리싱(0일)';
    lightBoxTextDIs.innerHTML = '제작중';
    lightBoxBtn.href = "#";
    DimBoxImage[0].setAttribute('src',lightBoxImage[3].getAttribute('src'));
});


//포트폴리오 2
const lightBoxConImage = content2.querySelector('img');
const lightBoxConHTitle = content2.querySelector('h4');
const lightBoxConP = content2.querySelector('p');
const lightBoxConBtn = content2.querySelector('a');
conImage = portfolioSlide2.querySelectorAll('li a img');

slides2[0].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = '2021년 END';
    lightBoxConP.innerHTML = '2021년을 마무리하며<br>앨범 커버 형식 디자인을 만들었습니다.';
    lightBoxConBtn.href = "./pdfFiles/design1.pdf";
    lightBoxConImage.setAttribute('src',conImage[0].getAttribute('src'));
});

slides2[1].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = 'New Balance 모바일 디자인';
    lightBoxConP.innerHTML = '스포티한 컬러와 둥근 사각형의 느낌을 살린<br>New Balance 모바일 디자인입니다.<br> 국비과정 중 모바일 디자인 수업에서 디자인하였습니다.';
    lightBoxConBtn.href = "./pdfFiles/design2.pdf";
    lightBoxConImage.setAttribute('src',conImage[1].getAttribute('src'));
});

slides2[2].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = '키르시 웹 디자인';
    lightBoxConP.innerHTML = '국비과정 중 처음으로 웹 디자인을 했습니다.<br> 다시 보니 부족한 점이 참 많지만 <br>처음으로 한 디자인으로 의미가 있어서 포트폴리오에 추가했습니다.';
    lightBoxConBtn.href = "./pdfFiles/design3.pdf";
    lightBoxConImage.setAttribute('src',conImage[2].getAttribute('src'));
});

slides2[3].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = 'First Food 포스터 디자인';
    lightBoxConP.innerHTML = '포토샵 능력을 향상시키고 싶어서 국비과정이 끝난 후<br>유튜브에서 영상에 따라 디자인을 한 후 조금 변경해서 디자인했습니다.';
    lightBoxConBtn.href = "./pdfFiles/design4.pdf";
    lightBoxConImage.setAttribute('src',conImage[3].getAttribute('src'));
});

slides2[4].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = '영어학원 (SYME) 웹 디자인';
    lightBoxConP.innerHTML = '처음으로 웹상에 올라갈 웹 페이지를 디자인했습니다.<br> 취미로 만드는 디자인과 클라이언트와 소통하며 만드는 작업물의 차이점을 알게 되었고<br>어떻게 디자인을 더 잘 해야 하는지 배워가는 시간이었습니다.';
    lightBoxConBtn.href = "./pdfFiles/design5.pdf";
    lightBoxConImage.setAttribute('src',conImage[4].getAttribute('src'));
});