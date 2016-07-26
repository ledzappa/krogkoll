//api: AIzaSyBOQUL9eAM1Qr_J_0UnYf5AGBRmgilwx0c

function searchListByLocation(part, location, locationRadius, q, type) {
	gapi.client.setApiKey("AIzaSyBOQUL9eAM1Qr_J_0UnYf5AGBRmgilwx0c");
  	var request = gapi.client.youtube.search.list(
    	{location: location,
    	locationRadius: locationRadius,
    	part: part,
    	q: q,
    	type: type});
  	executeRequest(request);
}

searchListByLocation('snippet', '21.5922529,-158.1147114', '10mi', 'surfing', 'video');