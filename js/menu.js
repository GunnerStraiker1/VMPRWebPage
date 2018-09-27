$(window).scroll(function(){
    var top=$(window).scrollTop();
    if(top > 50){
    $("#menu-bar").addClass('NavBar2');
    }else{
    $(".#menu-bar").removeClass('NavBar2');
    }
    })