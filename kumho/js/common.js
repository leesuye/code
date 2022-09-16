$(document).ready(function(){

    let winH = $(window).width();
    let pcMobile //현재 pc모드인지 mobile모드인지 저장하는 변수

    if(winH > 640){
        pcMobile = 'pc';
        console.log(pcMobile);
    }else{
        pcMobile = 'mobile';
        console.log(pcMobile);
    }

    $(window).resize(function(){
        winH = $(window).width();
        if(winH > 640){
            pcMobile = 'pc';
            console.log(pcMobile);
        }else{
            pcMobile = 'mobile';
            console.log(pcMobile);
        }
    });

    /*
    .header .lang .open 클릭했을때
    1.ul이 나타나야함
    2.open숨김 close나타나야함
    --> .header . lang에 lang_open 클래스 추가
   
    .header .lang .close를 클릭하면
     -->  .header . lang에 lang_open 클래스 삭제
    */
     $('.header .lang .open').on('click',function(){
        $('.header .lang').addClass('lang_open');
       });
       $('.header .lang .close').on('click',function(){
        $('.header .lang').removeClass('lang_open');
       });
    
    
       /* 
        메뉴(.header .gnb > ul > li > a )에 마우스를 오버했을때 header에 menu_open 이라는 클래스 추가
        메뉴(.header)에 마우스를 아웃했을때 header에 menu_open이라는 클래스 삭제
        */
       /*focusin tab으로 메뉴 이동 가능 */
        $('.header .gnb > ul > li > a').on('mouseenter focusin',function(){
            if(pcMobile == 'pc'){
                $('.header').addClass('menu_open');
            }
        });
        $('.header').on('mouseleave',function(){
            $('.header').removeClass('menu_open');
        });
        $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){
            $('.header').removeClass('menu_open');
        });
    
        /*
        .header .gnb .open을 클릭하면
        header에 menu_mobile 클래스 추가
    
        .header .gnb .close를 클릭하면
        header에 menu_mobile 클래스 삭제
        */
       $('.header .gnb .open').on('click',function(){
            if(pcMobile == 'mobile'){
                $('.header').addClass('menu_mobile');
            }
                
       });
       $('.header .gnb .close').on('click',function(){
            if(pcMobile == 'mobile'){
                $('.header').removeClass('menu_mobile');
             }
        
       });


       /*
       1차 메뉴를 클릭해서
            닫혀있으면 li에 sub_open 클래스를 추가
            열려있으면 li에 sub_open 클래스를 삭제
        -->toggle 
       */
      $('.header .gnb > ul > li').on('click',function(e){
        e.preventDefault(); 
        /*1차메뉴를 클릭했을때 a href로 페이지가 이동하는 것을 막기 */
        $(this).toggleClass('sub_open')
      });

});