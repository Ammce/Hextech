$('.owl-carousel').owlCarousel({
    items:10,
    autoplay: 1000,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});
