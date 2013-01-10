/*************************************************************************/
// Nav functions
/*************************************************************************/

// function open_nav()
// {
//   if ( !$('header nav').hasClass('open') )
//   {
    
//     if ( !$('a.bt-nav-close').length )
//     {
//       $('.wrapper-nav-ul').append('<a href="" class="bt-nav-close"><i class="icon-cancel-circle"></i></a>');
//     }
      
  
//     $('.body-overlay').css({'height' : $('body').height() }).addClass('show');
//     $('header nav').css({'height' : $('body').height() }).addClass('open');
//   }
  
// }

// function close_nav()
// {
//   if ( $('header nav').hasClass('open') )
//   {
//     $('.body-overlay').removeClass('show').css({'height' : 'auto' });
//     $('header nav').removeClass('open').css({'height' : 'auto' });
//   }
// }

function open_nav()
{
  if ( !$('.header .menu').hasClass('open') )
  {
    $('.menu').addClass('open');
    $('.body-overlay').css({'height' : $('body').height() }).addClass('show');
  }
}

function close_nav()
{
  if ( $('.menu').hasClass('open') )
  {
    console.log("hamburgerClose");
    $('.menu').removeClass('open');
    $('.body-overlay').removeClass('show').css({'height' : 'auto' });
  }
}


/*************************************************************************/
// End menu functions
/*************************************************************************/
  /*************************************************************************/
  // Begin Mobile menu button
  /*************************************************************************/
  
    $('a.hamburgerClose').click(function() {
      close_nav();
    });
    
    /* Add click action to button */
    $('a.hamburgerOpen').click(function() {
      console.log("hamburgerOpen");
      open_nav();
    });
  
  /*************************************************************************/
  // End Mobile menu button
  /*************************************************************************/