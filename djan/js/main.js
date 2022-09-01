$(document).ready(function(){
    /*visual의 높이를 브라우저의 높이와 동일하게
    $(window).height() = 브라우저 창의 높이
    $(document).height() = 스크롤바까지 포함한 문서의 높이
    
    $(window).height()의 높이를 visual의 높이로 설정
    1. 처음에 로딩했을때
    2. 브라우저가 리사이즈 될때마다*/


    let winH = $(window).height() /* winH = windowHeight */
    console.log(winH)
    $('.visual').height(winH)

    $(window).resize(function(){ 
        winH = $(window).height()
        console.log(winH)
        $('.visual').height(winH)
    })
})