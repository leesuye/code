$(document).ready(function(){

    
    const swiper_visual = new Swiper('.visual', {

        effect: "fade", 

        autoplay: {  
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,  

    });//visual swiper

    AOS.init();//scroll

    const swiper_stayling  = new Swiper(".stayling .acc .list", {
        direction: 'vertical',
        slidesPerView: 2, 
        spaceBetween: 40, 
        slidesPerGroup: 2,
        
        loop: true, 

        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });//stayling acc
    
    
    
    
});






