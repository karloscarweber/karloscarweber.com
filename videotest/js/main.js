/*
 ***********************
 *
 *
 * Startup Code
 *
 *
 ***********************
*/


$(function() {

  // Fade the site copy
  setTimeout(function(){
    // animate the this-is-retail text to disappear    
    $('.sitetitle.desktop').transition({opacity: 0}, 2000);  
    
    // also remove the pretty background from the DOM so that buttons will still work normally.
    setTimeout(function() {
      $('.sitetitle .modalOverlay').remove();

      backgroundPlayer.play();
      console.log('play');    
      if ($('#mutebutton').hasClass('on')) {
        console.log('mute');    
        $('#mutebutton').click();
      }


    }, 3000);

    //mute the video right off the bat.



  }, 3000);

  // Initial Execution of important stuff. 
  setTimeout(function() {
      $(window).trigger('resizeEnd');
      $(window).trigger('scrollEnd');
  }, 250);  


  // I Can't believe I'm doing this with Javascript.
  $('.closeButton img').hover(
      function() {
        $(this).attr({'src': 'img/closeButtonHover.png'})
      },
      function() {
        $(this).attr({'src': 'img/closeButton.png'})
      }
    );

    
});



/*
 ***********************
 *
 *
 * Background Code
 *
 *
 ***********************
*/

  // MUTE button controls
  $("#mutebutton").on('click', function(){
      $(this).toggleClass("on off");
      toggleMute();
  });

  // Create a reference to the video object.
  var backgroundPlayer = _V_("background-video");

  // some toggle mute action
  function toggleMute() {
    if(backgroundPlayer.volume() != 0){
            backgroundPlayer.volume(0);
            console.log('muted');
        } else {
            console.log('unmuted');
            backgroundPlayer.volume(0.5);
        }
  }


/*work on the vimeo api stuff.*/







/*
 ***********************
 *
 *
 * Modal 1 Code
 *
 *
 *
 ***********************
*/
// Create and populate the popup video slider, it's contents, and intitiate the slider.

/* Modal Popup Code */

  // Toggle the open and close of the button.
  $("#centralVideo").on('click', function(){

    $('#modalPopup1').toggleClass("visible invisible");
    $('.modalOverlay').toggleClass("visible invisible");

    // make the video visible
    var videoNumber = $('.modalPopup').find('iframe.visible').attr('data-videoNumber');
    var theVideo = $('.modalPopup').find('iframe#vimeo'+ videoNumber);
    //theVideo.toggleClass("visible invisible");  
    if ($('#mutebutton').hasClass('on')) {$('#mutebutton').click(); }
  });

  // create a dynamic click event using the number
  // Call the API when a button is pressed
  $('#modalPopup1 .closeVideo').bind('click', function() {
      $('#modalPopup1').toggleClass("visible invisible");
      $('.modalOverlay').toggleClass("visible invisible");

      // just remove the video
      $('#modalPopup1 iframe').remove();
  });

  // bind a click event factory to the videos thumbnails
  $("#modalPopup1").on('click', function(){
      makeAVimeo();
  });

  // Video Object Maker 
  var makeAVimeo = function(){
    // drop in the iframe code.
    iframeCode = '<iframe class="visible" width="100%" height="100%" src="http://www.youtube.com/embed/zY6QS73A8f4" frameborder="0" allowfullscreen></iframe>';

    // add the iframe to the modalPopup window thingy.
    $('#modalPopup1').append(iframeCode);
  }





/*
 ***********************
 *
 *
 * Modal 2 Code
 *
 *
 *
 ***********************
*/
// Create and populate the popup video slider, it's contents, and intitiate the slider.

/* Modal Popup Code */

  // Toggle the open and close of the button.
  $("#slideShowBox1").on('click', function(){
    $('.modalPopup2, #hiddenSection, .modalOverlay').toggleClass("visible invisible");
    if ($('#mutebutton').hasClass('on')) {$('#mutebutton').click(); }
    $('.modalPopup2').css('margin-top', pixelsFromTop+'px');
  });

  // create a dynamic click event using the number
  // Call the API when a button is pressed
  $('.modalPopup2 .closeVideo').bind('click', function() {
      $('.modalPopup2, #hiddenSection, .modalOverlay').toggleClass("visible invisible");
      $('.modalPopup2').css('margin-top', '0px');
  });

