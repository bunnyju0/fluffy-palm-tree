$(function(){
    
    const menuopen = $(".menu-bar-open");   
    const menuclose = $(".menu-bar-close");
    const menuList = $(".menu-bar-pc");
    const monthList = $("#month li");
    const monthListBottom = monthList.find("span");
    const curriculum = $("#curriculum li");
   

    menuopen.click(function(){
        menuList.stop().animate({left: "0%"},0);
        menuopen.hide();
        menuclose.show();
    });

    menuclose.click(function(){
        menuList.stop().animate({left: "110%"},500);
        menuopen.show();
        menuclose.hide();

    });

    

    monthList.click(function(){
        let index = $(this).index();
        monthList.removeClass("show-text");
        $(this).addClass("show-text");
        if(monthList.eq(index).hasClass("show-text")){
            monthListBottom.hide();
            monthListBottom.eq(index).show();
            curriculum.removeClass("show-contetn1");
            curriculum.eq(index).addClass("show-contetn1");
        }



    });

    curriculum.eq(0).addClass("show-contetn1");
    monthListBottom.eq(0).show();
  
});