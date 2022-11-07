$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', {

        effect: "fade", 

        autoplay: {  
            delay: 4000,
            disableOnInteraction: true,
        },

        loop: true,  

        pagination: { 
            el: '.btn_paging',
            clickable: true,
        },

    });//visual swiper

});//document

