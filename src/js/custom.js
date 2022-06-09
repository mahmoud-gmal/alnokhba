
// animation
new WOW().init();



// https://codepen.io/tutsplus/pen/oPeLJR
  $('.home_slider').owlCarousel({
    rtl:true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // URLhashListener: true,
    // startPosition: 'URLHash',
    nav: false,
    // autoHeight: true,
    // video: true,
    // navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000




// === old
    // items: 1,
    // rtl:true,
    // loop: true,
    // nav: false,
    // navText: [
    //   '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    //   '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
    // ]
    
})




$('.center_slider').owlCarousel({
  rtl:true,
  loop: true,
  nav: true,
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
  ],
  responsive: {
    0: {
        items: 1
    },
    600: {
        items: 2
    },
    1000: {
        items: 4
    }
}
  
})




    const swiper = new Swiper('.feats_slider', {
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
     
        pagination: {
            el: '.feats .swiper-pagination',
            clickable: true,
        },
        // autoplay: { delay: 3000, },
        speed: 500,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        }
    });

    // const swiper = new Swiper(".feats_slider", {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });







// Search
$('.search_icon').click(function(e) {
  e.preventDefault()
  $('.site-search').addClass('open');
})

$('.site-search-close').click(function() {
  $('.site-search').removeClass('open');
}).children().click(function(e) {
  //	return false;
});

$('.close-side').click(function(e) {
  e.preventDefault()
  $('.site-search').removeClass('open');
})
// toggle navbar
$('.menu_toggle').click(function(e) {
  e.preventDefault()
  $(".mob_menu_wrapper").addClass('open');
})
$('.close_menu').click(function(e) {
  e.preventDefault()
  $(".mob_menu_wrapper").removeClass('open');
})

$(document).click((event) => {

  if ( !$(event.target).closest('.mob_menu_wrapper').length && !$(event.target).closest('.menu_toggle').length) {
    // the click occured outside '.mob_menu_wrapper'
    $(".mob_menu_wrapper").removeClass('open');
  }        
});


// odometer
 $('.stats .odometer').each(function(){
    $(this).isInViewport(function(mode) {
      if(mode == 'entered'){
        $(this).html($(this).data('final-odometer'));
      }
     })
  })




//Odometer
// $(".stats .odometer").each(function() {
//   $(this).isInViewport(function(status) {
//       if (status === "entered") {
//           for (var i = 0; i < document.querySelectorAll(".stats .odometer").length; i++) {
//               var el = document.querySelectorAll('.stats .odometer')[i];
//               el.innerHTML = el.getAttribute("data-odometer-final");
//           }
//       }
//   });
// });
// FancyBox
// $('[data-fancybox="about"]').fancybox();
