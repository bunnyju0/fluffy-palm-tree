$(function(){



    const slidewrap = $(".banner-wrap");
    const slides = $(".banner-wrap li");
    const prevbtn = $(".prev");
    const nextbtn = $(".next");
    const indicator = $(".banner-nav a");
    const slideCount = slides.length;
    let currentIndex = 0

    function goToslide(index){
        slidewrap.animate({left:-100*index + "%"},500)
        currentIndex = index

        if(currentIndex == 0){
            prevbtn.hide();
        }
        else{
            prevbtn.show();
        }   
        if(currentIndex == 3){
            nextbtn.hide();
        }else{
            nextbtn.show();
        }   

        indicator.removeClass("show");
        indicator.eq(index).addClass("show");
    }



    indicator.click(function(e){
        e.preventDefault();
        let idx = $(this).index();
        goToslide(idx);

    });

    nextbtn.click(function(e){
        e.preventDefault();
        let i = currentIndex + 1
        goToslide(i)       
    });
    prevbtn.click(function(e){
        e.preventDefault();
        let i = currentIndex - 1
        goToslide(i)
    });
    /* 
    let timer = "";

    function startTimer(){
        if(!timer){}
        let nextIndex = (currentIndex + 1) % slideCount;
        goToslide(nextIndex);
        timer = setInterval(function(){}, 3500);
    }

    function stopTimer(){
        clearInterval(timer);
    }

    slidewrap.mouseenter(function(){
        stopTimer();
    });

    slidewrap.mouseleave(function(){
        startTimer();
    });
    */


    goToslide(1);




});