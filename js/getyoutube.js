function appendResults(result) {
  var results = document.getElementById('results');
  results.appendChild(document.createElement('P'));
}

function videosListById(part, id) {
  console.log("GETVIDEOOOOOO");
  var request = gapi.client.youtube.videos.list(
      {id: id,
       part: part});
  request.then(function(response) {
    var items = response.result.items;
    console.log("getVIDEO response");
    console.log(items);
    $('#recommended').append("<div class='video-container'><span class='video-title'>" +items[0].snippet.title + "</span><a href='http://www.youtube.com/watch?v="+ id +"'><img class='video-thumb' src='" + items[0].snippet.thumbnails.high.url + "'></a><span class='video-date'>Uploaded: "+items[0].snippet.publishedAt.slice(0,10)+"</span><span class='video-date'>"+items[0].snippet.description.slice(0,200)+" ...</span></div>");
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
}

function makeRequest(part, location, locationRadius, q, type, placeobj) {
  console.log("REQUEST");
  console.log(placeobj);
  var request = gapi.client.youtube.search.list(
    {location: location,
      locationRadius: locationRadius,
      part: part,
      maxResults: 50,
      q: q,
      type: type});
  request.then(function(response) {
    var items = response.result.items;
    console.log("make request response");
    console.log(response);
    var recommended = placeobj.recommended;
    var recommended_html = "";
    for(key in recommended){
      videosListById('snippet', recommended[key].youtubeId);
      }
    if(placeobj.title){
      $('#content').html("<h1 class='placetitle'>"+placeobj.title+"</h1><span id='address'>"+placeobj.address+"</span><h3>Stor stark: "+placeobj.price+"kr</h3><span class='place-description'>"+placeobj.description+"</span><h3>Recommended videos: </h3>"+recommended_html);
    }else{
      $('#content').html("");
    }
      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
}


function init() {
  console.log("init");
  gapi.client.setApiKey('AIzaSyBOQUL9eAM1Qr_J_0UnYf5AGBRmgilwx0c');
  gapi.client.load('youtube', 'v3', function() {
    makeRequest('snippet', '59.330569, 18.068396', '10mi', 'kth', 'video','');
  })
}