$(document).ready(function() {
  //scroll-nav
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.top-panel').addClass('hidden');
      $('.bottom-logo').removeClass('hidden');
      $('.orange-logo').addClass('hidden');
      $('.main-nav').css("padding-top", "10px");
    }
    if ($(this).scrollTop() < 100) {
      $('.top-panel').removeClass('hidden');
      $('.bottom-logo').addClass('hidden');
      $('.orange-logo').removeClass('hidden');
      $('.main-nav').css("padding-top", "5px");
    }
  });
  //scrollanimate
  topMenu = $(".icon-nav-list");
  topMenuHeight = topMenu.outerHeight()+15;

  topMenu.find("a").click(function(e){
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
      scrollTop: offsetTop
    }, 500);
    e.preventDefault();
  });
  //validate-phone
  $("#telForm, #Form").submit(function () {

    var error = 0;
    var phoneV = $(this).find('.phone-number').val();
    var phoneLngth = phoneV.length;

    if( /[^0-9]/.test(phoneV) ) {
      $(this).find('.phone-number').addClass('not-valid');
      $(this).children(".message").text('Номер телефона должен содержать только цифры');
      error = 2;
    } else if (phoneLngth <= 3) {
      $(this).find('.phone-number').addClass('not-valid');
      $(this).children(".message").text('Введите пожалуйста ваш номер телефона');
      error = 1;
    } else {
      $(this).find('.phone-number').addClass('valid');
    }

    if (error === 0) {
     return true;
   }
   else {
    return false;
  }
});
  //validate-form
  $("#sendForm").submit(function () {

    var error = 0;
    var phoneV = $(this).find('.phone-number').val();
    var phoneLngth = phoneV.length;

    if( /[^0-9]/.test(phoneV) ) {
      $(this).find('.phone-number').addClass('not-valid').prev(".message").text('Номер телефона должен содержать только цифры');
      error = 2;
    } else if (phoneLngth <= 3) {
      $(this).find('.phone-number').addClass('not-valid').prev(".message").text('Введите пожалуйста ваш номер телефона');
      error = 1;
    } else {
      $(this).find('.phone-number').addClass('valid');
    }

    var email = $(".email").val();
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);


    if (!pattern.test(email)) {
      error = 2;
      $(this).find('.email').addClass('not-valid').prev(".message").text('E-mail введен не корректно');
    } else {
      $(this).find('.email').addClass('valid');
    }

    if (error === 0) {
     return true;
   }
   else {
    return false;
  }
});
  //main-slider
  $(".main-slider").owlCarousel({

    navigation : true,
    pagination: false,
    slideSpeed : 700,
    paginationSpeed : 1000,
    singleItem:true,
    autoPlay: true

  });
  //main-nav
  $("#toggle").on("click", function(){

   if ($(this).hasClass("clicked")) {
    $("#nav").slideUp("faste").removeClass("opened-nav");
    $(this).removeClass("clicked");

  }else {
    $("#nav").slideDown("faste").addClass("opened-nav");
    $(this).addClass("clicked");
  }
});
    //catalog-nav
    $(".catalog-btn").on("click", function(){

      $("html, body").animate({ scrollTop: 0 }, "slow");

      if ($(this).hasClass("clicked")) {
        $(".inner-nav").removeClass("active");
        $(this).removeClass("clicked");

      }else {
        $(".inner-nav").addClass("active");
        $(this).addClass("clicked");
      }
    });
  // dropdown-question
  $(".toggle-panel").on("click", function(){

   $(".question-block.active").removeClass("active").children(".panel-container").slideUp();

   if ($(this).hasClass("opened")) {
    $(this).next(".panel-container").slideUp();
    $(this).parent(".question-block").removeClass("active");
    $(this).removeClass("opened");

  }else {
    $(this).next(".panel-container").slideDown();
    $(this).parent(".question-block").addClass("active");
    $(this).addClass("opened");
  };
});



  // window-catalog page
  $('.windows-type-list__item').click(function() {
    $('.windows-type-list__item').removeClass('windows-type-list__item--is-active');
    $(this).toggleClass('windows-type-list__item--is-active');
  });

  $('.windows-subtype-list__item').click(function() {
    $('.windows-subtype-list__item').removeClass('windows-subtype-list__item--is-active');
    $(this).toggleClass('windows-subtype-list__item--is-active');
  });


  


  // $('input[type="range"]').rangeslider();

//popup
PopUpHide();

