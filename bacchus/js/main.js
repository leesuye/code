$(document).ready(function(){

    
    const swiper = new Swiper(".visual .txt", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 120,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {  
          delay: 4000,
          disableOnInteraction: true,
	      },
        loop: true, 
      });//visual txt

    
    let history_txt = ['1960','2000','2011','2013']
    const swiper_history = new Swiper(".history .cnt", {
      pagination: {
        el: ".history .pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="swiper-pagination-bullet '+className+'">' + history_txt[index] + "</span>";
        },
      },
      autoplay: {  
        delay: 4000,
        disableOnInteraction: true,
      },
      loop: true,
      
    });//history
    
    
    const swiper_movie = new Swiper(".movie .list", {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {   
          slidesPerView: 2,
          spaceBetween: 137,
        },
      },
      navigation: {       
          nextEl: '.movie .list .button-next',
          prevEl: '.movie .list .button-prev',
      },
    });//movie




});//document






