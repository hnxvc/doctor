(function($) {
  'use strict';

  $(function() {

    /* --------------------------------------------------------------------------
       Sick Slide
       -------------------------------------------------------------------------- */
    $(".xh-main-slide").slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false
    });

    /* --------------------------------------------------------------------------
       Mobile Navigation
       -------------------------------------------------------------------------- */

    var slideout = new Slideout({
      'panel': document.getElementById('xh-pannel'),
      'menu': document.getElementById('xh-mobile'),
      'padding': 266,
      'tolerance': 70,
      'side': 'right',
      'touch': false
    });

    // set min-height panel
    var h_window = $(window).height();
    $("#xh-pannel").css("min-height", h_window);

    $("#xh-pannel").click(function(e) {
      var length = $(e.target).closest('.xh-toggle-menu').length;
      if (slideout.isOpen() && length === 0) {
        slideout.close();
      }
    });

    $(".xh-menu-mobile li.menu-item-has-children").prepend("<span class='xh-open-menu-mobile'></span>");
    $(".xh-toggle-menu").click(function() {
      slideout.toggle();
    });

    // multi level menu
    $(".xh-open-menu-mobile").on("click", function() {
      $(this).toggleClass("active");
      $(this).parent("li").siblings().find("ul").slideUp();
      $(this).parent("li").siblings().find(".xh-open-menu-mobile").removeClass("active");
      $(this).siblings('ul').slideToggle();
    });

    /* --------------------------------------------------------------------------
       Custom select
       -------------------------------------------------------------------------- */
    $(".chosen-select").select2({
      minimumResultsForSearch: Infinity
    });

    $('.xh-date').datetimepicker({
      timepicker: false,
      format: 'd/m/Y',
      formatDate: 'Y/m/d',
    });

    $('.xh-time').datetimepicker({
      datepicker: false,
      format: 'H:i',
      step: 5
    });


    /* --------------------------------------------------------------------------
       Form Appointment
       -------------------------------------------------------------------------- */
    $("#form-appointment").parsley();
    $("#form-appointment input[type='submit']").on('click', function() {
        $('#form-appointment').parsley().validate();
        // if ($('#form-appointment').parsley().isValid()) {
        //     console.log('valid');
        // } else {
        //     console.log('not valid');
        // }
    });

    /* --------------------------------------------------------------------------
       Tab project
       -------------------------------------------------------------------------- */
    $(".xh-list-project").eq(0).siblings().hide();
    $(".xh-project .xh-nav-project a:first-child").addClass('active');
    $(".xh-project .xh-nav-project a").click(function(e) {
      $(this).addClass('active').siblings().removeClass('active');
      var index = $(this).index();
      $(".xh-list-project").eq(index).stop().slideDown('slow').siblings().stop().slideUp('slow');
      e.preventDefault();
    });

    /* --------------------------------------------------------------------------
       Load Video
       -------------------------------------------------------------------------- */

    $(".icon-video").click(function(e) {
      var id_video = $(this).data('id');
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id_video + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';

      $(".xh-wrap-video").addClass('xh-video-play').html(iframe);

      e.preventDefault();
    });

    /* --------------------------------------------------------------------------
       Partner
       -------------------------------------------------------------------------- */
    $(".xh-list-partner").slick({
      infinite: true,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: false,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
       ]
    });

    /* --------------------------------------------------------------------------
       Click scroll
       -------------------------------------------------------------------------- */
    $(".xh-scroll-top").click(function(e){
      $("html,body").animate({
        scrollTop: 0
      },200);
      e.preventDefault();
    });

    $(".xh-appointment").click(function(e){
      $("html,body").animate({
          scrollTop: $(".xh-form-appointment").offset().top
      },500);
      e.preventDefault();
    });

  }); // end document ready


  $(window).resize(function() {

    // set min-height panel
    var h_window = $(window).height();
    $("#xh-pannel").css("min-height", h_window);

  });

})(jQuery); // end JQuery namespace
