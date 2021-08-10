// ==============================>  JQUERY  <==============================
$(document).ready(function() {
// Testimonial's slider:
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        infinity: true,
        dots: false,
        prevArrow: '<img class="prev_btn" src="img/arrow-left.png"/>',
        nextArrow: '<img class="next_btn" src="img/arrow-right.png"/>',
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    });

    $('.partners_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        infinity: true,
        dots: false,
        prevArrow: '<img class="prev_btn" src="img/arrow-left.png"/>',
        nextArrow: '<img class="next_btn" src="img/arrow-right.png"/>',
    });

    if($(window).width() < 992 && $(window).width() > 576) {
        $('.card_parent').addClass('card_slider');
    }
 

// Card's slider:
    $('.card_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        infinity: true,
        dots: true,
        prevArrow: '<img class="prev_btn" src="img/arrow-left.png"/>',
        nextArrow: '<img class="next_btn" src="img/arrow-right.png"/>',
    });
    
// Mobile menu:
    $('.burger_menu').click(function() {
        $('.mobile_menu').toggleClass('active');
        $('.line1').toggleClass('show');
        $('.line2').toggleClass('show');
        $('.line3').toggleClass('show');
        $('body').toggleClass('active');
    });

// Click на сбербанк:
    $('.sberbank').click(function(e) {
        e.preventDefault();
        $('.whatsapp_modal').addClass('active');
    });
    $('.whatsapp_modal .close').click(function() {
        $('.whatsapp_modal').removeClass('active');
    });
});


// ==================================>    VANILLA JS <=======================================
// Accordion:
const acc = document.getElementsByClassName("acc_btn");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle('active');
        let panel = this.parentElement.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Mobile accordion:
const mediaQuery = window.matchMedia('(max-width: 576px)');
const acc_mobile = document.getElementsByClassName("mobile_acc");

if(mediaQuery.matches) {
    for (let i = 0; i < acc_mobile.length; i++) {
        acc_mobile[i].addEventListener("click", function () {
            this.classList.toggle('active');
            let panel = this.nextElementSibling;
            let arrowIcon = this.querySelector('.arrow_icon');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                arrowIcon.classList.remove('active');
    
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                arrowIcon.classList.add('active');
            }
        });
    }
    document.querySelector('.testim_title').innerText = 'Отзывы';
}

const mediaQueryTwo = window.matchMedia('(max-width: 1200px)');

if(mediaQueryTwo.matches) {
    document.querySelector('.sign_in a').innerText = 'Вход';
}

// Переход на страницу оплаты:
let goPaymentBtn = document.querySelector('.go_payment_btn');

goPaymentBtn.addEventListener('click', () => {
    window.location = 'payment2.html';
});