/* Declare the slider inside this thing.*/
  $(function() {
    window.mySwipe = Swipe(document.getElementById('slider'));    
  });

  /*next/previous code*/
  $('.sliderNav.slider1 .next').bind('click',function(){
    window.mySwipe.next();
  });  
  $('.sliderNav.slider1 .prev').bind('click',function(){  
    window.mySwipe.prev();
  });  


/*
 ***********************
 *
 *
 * Modal 3 Code
 *
 *
 *
 ***********************
*/
// Create and populate the popup video slider, it's contents, and intitiate the slider.

/* Modal Popup Code */

  // Toggle the open and close of the button.
  $("#slideShowBox2").on('click', function(){
    $('.modalPopup3, #hiddenSection, .modalOverlay').toggleClass("visible invisible");
    if ($('#mutebutton').hasClass('on')) {
      $('#mutebutton').click(); 
    }
    $('.modalPopup3').css('margin-top', pixelsFromTop+'px');
  });

  // create a dynamic click event using the number
  // Call the API when a button is pressed
  $('.modalPopup3 .closeVideo').bind('click', function() {
    $('.modalPopup3, #hiddenSection, .modalOverlay').toggleClass("visible invisible");
    $('.modalPopup3').css('margin-top', '0px');
  });

  /*declare the slider*/
  $(function() {
    window.mySwipe2 = Swipe(document.getElementById('slider2'));    
  });

  /*next/previous code*/
  $('.sliderNav.slider2 .next').bind('click',function(){
    window.mySwipe2.next();
  });  
  $('.sliderNav.slider2 .prev').bind('click',function(){  
    window.mySwipe2.prev();
  });  



/*
 ***********************
 *
 *
 *  Resize Code
 * 
 *
 *
 ***********************
*/


/* Resizes the video dynamically. */
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 1);
});

// The code to be executed upon completion of the event.
$(window).bind('resizeEnd', function() {
  
  // Resize Background
  // The background is square, so we can make it the height the same as the width too.
  var windowWidth = $(window).width();
  if ( windowWidth > 1280 ){
    $('#background-video-container').attr('width', 1280);
    $('#background-video-container').attr('height', (1280 * 0.85) + "px").css('height', (1280 * 0.85) + "px");
  } else {
    $('#background-video-container').attr('width', windowWidth);
    $('#background-video-container').attr('height', (windowWidth * 0.85) + "px").css('height', (windowWidth * 0.85) + "px");
  }
  // We need to limit the amount of crazy resizing that happens,
  // AFter 1280px we stop editing the size of this thing. 


  //Resize the modalPopup
  // .28125 is 9/16 of 50% of the browser windows width. This maintains a 16:9 aspect ratio of the videos and the
  // popup video. The 50% width is being set in css.
  $('#modalPopup1.modalPopup').attr('height', ($(window).width() * .28125) + "px").css('height',($(window).width() * .28125) + "px");
  /* .28125 */

  if ( windowWidth > 1280 ){
      $('section .container .sitetitle.desktop').css('height',(1280 * .32) + "px");
  } else {
    if ( windowWidth > 1180){
      $('section .container .sitetitle.desktop').css('height',($(window).width() * .32) + "px");
    } else {
      $('section .container .sitetitle.desktop').css('height',($(window).width() * .37) + "px");
    }
  }


  if ( windowWidth < 768){
    if ($('#mutebutton').hasClass('on')) {
      $('#mutebutton').click();
    }
  }
  $('#theWidth h2').text(windowWidth);
  //var body = $('body');
 // $('#theWidth h2').text(body.scrollTop());

});







/*
 ***********************
 *
 *
 *  Scroll Code
 * 
 *
 *
 ***********************
*/


/* Resizes the video dynamically. */
$(window).on('scroll', function() {
    if(this.ScrollTO) clearTimeout(this.ScrollTO);
    this.ScrollTO = setTimeout(function() {
        $(this).trigger('scrollEnd');
    }, 1);
});

// build some vars to play with.
var body = $('body');
var pixelsFromTop = body.scrollTop();
var pixels = 0;

var setPixels = function() {
  // why negative 40? because it makes the modals closer to the top.
  pixelsFromTop = body.scrollTop()-40;
}

// The code to be executed upon completion of the event.
$(window).bind('scrollEnd', function() {
  
  $('#thePixels h2').text(body.scrollTop() - 40);
  setPixels();

});