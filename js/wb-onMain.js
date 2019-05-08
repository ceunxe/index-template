$(function(){
    // new Swiper('.swiper-container', {
    //     observer: true,                 
    //     observeParents: true,
    //     slidesPerView: 3,
    //     spaceBetween: 30, 
    //     slidesPerColumn : 2,
    //     slidesPerColumnFill : 'row',          
    //     swipeHandler : '.swipe-handler',      
    //     pagination: {                   
    //       el: '.swiper-pagination',
    //       clickable :true              
    //     },
    //     navigation: {                   
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev'
    //     },
    //     breakpoints: {                  
    //       1200: {
    //         slidesPerView: 4,
    //         spaceBetween: 35
    //       },
    //     }
    // })

    new Swiper('#ban-swiper',{
        loop:true,
        autoplay: {                     
            delay: 5000,                  
            disableOnInteraction: true,  
        },
        observer: true,
        observeParents: true,
        pagination: {
            el: '.ban-pag',
            clickable: true
        },
    })
})
