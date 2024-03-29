const bootstrap = require("./css/bootstrap.min.css")
const font = require("./css/font-awesome.min.css")
const stroke = require("./css/pe-icon-7-stroke.css")
const pretty = require("./css/prettyPhoto.css")
const main = require("./css/main.css")
const custom = require("./css/custom.css")
const animate = require("./css/animate.min.css")
const settings = require("./css/settings.css")

exports.onInitialClientRender = () => {
  // dirty fix for missing popstate listener
  const GATSBY_NAVIGATE = window.___navigate || {}

  window.addEventListener('popstate', () =>
    GATSBY_NAVIGATE(window.location.pathname, { replace: true })
  )
}

exports.onRouteUpdate = () => {
  jQuery(document).ready(function ($) {
    "use strict";


    $('#send_message').click(function(e){
            
      //Stop form submission & check the validation
      e.preventDefault();
      
      // Variable declaration
      var error = false;
      var ccr_name = $('#name').val();
      var ccr_email = $('#email').val();
      var ccr_message = $('#message').val();
      
      // // Form field validation
      // if(ccr_name.length == 0){
      //     var error = true;
      //     $('#name_error').fadeIn(500);
      // }else{
      //     $('#name_error').fadeOut(500);
      // }
      // if(ccr_email.length == 0 || ccr_email.indexOf('@') == '-1'){
      //     var error = true;
      //     $('#email_error').fadeIn(500);
      // }else{
      //     $('#email_error').fadeOut(500);
      // }
      // if(ccr_message.length == 0){
      //     var error = true;
      //     $('#message_error').fadeIn(500);
      // }else{
      //     $('#message_error').fadeOut(500);
      // }
      
      // If there is no validation error, next to process the mail function
      if(error == false){
         // Disable submit button just after the form processed 1st time successfully.
          $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
          

          /* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
          $.post($("#contact-form").attr("action") + '?no-cache=1' , $("#contact-form").serialize(),function(result){
                  //If the email is sent successfully, remove the submit button
                   $('#name').remove();
                   $('#email').remove();
                   $('#message').remove();
                   $('#send_message').remove();
                  //Display the success message
                  $('#mail_success').fadeIn(500);
            
          });
      }
  });  


    var $menu = $('.nav-menu');
    $menu.find('ul.sub-menu > li').each(function(){
        var $submenu = $(this).find('>ul');
        if($submenu.length == 1){
            $(this).hover(function(){
                if($submenu.offset().left + $submenu.width() > $(window).width()){
                    $submenu.addClass('back');
                }else if($submenu.offset().left < 0){
                    $submenu.addClass('back');
                }
            }, function(){
                $submenu.removeClass('back');
            });
        }
    });
    /* Menu drop down*/
    $('.nav-menu li.menu-item-has-children').append('<span class="cms-menu-toggle"><i class="fa fa-angle-down"></i></span>');
    $('.cms-menu-toggle').click(function(){
        $(this).prev().toggleClass('submenu-open');
    });
    /* Page Fixed Menu */
    $('.header-fixed-page').parents('body').addClass('remove-margin-top');
    $('#cms-header.no-sticky').parents('body').addClass('remove-margin-top');
    

    jQuery('#rev_slider_1_1').show().revolution(
      {
       
      dottedOverlay: "twoxtwo",
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "on",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        }
        ,
        arrows: {
          style: "hebe",
          enable: true,
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: true,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          }
        }
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1920, 1024, 778, 480],
      gridheight: [700, 700, 700, 700],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner3",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });

    jQuery('.cms-grid-masonry').each(function(){
      let $this = jQuery(this);
     let $filter = $this.parent().find('.cms-grid-filter');
      $this.imagesLoaded(function(){

        $this.shuffle({
          itemSelector:'.cms-grid-item',
      });
      });
     if($filter){
       $filter.find('a').on('click',function(e){
         e.preventDefault();
         // set active class
         $filter.find('a').removeClass('active');
         jQuery(this).addClass('active');
              
         // get group name from clicked item
         var groupName = $(this).attr('data-group');
         // reshuffle grid
         jQuery(this).parent().parent().parent().parent().find('.cms-grid-masonry').shuffle('shuffle', groupName );
       });
     }
  });  


    /* pretty photo */


    $("a[data-rel^='prettyPhoto']").prettyPhoto();
    $("a.prettyphoto").prettyPhoto();
    $("a[data-rel^='prettyPhoto']").prettyPhoto({ hook: "data-rel", social_tools: !1, theme: "pp_default", horizontal_padding: 20, opacity: .8, deeplinking: !1 });

    var back_to_top = '1';
    var header_type = 'ontop';
    var menu_sticky_tablets = "";
    var menu_sticky_mobile = "";
    var paralax = '1';
    var one_page = false;

    /* window */
    var window_width, window_height, scroll_top;

    /* menu */
    var menu_sticky = '0';

    /* header */
    var header = $('#cms-header-wrapper');
    var header_top = 0;

    /* scroll status */
    var scroll_status = '';

    if ($(".header-onepage").length > 0) {
      one_page = true;
    }

    if ($("#cms-header.has-sticky").length > 0) {
      menu_sticky = '1';
    }

    /* Show search at top */
    $("#header-widget-search").on('click', function () {
      $("#cms-search").toggleClass('open');
      $("#cms-search input[type='text']").focus();
    });
    $("#header-widget-search-close").on('click', function () {
      $("#cms-search").removeClass('open');
    });

    /* Show Main Navigation for Header v4*/
    $("#cms-show-mainnav").on('click', function () {
      $("#cms-mainnav-v4").toggleClass('open');
    });
    $("#cms-hide-mainnav").on('click', function () {
      $("#cms-mainnav-v4").removeClass('open');
    });


    /**
     * window load event.
     */


    $(".noo-spinner").remove();
    $("#cms-page").css("opacity", "1");

    /** current scroll */
    scroll_top = $(window).scrollTop();

    /** current window width */
    window_width = $(window).width();

    /** current window height */
    window_height = $(window).height();

    /* get Header height */
    header_top = header.length > 0 ? header.outerHeight(true) : 0;

    /* check sticky menu. */
    if (menu_sticky == '1') {
      cms_stiky_menu(scroll_top);
    }

    /* check mobile menu */
    cms_mobile_menu();

    /* check back to top */
    if (back_to_top == '1') {
      /* add html. */
      $('body').append('<div id="back_to_top" class="back_to_top"><span class="go_up"><i style="" class="fa fa-arrow-up"></i></span></div><!-- #back-to-top -->');
      cms_back_to_top();
    }


    /**
     * reload event.
     * 
     * Bind an event handler to the "navigate".
     */
    window.onbeforeunload = function () { }

    /**
     * resize event.
     */
    $(window).resize(function (event, ui) {
      /** current window width */
      window_width = $(event.target).width();

      /** current window height */
      window_height = $(window).height();

      /** current scroll */
      scroll_top = $(window).scrollTop();

      /* check sticky menu. */
      if (menu_sticky == '1') {
        cms_stiky_menu(scroll_top);
      }

      /* check mobile menu */
      cms_mobile_menu();

    });

    /**
     * scroll event.
     */
    var lastScrollTop = 0;

    $(window).scroll(function () {
      /** current scroll */
      scroll_top = $(window).scrollTop();
      /** check scroll up or down. */
      if (scroll_top < lastScrollTop) {
        /* scroll up. */
        scroll_status = 'up';
      } else {
        /* scroll down. */
        scroll_status = 'down';
      }

      lastScrollTop = scroll_top;

      /* check sticky menu. */
      if (menu_sticky == '1') {
        cms_stiky_menu();
      }

      /* Header type style */
      if (header_type == 'fixed') {
        cms_menu_fixed_bg();
      }

      /* check back to top */
      cms_back_to_top();
    });

    /**
     * Sticky menu
     */
    function cms_stiky_menu() {
      if (header_top < scroll_top) {
        switch (true) {
          case (window_width > 992):
            header.find('#masthead #cms-header').addClass('header-sticky');
            $('body').addClass('sticky-margin-top');
            break;
          case ((window_width <= 992 && window_width >= 768) && (menu_sticky_tablets == '1')):
            header.find('#masthead #cms-header').addClass('header-sticky');
            $('body').addClass('sticky-margin-top');
            break;
          case ((window_width <= 768) && (menu_sticky_mobile == '1')):
            header.find('#masthead #cms-header').addClass('header-sticky');
            $('body').addClass('sticky-margin-top');
            break;
        }
      } else {
        header.find('#masthead #cms-header').removeClass('header-sticky');
        $('body').removeClass('sticky-margin-top');
      }
    }
    function cms_menu_fixed_bg() {
      if (header_top < scroll_top) {
        header.addClass('cms-header-fixed-bg');
      } else {
        header.removeClass('cms-header-fixed-bg');
      }
    }

    /**
     * Mobile menu
     */

    $('body').on('click', '#cms-menu-mobile', function () {
      var navigation = $(this).parent().parent().parent().parent().parent().parent().parent().parent().find('#cms-header-navigation');
      if (!navigation.hasClass('collapse')) {
        navigation.addClass('collapse');
      } else {
        navigation.removeClass('collapse');
      }
    });
    /* check mobile screen. */
    function cms_mobile_menu() {
      var menu = $('#cms-header-navigation');

      /* active mobile menu. */
      switch (true) {
        case (window_width <= 992 && window_width >= 768):
          menu.removeClass('phones-nav').addClass('tablets-nav');
          /* */
          cms_mobile_menu_group(menu);
          break;
        case (window_width <= 768):
          menu.removeClass('tablets-nav').addClass('phones-nav');
          break;
        default:
          menu.removeClass('mobile-nav tablets-nav');
          menu.find('li').removeClass('mobile-group');
          break;
      }
    }
    /* group sub menu. */
    function cms_mobile_menu_group(nav) {
      nav.each(function () {
        $(this).find('li').each(function () {
          if ($(this).find('ul:first').length > 0) {
            $(this).addClass('mobile-group');
          }
        });
      });
    }


    /**
     * Parallax.
     */
    var cms_parallax = $('.cms_parallax');
    if (cms_parallax.length > 0 && paralax == '1') {
      cms_parallax.each(function () {
        "use strict";
        var speed = $(this).attr('data-speed');

        speed = (speed != undefined && speed != '') ? speed : 0.1;

        $(this).parallax("50%", speed);
      });
    }

    /**
     * Back To Top
     */
    $('body').on('click', '#back_to_top', function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1500);
    });

    /* Show or hide buttom  */
    function cms_back_to_top() {
      /* back to top */
      if (scroll_top < window_height) {
        $('#back_to_top').addClass('off').removeClass('on');
      } else {
        $('#back_to_top').removeClass('off').addClass('on');
      }
    }


    /**
     * Full page
     */
    if ($('.full-page').length > 0) {

      var anchors = [];

      $('.full-page .cms-grid .cms-grid-item-fullpage').each(function (i) {
        if ($(this).attr('id') != undefined) {
          anchors.push($(this).attr('id'));
        }
      })

      $('.full-page').fullpage({
        sectionSelector: '.cms-grid-item-fullpage',
        autoScrolling: true,
        navigation: true,
      });

      $(".cms-open-popup").fullScreenPopup({
        lockDocumentScroll: false,
      });
    }

    function GoogleMap() {
      // When the window has finished loading create our google map below
      var marker_image = "../images/assets/map-marker.png";

      if ($('#map').length > 0) {
        if ($('#map').attr('data-marker-image') != undefined) {
          marker_image = $('#map').attr('data-marker-image')
        }
        google.maps.event.addDomListener(window, 'load', init);
      }

      function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 11,
          scrollwheel: false,

          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(40.6700, -73.9400), // New York

          // How you would like to style the map.
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#d3d3d3" }]
          }, {
            "featureType": "transit",
            "stylers": [{ "color": "#808080" }, { "visibility": "off" }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "visibility": "on" }, { "color": "#b3b3b3" }]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffffff" }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "weight": 1.8 }]
          }, {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#d7d7d7" }]
          }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{ "visibility": "on" }, { "color": "#ebebeb" }]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{ "color": "#a7a7a7" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffffff" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffffff" }]
          }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{ "visibility": "on" }, { "color": "#efefef" }]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#696969" }]
          }, {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "visibility": "on" }, { "color": "#737373" }]
          }, {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#d6d6d6" }]
          }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {}, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#dadada" }] }]
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(40.6000, -73.9400),
          map: map,
          title: 'Megatron',
          icon: marker_image
        });

        var marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(40.6800, -73.8000),
          map: map,
          title: 'Megatron',
          icon: marker_image
        });

        var marker3 = new google.maps.Marker({
          position: new google.maps.LatLng(40.7300, -74.1280),
          map: map,
          title: 'Megatron',
          icon: marker_image
        });

      }
    }

    GoogleMap();

    function Animation() {
      var wow = new WOW(
        {
          boxClass: 'wow',      // default
          animateClass: 'animated', // default
          offset: 0,          // default
          mobile: true,       // default
          live: true        // default
        }
      );
      wow.init();
    }

    if ($('.wow').length > 0) Animation();

    function Progressbar() {
      $('.cms-progress-wraper').each(function () {
        var $this = $(this);
        var waypoint = $this.waypoint({
          handler: function (direction) {
            $this.find('.progress-bar').progressbar();
          },
          offset: "80%"
        });
      })
    }

    Progressbar();

    //Counter
    if ($('.cms-counter-body').length > 0) {
      $('.cms-counter-body').each(function (index) {
        var $this = $(this);
        var waypoint = $this.waypoint({
          handler: function (direction) {
            $this.find('.timer:not(.counted)').countTo().addClass('counted');
          },
          offset: "90%"
        });
      });
    }

    //Owl Carousel
    $('.cms-carousel-testimonial').each(function () {
      var el = $(this);
      el.owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [767, 1],
        itemsMobile: [480, 1],
        slideSpeed: 500,
        paginationSpeed: 1000,
        rewindSpeed: 1000,
        autoHeight: false,
        addClassActive: true,
        autoPlay: false,
        loop: true,
        pagination: true
      });
    });

  });
};