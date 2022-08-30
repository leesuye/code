$(document).ready(function(){
    let winW = $(window).width()
    let docW = $(document).width()
    console.log(winW)
    console.log(docW)
    
    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')


    //top버튼을 클릭했을 때 상단으로 이동
    $('aside button').on('click',function(){
        console.log('눌렀어')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })

    /* 
    header에
    조건1 -스크롤의 값이 0보다 크면 header에 fixed 클래스추가
    조건2 -스크롤의 값이 0이면 header에 fixed 클래스 삭제
    스크롤되면 헤더에 클래스 추가
    */

    /*로딩했을때 맨 처음에만 1번 실행*/
    let scrolling
    headerFixed()//함수의 실행

    /*스크롤 할때마다 실행 */
    $(window).scroll(function(){
        headerFixed()//함수의 실행
    })

    function headerFixed(){//함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})


