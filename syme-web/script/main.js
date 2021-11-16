$(function(){

    const slidewrap = $(".banner-wrap");
    const slides = $(".banner-wrap li");
    const prevbtn = $(".prev");
    const nextbtn = $(".next");
    const indicator = $(".banner-nav a");
    const slideCount = slides.length;
    let currentIndex = 0

    const menuopen = $(".menu-bar-open");   
    const menuclose = $(".menu-bar-close");
    const menuList = $(".menu-bar-pc");



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


    menuopen.click(function(){
        menuList.stop().animate({left: "0%"},500);
        menuopen.hide();
        menuclose.show();
    });

    menuclose.click(function(){
        menuList.stop().animate({left: "110%"},500);
        menuopen.show();
        menuclose.hide();

    });
        setInterval(function(){
            let nextIndex = (currentIndex + 1) % slideCount;
            goToslide(nextIndex);
        }, 10000);

        goToslide(1);




});