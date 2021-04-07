jQuery("#banner").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 2000,
    nav: true,
    navText: ['<svg width="20px" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="20px" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive: {
      0: {
        items: 2
      },
      567: {
        items: 3
      },
      767: {
        items: 4
      },
      992: {
        items: 5
      },
      1366: {
        items:5
      }
    }
  });
  
var owl = $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 20,    
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    navText: ['&#ffffff;', '&#ffffff;'],
    responsive: {
        0: {
            items: 1,
        },
        767: {
            items: 1
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

jQuery(document.documentElement).keydown(function (event) { 
    if (event.keyCode == 37) {
      owl.trigger('prev.owl.carousel', [400]);
    } else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [400]);
    }

});

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:true,
    navText: ['<svg width="20px" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="20px" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #fff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

let buttonToggle = () => {
    const button = document.getElementById("menu-button").classList,
    isopened = "is-opened";
    let isOpen = button.contains(isopened);
    if(isOpen) {
      button.remove(isopened);
    } 
    else {
      button.add(isopened);
      
    }
}
var div_top = $('header').offset().top;
$(window).scroll(function() {
  var window_top = $(window).scrollTop() - 0;
  if (window_top > div_top) {
    if (!$('header').is('.sticky')) {
      $('header').addClass('sticky');
    }
  } else {
    $('header').removeClass('sticky');
   
  }
});
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");

    // alert("akdsfjasldkfhlak")
});
});
