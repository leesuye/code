/*
    언제 : 스크롤을 내렸을때
    누구를 : header를 : $('header')
    어떻게 : fixed 클래스를 추가 : addClass()-클래스를 추가하는 명령어
    --> 다시 꼭대기로 올라갔을때는 픽스트 삭제
    $(window').scdrolltop*() -얼만큼 스크롤되었는지 계산해주는 값

    스크롤값을 계산해서 스크롤을 200보다 많이하면 fixed흫 추가하고 200이하면 fuesd 삭제
*/

let scrolling = $(window).scrollTop()


$(window).scroll(function(){
    scrolling = $(window).scrollTop()
    // console.log(scrolling)

    if(scrolling > 200){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
});

