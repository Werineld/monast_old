$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();




    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 600);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $(".nav__link").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");
    });



    $(".accordion .accordion__content:not(:first)").hide();

    $(".accordion__header").click(function(){

        $(this).next(".accordion__content").slideToggle("slow")
        .siblings(".accordion__content:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".accordion__header").removeClass("active");
     });
    



    /* modals */


    /* const service_items = document.querySelectorAll('.services_item');
    const body = document.querySelector('body');

    service_items.forEach ((service_item) => {
     const id = service_item.dataset.path;
     const modal = document.getElementById(id);
     service_item.addEventListener('click', ()=> {
        modal.classList.toggle('show');
        body.classList.toggle('overflow');
    });
    
    const close = document.querySelector('.modal_close');

    close.addEventListener('click', ()=> {
        modal.classList.toggle('show');
        body.classList.toggle('overflow');
    });
    });*/


    /* modal 1 ********************************/



    const btns = document.querySelectorAll('.modal__link');

    const modalOverlay = document.querySelector('.modal-overlay ');

    const modals = document.querySelectorAll('.modal');

    const body = document.querySelector('body');


    btns.forEach((el) => {
        el.addEventListener('click', (e) => {
            let path = e.currentTarget.getAttribute('data-path');

            modals.forEach((el) => {
                el.classList.remove('modal--visible');
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
            body.classList.add('overflow')
        });
    });

    modalOverlay.addEventListener('click', (e) => {
        console.log(e.target);

        const close_btn = document.querySelector('.modal_close');

        const enquiry = document.querySelectorAll('.enquiry');

        if (e.target == modalOverlay) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
                body.classList.remove('overflow');
            });
        } else if (e.target == close_btn) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
                body.classList.remove('overflow');
            });
        } else if (e.target == enquiry) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
                body.classList.remove('overflow');
            });
        }

    });


    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '2px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1100,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }
        ]
      });



});
    
    