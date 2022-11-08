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


    const swiper_research = new Swiper('.research .list', {
        slidesPerView: 2, 
        spaceBetween: 16, 
        breakpoints: {
            640: {    
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

    $('.notice ul li').on('click', function(){
        $('.notice ul li').removeClass('active');
        $(this).addClass('active');
    });

    const swiper_event = new Swiper('.event .promotion', {
        slidesPerView: 2, 
        spaceBetween: 16, 
        breakpoints: {
            640: {    
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });


});//document

