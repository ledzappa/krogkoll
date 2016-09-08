window.scrollTo(0,1);
var map;
var stockholm = {lat: 59.335540, lng: 18.079337};
var zoom = 13;
var marker;

//initialize the map and set the center to stockholm
function initialize() {
  var mapDiv = document.getElementById('googleMap');
  var myOptions = {
    zoom: zoom,
    center: stockholm,
    disableDefaultUI:true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(mapDiv, myOptions); 

  //intitialize all the locations from locations.js
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: locations[i].position,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      icon: locations[i].marker
    });

    //click event for the different markers
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             getInfo(marker,locations[i]);
             console.log("slideeee");
            $('html,body').animate({
             scrollTop: $("#content").offset().top},
            'slow');
        }
    })(marker, i));
  }

  usermarker = new google.maps.Marker({
    position: stockholm,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    icon: 'pics/user.png'
  });

  usermarker.addListener('mousedown', function() {
    toggleBounce(usermarker);
  });
  usermarker.addListener('mouseup', function() {
    getVideos(usermarker,'');
  });

}


var rad = function(x) {
  return x * Math.PI / 180;
};

//function to calculate the distance between two locations
function getDistance(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};

//gets the users location and outputs a list with places nearby
function getUserLocation(){
  console.log("get user location");
  $('#content').html("<h3>Hak i närheten!</h3>");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
      usermarker.setPosition(pos);
      $('html,body').animate({
        scrollTop: $("#content").offset().top},'slow');
      for(key in locations){
        var distance = Math.floor(getDistance(pos, locations[key].position));
        if(distance < 5000){
          $('#content').append("<div class='nearbywrapper'><div class='nearbyimage' style='background-image:url("+locations[key].icon+");'></div><div class='nearbyinfo'><span class='nearbyinfotitle'>"+locations[key].title+" - "+distance+"m</span><span class='nearbyinfoprice'>Stor stark: "+locations[key].price+"kr</span></div></div>");
        }
      }
    }, function() {
      var distance = getDistance(locations[0].position, locations[1].position);
      $('#content').append("<div class='nearbywrapper'><div class='nearbyimage' style='background-image:url();'></div><div class='nearbyinfo'><span>Pub anchor</span></div></div>");

      var infoWindow = new google.maps.InfoWindow({map: map});
      handleLocationError(true, infoWindow, stockholm);
    });
  } 
  else {
    $('#content').html("<h3>Kunde inte hämta position! Kontrollera att GPS är på!</h3>");
    var infoWindow = new google.maps.InfoWindow({map: map});
    //show error message if we can't get the user location
    handleLocationError(false, infoWindow, stockholm);
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  map.setCenter(stockholm);
  map.setZoom(13);
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Turn on geolocation!' :
                        'Error: Your browser doesn\'t support geolocation.');

}

function toggleBounce(marker) {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    var Lat = marker.getPosition().lat(); 
    var Lng = marker.getPosition().lng();
    
  }
}

//output info about the different locations
//triggered from the marker click-event
//"placeobj" is an object in location.js
function getInfo(marker,placeobj) {
  console.log("getInfo: "+ placeobj.title);
  $('#content').html("<div id='place-top'><span class='placetitle'>"+placeobj.title+"</span><p class='placeaddress'>"+placeobj.address+"</p><p class='placetub'> (T: "+placeobj.tunnelbana+")</p><div class='placerating'>"+placeobj.rating+"/5</div></div><span class='placeprice'>Stor stark: "+placeobj.price+"kr</span><span class='placedescription'>"+placeobj.description+"</span>");
  for(key in placeobj.images){
    $('#content').append("<img class='placeimg' src='"+placeobj.images[key]+"'>");
  }
  map.setCenter(placeobj.position);
}

//click event when clicking the filter-button
$('#filter button').click(function() {
    $('#content').html("");
    var beerprice = $('#beerprice').val();
      for(key in locations){
        var distance = Math.floor(getDistance(pos, locations[key].position));
        if(locations[key].price <= beerprice){
          $('#content').append("<div class='nearbywrapper'><div class='nearbyimage' style='background-image:url("+locations[key].icon+");'></div><div class='nearbyinfo'><span class='nearbyinfotitle'>"+locations[key].title+" - "+distance+"m</span><span class='nearbyinfoprice'>Stor stark: "+locations[key].price+"</span></div></div>");
        }
      }
    // TODO: insert whatever you want to do with $(this) here
});



google.maps.event.addDomListener(window, 'load', initialize);