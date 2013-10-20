function startSubtleScroll() {

	var fps = 12;
	var pixels = 1;
	var direction = "up";
	var offset = 350;

	setInterval(function() {

		$('#background').css({"top": "-"+offset+"px"});
		if(direction == "up"){
			offset -= pixels;
			if(offset <= 0){
				direction = "down";
			}
		} else {
			offset += pixels;
			if(offset >= 350){
				direction = "up";
			}
		}
		//console.log(direction + " " + offset );
	}, 1000.0 / fps);
}
$(document).ready(function(){
	startSubtleScroll();
});