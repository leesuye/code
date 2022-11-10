$(document).ready(function(){
    $('.header nav>ul>li').on('mouseenter focusin', function(){
        $('.header nav').addClass('active');
    });
    $('.header nav>ul>li').on('mouseleave', function(){
        $('.header nav').removeClass('active');
    });


    //좌우슬라이드
    let idx = 1;
    let idx_left = 0;
    setInterval(function(){
        if(idx < 3){
            idx++
        }else{
            idx = 1
        }
        idx_left = -(idx-1)*1200;
        $('.visual ul').animate({
            left : idx_left
        },500);
    }, 3000);

    /* 위로 올라가는 비주얼은
    css에서 .visual ul이 넓이하나값만 가지고 높이 줄 필요 없음
    .visual ul li는 float left 값 필요없음 */

    $('.cnt .bbs .notice ul li.pop').on('click', function(){
        $('.modal').show();
    });
    $('.modal .btn a').on('click', function(){
        $('.modal').hide();
    });

   
});