$(document).ready(function() {
    // SmartMenus mobile menu toggle button
    $(function() {
        $('#main-menu').smartmenus();

    });
    // SmartMenus mobile menu toggle button
    $(function() {
        var $mainMenuState = $('#main-menu-state');
        if ($mainMenuState.length) {
            // animate mobile menu
            $mainMenuState.change(function(e) {
                var $menu = $('#main-menu');
                if (this.checked) {
                    $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
                } else {
                    $menu.show().slideUp(250, function() { $menu.css('display', ''); });
                }
            });
            // hide mobile menu beforeunload
            $(window).bind('beforeunload unload', function() {
                if ($mainMenuState[0].checked) {
                    $mainMenuState[0].click();
                }
            });
        }
    });
    //Swiper
        //initialize swiper when document ready
        var mainSlider = new Swiper ('.swiper-container-main', {
            // Optional parameters
            navigation: {
                nextEl: '.swiper-button-next-main',
                prevEl: '.swiper-button-prev-main',
            },
            pagination: {
                el: '.swiper-pagination-main',
                clickable: true,
            },
        });
        var reviewSlider = new Swiper ('.swiper-container-review', {
            // Optional parameters
            slidesPerView: 4,
            spaceBetween: 30,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next-review',
                prevEl: '.swiper-button-prev-review',
            },
            pagination: {
                el: '.swiper-pagination-review',
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                1350: {
                    slidesPerView: 4,
                },
                855: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                320: {
                    slidesPerView: 1,
                },

            }
        });
    var projectsSlider = new Swiper ('.swiper-container-projects', {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-projects',
            prevEl: '.swiper-button-prev-projects',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            430: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            800: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1251: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

        }
    });
    var keramogranitSlider = new Swiper ('.swiper-container-keramogranit', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-keramogranit',
            prevEl: '.swiper-button-prev-keramogranit',
        },
        pagination: {
            el: '.swiper-pagination-keramogranit',
            clickable: true,
        },
    });
    var mainSlider = new Swiper('.swiper-container-elevators', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-elevators',
            prevEl: '.swiper-button-prev-elevators',
        },
        pagination: {
            el: '.swiper-pagination-elevators',
            clickable: true,
        },

    });
    // Fancybox
    $(document).ready(function() {
        $(".fancybox").fancybox();
    });

    // Techinfo
    $('.techinfo__specifications').hide();
    $('.techinfo__nav_specific').click(function (e) {
        if ($('.techinfo__description').css('display') == 'block') {
            $('.techinfo__description').css('display', 'none');
            $('.techinfo-active_desc').css('display', 'none');
            $('.techinfo__specifications').css('display', 'block');
            $('.techinfo-active_spec').css('display', 'block');
        }
        else {
            $('.techinfo__specifications').css('display', 'none');
            $('.techinfo-active_spec').css('display', 'none');
        }
    });
    $('.techinfo__nav_desc').click(function (e) {
        if ($('.techinfo__description').css('display') == 'none') {
            $('.techinfo__description').css('display', 'block');
            $('.techinfo-active_desc').css('display', 'block');
            $('.techinfo__specifications').css('display', 'none');
            $('.techinfo-active_spec').css('display', 'none');
        }
        else {
            $('.techinfo__specifications').css('display', 'none');
            $('.techinfo-active_spec').css('display', 'none');
        }
    });

    // Map
    // ymaps.ready(init);
    //
    // function init() {
    //     var myMap = new ymaps.Map("map", {
    //         center: [56.12657906861558, 40.4115845],
    //         zoom: 16,
    //         controls: []
    //     });
    //     var myPlacemark = new ymaps.Placemark([56.12657906861558, 40.4115845], {}, {
    //         iconLayout: 'default#image',
    //         iconImageHref: 'assets/app/img/map-marker.png',
    //         iconImageSize: [40, 40],
    //         iconImageOffset: [-3, -42]
    //     });
    //     myMap.geoObjects.add(myPlacemark);
    //
    //     myMap.behaviors.disable(['scrollZoom'])
    // }
    // Projects Nav
    $('.image__nav').on('click', function () {
        $('.img__after').toggleClass('img__hide');
        $('.image__nav').toggleClass('nav__swipe')
        $('.img__before').toggleClass('img__top')
    })
    // Popap
    $('.header__nav_btn, .order__btn, .details_btn').on("click", function () {
        $('#popap__header_btn').show();
    });
    $('.popap__close').on("click", function () {
        $('#popap__header_btn').hide();
    });

    // До/После
    $ ( ".projects__list_item" ) .twentytwenty ();

});

