/*global $ */
$(document).ready(function () {
    
    /* sticky nav */
    $('.js-section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* button scroll */
    $('.js-scroll-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });
    
    $('.js-scroll-features').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 500);
    });

    /* nav scroll */
    $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 500);
            return false;
          }
        }
      });
    });
    /* mobile nav */
    $('.js-nav-icon').click(function () {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(100);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    /* animate */
    $('.js-wp-1').waypoint(function () {
        $('.js-wp-1').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-2').waypoint(function () {
        $('.js-wp-2').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* gmap */
    var map = new GMaps({
      div: '.map',
      lat: 38.7436057,
      lng: -9.05,
        zoom: 12
    });
    
    map.addMarker({
      lat: 38.7436057,
      lng: -9.1,
      title: 'Lisbon',
      infoWindow: {
          content: '<p>Our Lisbon HQ</p>'
      }
    });

});