$(document).mouseup(function (e) {
  var container = $("#popup");
  if (container.has(e.target).length === 0){
    container.fadeOut("slow");
  }
});
//popup fade in
$(".popup-link").on("click",function(e){
  e.preventDefault();
  $("#popup").fadeIn("slow");
});
//popup close
$(".close").on("click",function(){
  $("#popup").fadeOut("slow");
});

//map
google.maps.event.addDomListener(window, 'load', init);

//range

}); //document ready
//
function PopUpHide() {
  $("#popup").fadeOut("slow");
}



$(document).ready(function() {
  //range slider





  var $document = $(document);
        var selector = '[data-rangeslider]';
        // var $element = $(selector);

        // For ie8 support
        var textContent = ('textContent' in document) ? 'textContent' : 'innerText';

        // Example functionality to demonstrate a value feedback
        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
            output[textContent] = value;
        }

        $document.on('input', 'input[type="range"], ' + selector, function(e) {
            valueOutput(e.target);
        });










  $('.range-slider').rangeslider({
    polyfill: false
  });

  $('.carusel-sl').slick({
     slidesToShow: 5,
     arrows: true
  })

  // ui 

  $('.blocks-ui li').click(function(){
    var id = $(this).attr('id');
    $('.ui-wrap').removeClass('ui-current');
    $('ul[data-id="' + id + '"]').addClass('ui-current');
    $('.blocks-ui li').removeClass('active');
    $(this).addClass('active');
  })

    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 2000,
      value: 1400,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );

$( "#slider-horizontal" ).slider({
      range: "min",
      min: 0,
      max: 2000,
      value: 1400,
      slide: function( event, ui ) {
        $( "#amount-2" ).val( ui.value );
      }
    });
    $( "#amount-2" ).val( $( "#slider-horizontal" ).slider( "value" ) );    


    // toggle-list

  $('.toggle-item').focus(function(){
    var id = $(this).attr('id');
    $('ul[data-id="' + id + '"]').show();
  })
  $('.toggle-item').blur(function(){
    var id = $(this).attr('id');
    setTimeout(function(){
      $('ul[data-id="' + id + '"]').hide();  
    }, 200);
    
  })
  $('.toggle-list li').click(function(){
    var content = $(this).html(),
      id = $(this).parent().attr('data-id');
    
    $('#' + id).html(content);
  })    

  $('#char').click(function(){
    $('#descr').removeClass('active');
    $(this).addClass('active');
    $('div[data-id="descr"]').css('opacity', '0');
    $('div[data-id="char"]').css('opacity', '1');
  })
  $('#descr').click(function(){
    $('#char').removeClass('active');
    $(this).addClass('active');
    $('div[data-id="char"]').css('opacity', '0');
    $('div[data-id="descr"]').css('opacity', '1');
  })

  $(window).on('load resize', function(){
    if($(window).width() > 1200) { 
        var offset = $('.container').offset().left;
        $('.block.blue').css('padding-left', offset);
        $('.block.green').css('padding-left', offset);
        $('.block.orange').css('padding-right', offset);
        $('.block.red').css('padding-right', offset);
      }
      if ($('.tabs-nav li[data-nav-id="data-1"]').hasClass('active')) {
        $('main.windows-calculator-container .window-cost .body-wrapper.active').css('border-radius', '0 5px 5px 5px')
      }

  })
  
  $('.tabs-nav li').click(function(){
    var id = $(this).attr('data-nav-id');
    $('.tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.body-wrapper').removeClass('active');
    $('#' + id).addClass('active');
  })
  if($(window).width() > 992) { 
      $('.tabs-nav li[data-nav-id="data-7"]').click(function(){
      $('main.windows-calculator-container .window-cost .body-wrapper.active').css('border-radius', '5px 0 5px 5px');
    })
    $('.tabs-nav li[data-nav-id="data-1"]').click(function(){
      $('main.windows-calculator-container .window-cost .body-wrapper.active').css('border-radius', '0 5px 5px 5px');
    })
  }
  

});




//google-map
function init() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
            center: new google.maps.LatLng(50.034127, 36.223486), // Kharkov
            styles: [
            {
              "featureType": "all",
              "elementType": "all",
              "stylers": [
              {
                "weight": "2.36"
              }
              ]
            }
            ]
          };
          var mapElement = document.getElementById('map');
          var map = new google.maps.Map(mapElement, mapOptions);
    // add a marker
    var markerImage = new google.maps.MarkerImage(
      'img/map-marker.png',
      new google.maps.Size(317,110),
      new google.maps.Point(0,0)
      );
    var marker = new google.maps.Marker({
      icon: markerImage,
      position: new google.maps.LatLng(50.034127, 36.223486),
      map: map,
      title: 'Svitanok'
    });
  }
