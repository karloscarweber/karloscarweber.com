//script.js

$(document).ready(function(){
	//Awesome Widgets

	// checkbox clicker
	$('.answers li').click(function(){
		$(this).find('input').attr('selected', 'true');
	});

	$('.answers li').bind('click', function(event){
		
		var checked = $(this).find('input').prop('checked');
		
		if(checked == true){

			checked = false;
			$(this).find('input').prop('checked', false);
		} else {
		
			checked = true;
			$(this).find('input').prop('checked', true);
		}

	});

	var domains = ['hotmail.com', 'gmail.com', 'yahoo.com', 'fiftystudio.com', 'aol.com'];
	var topLevelDomains = ["com", "net", "org"];

	$('.email').on('blur', function() {
		$(this).mailcheck({
			domains: domains,
			topLevelDomains: topLevelDomains,
			suggested: function(element, suggestion) {
				// callback code
				
				$('.emailSuggestion').slideDown();
				$('.emailSuggestion').html("<p>Did you mean:<a href=\"#\">"+suggestion.full+"</a></p>");
				$('.emailSuggestion a').focus();
				$('.emailSuggestion a').on('click', function(){
					$('.emailSuggestion').slideUp();
					$('.email').prop('value', suggestion.full ).focus();
				});
			}
		})
	})

});