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

    // Проверка на rafio buttons:
    $('.check_input_no').click(function() {
        $('.input_checking_yes').prop('checked', false);
        if($('.input_checking_no').is(':checked')) {
            $('.check_field').val("");
            $('.check_field').attr("disabled", false);
        } else {
            $('.check_field').val("Нет");
            $('.check_field').attr("disabled", true);
        }
    });
    $('.input_checking_yes').click(function() {
        $('.input_checking_no').prop('checked', false);
        $('.check_field').val("");
        $('.check_field').attr("disabled", false);
    });

    $('.checking_checkbox_two').click(function() {
        $('.input_checking_one').prop('checked', false);
    });
    $('.checking_checkbox_one').click(function() {
        $('.input_checking_two').prop('checked', false);
    });

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
        $('html').toggleClass('active');
    });

    $('.burger_menu_personal').click(function() {
        $('.mobile_menu').toggleClass('active');
        $('.line1').toggleClass('show');
        $('.line2').toggleClass('show');
        $('.line3').toggleClass('show');
        $('html').toggleClass('active');
    });

    // Click на сбербанк:
    $('.sberbank').click(function(e) {
        e.preventDefault();
        $('.whatsapp_modal').addClass('active');
    });
    $('.whatsapp_modal .close').click(function() {
        $('.whatsapp_modal').removeClass('active');
    });

    // Калькулятор замен продуктов:
    $('.product_img').click(function() {
        $('.product_img').removeClass('active');
        $(this).addClass('active');
    });

    // CLick to icon settings:
    $('.settings_icon').click(function(e) {
        $('.personal_menu').toggleClass('active');
    });

    // Отчеты:
    $('.delete_icon').click(function() {
        $('.delete_modal').addClass('active');
        $('html').addClass('active');
        $('.delete_content').addClass('active');
    });
    $('.name_icon').click(function() {
        $('.delete_modal').addClass('active');
        $('html').addClass('active');
        $('.name_content').addClass('active');
    });
    $('.delete_modal .close').click(function() {
        $('.delete_modal').removeClass('active');
        $('html').removeClass('active');
        $('.name_content').removeClass('active');
    });
    $('.delete_modal button').click(function() {
        $('.delete_modal').removeClass('active');
        $('html').removeClass('active');
        $('.name_content').removeClass('active');
    });

    $('.third_svg').click(function() {
        $('.table_modal').addClass('active');
        $('html').addClass('active');
    });
    $('.table_modal span').click(function() {
        $('.table_modal').removeClass('active');
        $('html').removeClass('active');
    });

    // Input mask for telephone number:
    $('.phone_field').inputmask("phone", {
        placeholder: '#',
        showMaskOnHover: false,
    });
        
    Inputmask.extendAliases({
        my_phone: {
            alias: "abstractphone",
            phoneCodes: [{
            mask: "+7(###) ###-##-##",
            }],
        }
    });
    $('.phone_field').inputmask("my_phone");
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

// Кнопка для копирования ссылки:
function copyLink() {
    var copyText = document.querySelector(".copy_text");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    document.execCommand("copy");
  
    alert('Ссылка скопирована!');
}

// Переход на страницу "Новый расчет":
function goNewCalc() {
    window.location = 'replacement-products.html';
}

// Переход на страницу "Результат замены":
function goResult() {
    window.location = 'replacement-results.html';
}

// Переход на страницу Магазин:
function goOnlineShop() {
    window.location = 'online-shop.html';
}
