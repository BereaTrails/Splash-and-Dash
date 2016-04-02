$(document).ready(function(){
$(".navbar-brand").fadeOut();

$(window).scroll(function(){
  $('.float img').css('position', 'relative');
  $('.float img').animate({right: '1000px'});
  $('.float img').fadeOut();

  $(".navbar-brand").fadeIn();

});
  var wheight = $(window).height(); //get the height of the window
$(".video").css("height", $(".float").outerHeight() +100);
  $('.fullheight').css('height', wheight);

  $('.stripe').css("height", wheight/3);
  //resize the "fullheight" elements on screen resize
  $(window).resize(function() {
      wheight = $(window).height(); //get the height of the window
      $('.fullheight').css('height', (wheight)); //set to window tallness
      ('.halfheight').css('height', wheight/2);
      $('.thirdheight').css('height', wheight/3);
      $(".video").css("height", $(".float").outerHeight()+100);

  });


  $(function() {
      $("[href^='#']").on("click", function( e ) {

        var target = $(this).attr('href');

        var scrollTop = $( target ).offset().top-$('nav').height();

        if ( target =='#home'){
           scrollTop = 0;
        }

        $("body, html").animate({
                scrollTop: scrollTop
            }, 800);

        e.preventDefault();


      });

    });

  $('.masonry-grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth:210

  });
  $('.mason-grid').masonry({
    // options
    itemSelector: '.grid-thing',

    columnWidth:100

  });



})
