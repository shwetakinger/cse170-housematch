'use strict';
$(document).ready(function() {
	$(".favorite").click(favoriteListener);
})

function favoriteListener(e){
	e.preventDefault();
	console.log('in favorite!');
	$(this).find("i").toggleClass("far fas selected-star border-star");
	if($(this).find("i").hasClass("selected-star")){
		var roomLocation = $(".room-heading").text();
		var roomAddress = $("#address").text();
		console.log(roomLocation, roomAddress);
		var jsonData = JSON.stringify({location: roomLocation, address: roomAddress});
		$.ajax({
			url: '/addFavorite',
			contentType: 'application/json',
			type: 'POST',
			data: jsonData
		})
		alert("Added room to favorite rooms!");
	}else{
		var roomLocation = $(".room-heading").text();
		var roomAddress = $("#address").text();
		console.log(roomLocation, roomAddress);
		var jsonData = JSON.stringify({location: roomLocation, address: roomAddress});
		$.ajax({
			url: '/removeFavorite',
			contentType: 'application/json',
			type: 'POST',
			data: jsonData
		})
		alert("Removed room from favorite rooms!");
	}
	
}