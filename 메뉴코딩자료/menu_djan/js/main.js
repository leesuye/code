$(document).ready(function(){
    /*
    html요소가 모두 다 로딩된 이후에 jquery실행
    jquery에서 html요소를 호출해서 이벤트를 주기 때문
    */

    //맨 처음 로딩됐을때 한 번만 실행
    let winH;
    let pcMobile;
    deviceChk();//deviceChk라는 이름을 가진 함수호출
   
    //브라우저가 리사이즈 될때마다 실행
    $(window).resize(function(){
        deviceChk();
    });//resize

    function deviceChk(){
        winH = $(window).width();

        if(winH > 640){//브라우저의 넓이가 640px 보다 크면
            pcMobile = 'pc';
            console.log(pcMobile);
        }else{//브라우저의 넓이가 640px 이하면
            pcMobile = 'mobile';
            console.log(pcMobile);
        }//if
    }//function deviceChk


    /*
    메뉴에 마우스를 오버하면 header에 menu_open클래스 추가(단, pc에서만(window.winH가 640px 초과면 pc)  mobile에서는 안함)
    -->이벤트핸들러는 pc와 모바일 상관없이 준다
    단, 실행을 pc일때만 실행
    -->on은 이벤트핸들러로 단 한 번만 주면, mouseenter 이벤트가 발생할때마다 실행됨
    -->pc일때만 on을 주려고 하면 안된다.
    메뉴 : .header .gnb > ul > li
     */

    
    $('.header .gnb > ul > li').on('mouseenter focusin',function(){//focusin 탭으로 이동
        if(pcMobile == 'pc'){//pc일때만 실행(같다는 의미는 == )
            $('.header').addClass('menu_open');
        }//if
    });//mouseenter

    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open');
    });

    $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){//focusout 탬으로 이동하다가 메뉴 벗어나면 사라짐
        $('.header').removeClass('menu_open');
    });



    /*
     .header .gnb .gnb_open을 클릭하면 header에 menu_mobile이라는 클래스 추가
    .header .gnb .gnb_close을 클릭하면 header에 menu_mobile이라는 클래스 삭제
    -->단, 모바일일때만 작동(.gnb_open은 pc에서는 숨겨져있는 버튼)
    -->header에 menu_mobile이라는 스타일이 적용된 상태에서 pc로 전환되었을때도 고려해야함
    */
    $('.header .gnb .gnb_open').on('click',function(){
        $('.header').addClass('menu_mobile');
    });
    $('.header .gnb .gnb_close').on('click',function(){
        $('.header').removeClass('menu_mobile');
    });
    
    /*
    1차메뉴 li를 클릭했을때(.header .gnb > ul > li)
    클릭한 li에만  sub_open이라는 클래스 추가
    --> 만약 현재 sub_open이 열려있는 상태면 닫기(sub_open 삭제)
        현재 닫혀있는 상태면 닫기(sub_open 추가)
    -->서브메뉴는 직접 닫기 전에는 모두 열린 상태를 유지(여러메뉴가 동시에 열릴 수 있음)
    -->pc에서는 1차 메뉴를 클릭하면 첫번째 하위메뉴로 이동(href값으로 이동)
        그러나 모바일에서는 하위메뉴 페이지로 이동하면 안됨,     
    */

    $('.header .gnb > ul > li').on('click',function(e){
        if(pcMobile == 'mobile'){//모바일에서만 실행
            e.preventDefault(); /* 해당요소를 클릭했을때 기본적으로 발생하는 이벤트를 취소 - a 태그의 href를 작동 시키지 않음 */
           $(this).toggleClass('sub_open')
           /*4개의 1차메뉴 li중에서 클릭한 li를 this라고 함*/
        }
        
    });


});//document.ready