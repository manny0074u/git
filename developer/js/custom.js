(function ($) {
    // USE STRICT
    "use strict";

    // ANIMATED TRANSITION
    var $animsition = $(".animsition");
    $animsition.animsition({
        inClass: 'fade-in-down-sm',
        outClass: 'fade-out-down-sm',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) {
            window.location.href = url;
        }
    });

    $(window).on('load', function () {

        // HIDE LOADER
        var $loader = $('.animsition-loading');
        $loader.fadeOut(500);

        // PROGRESS BARS
        var $progress_bars = $("#progress-bars");
        var $progress_bar = $(".progress-bar");
        if ($progress_bars.length > 0) {
            var $waypoint = new Waypoint({
                element: document.getElementById('progress-bars'),
                handler: function (direction) {
                    $progress_bar.each(function () {
                        var $width = $(this).attr("aria-valuenow");
                        $(this).css("width", $width + '%');
                    });
                }
            });
        }

        // FANCY BOX POPUP
        var $fancy_box = $(".fancybox-pop");
        if ($fancy_box.length > 0) {
            $fancy_box.fancybox({
                maxWidth: 900,
                maxHeight: 700,
                fitToView: true,
                width: '80%',
                height: '80%',
                autoSize: false,
                closeClick: false,
                openEffect: 'elastic',
                closeEffect: 'elastic',
                padding: 0
            });
        }
        // MASONRY GRID 
        var $grid = $('.masonry-grid');
        if ($grid.length > 0) {
            $grid.imagesLoaded(function () {
                // init Masonry after all images have loaded
                $grid.masonry({
                    itemSelector: ".masonry-item"
                });
            });
        }

        // ISOTOPE FILTER
        var $isotopeContainer = $('.isotopeContainer');
        var $isotopeFilters = $('.isotopeFilters');
        if ($isotopeContainer.length > 0) {
            $isotopeContainer.isotope({
                itemSelector: '.isotopeSelector'
            });
            $isotopeFilters.on('click', 'a', function (e) {
                $isotopeFilters.find('.active').removeClass('active');
                $(this).parent().addClass('active');
                var filterValue = $(this).attr('data-filter');
                $isotopeContainer.isotope({
                    filter: filterValue,
                    masonry: {
                        columnWidth: '.isotopeSelector'
                    }
                });
                e.preventDefault();

            });
        }

        // ANIMATED HEADLINES
        var $aninimated_title = $('.aninimated-title');
        if ($aninimated_title.length > 0) {
            $aninimated_title.animatedHeadline({
                animationType: 'slide'
            });
        }

        // PORTFOLIO SLIDER
        var $portfolio_slider = $('.portfolio-slider');
        if ($portfolio_slider.length > 0) {
            $portfolio_slider.owlCarousel({
                navigation: false, // Show next and prev buttons
                slideSpeed: 300,
                autoPlay: 3000,
                paginationSpeed: 400,
                singleItem: true,
                pagination: true

            });
        }
        // PARTNERS SLIDER
        var $partners = $('.partners');
        if ($partners.length > 0) {
            $partners.owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 5,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]

            });
        }
        // COUNTER
        var $count = $('.count');
        if ($count.length > 0) {
            $count.counterUp({
                delay: 10,
                time: 1000
            });
        }
        // INTERESTS TOOL TIP
        var $interest = $('.interest-icon');
        if ($interest.length > 0) {
            $interest.tooltip();
        }

        // GOOGLE MAP
        var $google_map = $('.google-map');

        if ($google_map.length > 0) {
            $google_map.each(function () {
                // getting options from html 
                var Self = $(this);
                var mapName = Self.attr('id');
                var mapLat = Self.data('map-lat');
                var mapLng = Self.data('map-lng');
                var iconPath = Self.data('icon-path');
                var mapZoom = Self.data('map-zoom');
                var mapTitle = Self.data('map-title');


                var styles = [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#e4e3e3"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape.man_made",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#797979"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#d8d7d7"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#acabab"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#e1e0e0"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ];


                // if zoom not defined the zoom value will be 15;
                if (!mapZoom) {
                    var mapZoom = 12;
                }
                ;
                // init map
                var map;
                map = new GMaps({
                    div: '#' + mapName,
                    scrollwheel: false,
                    lat: mapLat,
                    lng: mapLng,
                    styles: styles,
                    zoom: mapZoom
                });
                // if icon path setted then show marker
                if (iconPath) {

                    map.addMarker({
                        icon: iconPath,
                        lat: 40.925372,
                        lng: -74.276544,
                        title: 'Fedrex',
                        infoWindow: {
                            content: '<h6>Head office 12 sector 7</h6> <p>Ada Rood-15 H#12 Texas, USA</p>'
                        }
                    });
                }
            });
        }

        // CONTACT FORM
        var $contact = $('#ContactForm');
        if ($contact.length > 0) {
            $contact.validator().on('submit', function (e) {
                var message = '';
                if (e.isDefaultPrevented()) {
                    alert('Your Form Contain Invalid Fields');
                } else {
                    e.preventDefault();
                    //Send Contact Mail AJAX
                    var formdata = jQuery("#ContactForm").serialize();
                    jQuery.ajax({
                        type: "POST",
                        url: "contact_form/contact.php",
                        data: formdata,
                        dataType: 'json',
                        async: false,
                        success: function (data) {
                            if (data.success) {
                                alert("Your Message has been Sent!");
                            } else {
                                alert("Error On Sending Message!");
                            }

                        },
                        error: function (error) {
                            alert("Something Went Wrong!");
                        }

                    });
                }
            });
        }
    });


})(jQuery);