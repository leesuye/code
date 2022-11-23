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
    });//research

    $('.notice ul li').on('click', function(){
        $('.notice ul li').removeClass('active');
        $(this).addClass('active');
    });//notice

    const swiper_event = new Swiper('.event .promotion', {
        slidesPerView: 2, 
        spaceBetween: 16, 
        breakpoints: {
            640: {    
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });//event

    const swiper_history = new Swiper('.history .story', {
        direction: 'vertical',
        slidesPerView: 3, //모바일
        spaceBetween: 0, 
        slidesPerGroup: 3,
        breakpoints: {
            640: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 40,
                slidesPerGroup: 3,
            },
        },
        
        loop: true,  

        navigation: {       
            nextEl: '.history .button-next',
            prevEl: '.history .button-prev',
        },
        pagination: {  
            el: '.history .pagination', 
            clickable: true,  
            type: 'bullets',  
        },
    });//history


});//document

