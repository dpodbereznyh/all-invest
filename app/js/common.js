$(document).ready(function() {
    // Menu
    $('.header__menu_list>li').click(function (e) {
        $('.' + $(this).data('ddm')).toggleClass('ddm-active');
    });

// SmartMenus mobile menu toggle button
    $(function() {
        $('#main-menu').smartmenus({
            hideTimeout: 300000
        });

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


    $('.fa-bars').click(function (e) {
        e.preventDefault();
        $('.ddm__wrap').toggleClass('ddm-active');
    });

    // Submenu
    $('.sub-menu').hide();
    $('.ddm__title').mouseover(function (e) {
        $(this).siblings('.sub-menu').show();
    });
    $('.ddm__list').mouseleave(function (e) {
        $('.sub-menu').hide();
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


    // $('.ddm__list').mouseleave(function (e) {
    //     $('.sub-menu').hide();
    // });

    // Map
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [56.12657906861558, 40.4115845],
            zoom: 16,
            controls: []
        });
        var myPlacemark = new ymaps.Placemark([56.12657906861558, 40.4115845], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable(['scrollZoom'])
    }
    // Projects Nav
    $('.image__nav').on('click', function () {
        $('.img__after').toggleClass('img__hide');
        $('.image__nav').toggleClass('nav__swipe')
        $('.img__before').toggleClass('img__top')
    })
    // Popap
    $('.header__nav_btn').on("click", function () {
        $('#popap__header_btn').show();
    });
    $('.popap__close').on("click", function () {
        $('#popap__header_btn').hide();
    });

    // До/После
    $ ( ".projects__list_item_img" ) .twentytwenty ();

});

