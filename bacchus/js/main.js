$(document).ready(function(){

    var swiper = new Swiper(".visual .txt", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 120,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {  /* 팝업 자동 실행 */
		delay: 4000,
		disableOnInteraction: true,
	    },
        loop: true, 
      });

      
    
      var swiper = new Swiper(".movie .list", {
        slidesPerView: 2,
        spaceBetween: 137,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        navigation: {       
            nextEl: '.movie .list .button-next',
            prevEl: '.movie .list .button-prev',
        },
      });




});