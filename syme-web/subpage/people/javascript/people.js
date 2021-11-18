$(function(){
    
    const menuopen = $(".menu-bar-open");   
    const menuclose = $(".menu-bar-close");
    const menuList = $(".menu-bar-pc");



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
  
});