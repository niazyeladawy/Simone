$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        991: {
            items: 1,
            nav: false
        },
        992: {
            items: 2,
            nav: true,
            loop: false
        }
    }
})

/* typed js */
var typed = new Typed('.animate', {
    strings: ["Simone Olivia.", "a Freelancer.","a Photographer.","a Designer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop:true
});