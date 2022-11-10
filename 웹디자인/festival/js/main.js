$(document).ready(function(){
    var idx = 1
    setInterval(function(){
        if(idx < 3){
            idx++;
        }else{
            idx = 1
        }
        $('.visual ul li').removeClass('move');
        $('.visual ul li').eq(idx-1).addClass('move');
    },3000)
    //fade in-out 는 li가 active를 가질때임
    //opercity랑 z-index줘야함

    //메뉴오버
    $('.header nav>ul>li').on('mouseenter focusin', function(){
        $('.header nav>ul>li').removeClass('active');
        $(this).addClass('active');
    });
    $('.header nav>ul>li').on('mouseleave', function(){
        $('.header nav>ul>li').removeClass('active');
    });

    //모달
    $('.cts .inner .notice ul li.pop').on('click', function(){
        $('.modal').show();
    });
    $('.modal .btn a').on('click', function(){
        $('.modal').hide();
    });

});