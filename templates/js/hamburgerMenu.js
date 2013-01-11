/*************************************************************************/
// Nav functions
/*************************************************************************/


function open_nav()
{
  if ( !$('.header .menu').hasClass('open') )
  {
    $('.menu').addClass('open');
    $('.body-overlay').css({'height' : $('window').height() }).addClass('show');
    $('.grater-container').addClass('hidden');
        $('body').addClass('overlayed');
  }
}

function close_nav()
{
  if ( $('.menu').hasClass('open') )
  {
    console.log("hamburgerClose");
    $('.menu').removeClass('open');
    $('.body-overlay').removeClass('show').css({'height' : 'auto' });
    $('.grater-container').removeClass('hidden');
    $('body').removeClass('overlayed');
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