;if (typeof jQuery === 'undefined') {throw new Error('Requires jQuery!');}

$(function() {

	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

google.maps.event.addDomListener(window, 'load', init);
var myLatlng = new google.maps.LatLng(50.052079, 14.532550);

function init() {

	// see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {

	// important
	zoom: 14,
	center: myLatlng,

	// generated: Snazzy Maps
	styles: [{"featureType":"landscape","stylers":[{"hue":"#F1FF00"},{"saturation":-27.4},{"lightness":9.4},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#0099FF"},{"saturation":-20},{"lightness":36.4},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#00FF4F"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFB300"},{"saturation":-38},{"lightness":11.2},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00B6FF"},{"saturation":4.2},{"lightness":-63.4},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#9FFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]}]
	};

	// using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	title:"KLIMAT SERVIS"
	});
}

});