
// speak-carosel
$('.speak-carousel').owlCarousel({
            loop: true,
            margin: 25,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

// WORK-HISTORY

$('.history-carousel').owlCarousel({
            loop: true,
            margin: 25,
            dots: true,
            autoplay: false,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 4
                }
            }
        });

// Article-carousel

$('.article-carousel').owlCarousel({
    stagePadding: 120,
    loop:true,
    center: true,
    dots: true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 20
        },
        480:{
            items:1,
            stagePadding: 80
        },
        700:{
            items:2,
            stagePadding: 80
        },
        1024:{
            items:2
        },
        1199:{
            items:3
        }
    }
})

// Recommdation-carousel
 $('.owl-carouselOne').owlCarousel({
            loop: true,
            margin: 25,
            dots: true,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
       });

 // header
    $(Window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
            } else {
                $('header').removeClass("sticky");
            }
        });

