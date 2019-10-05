$(document).ready(function () {
  // body...

    // filter card
    $('.projects').isotope({
        itemSelector: '.filter-item',
        layoutMode: 'fitRows'
    });

    $('.filter-project button').click(function(){
      
      $(this).siblings().removeClass("active");
      $(this).addClass('active');

        var seletor = $(this).attr('data-filter');
        console.log(seletor);
        $('.projects').isotope({
            filter: seletor
        });
        return false;
    });


    // video popup
    $('.popup-start').magnificPopup({
      type:'inline',
      midClick: true /* Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.*/
    });


// frature part change the feature image
    let element = $('.feature-option a').hover(function(){
      var classname = $(this).attr('id').split(" ");
      // console.log(classname);
    
      $(".features-part .col-lg-8.col-md-12").removeClass('one');
      $(".features-part .col-lg-8.col-md-12").removeClass('two');
      $(".features-part .col-lg-8.col-md-12").removeClass('three');
      $(".features-part .col-lg-8.col-md-12").removeClass('four');
      $(".features-part .col-lg-8.col-md-12").addClass(classname);
    });


})
