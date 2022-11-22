$(document).ready(function(){

    let idx = 1
    
    setInterval (function(){
        if( idx < 3){
            idx ++
        }else{
            idx = 1
        }

        $('.visual ul li').removeClass('active')
        $('.visual ul li').eq(idx-1).addClass('active')
    },4000);

    AOS.init();
    


});






