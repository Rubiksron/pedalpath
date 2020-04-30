'use strict';

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 42.3726399, lng: -71.1096528}
  });
  var bikeLayer = new google.maps.BicyclingLayer();
  // var infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      // bikeLayer.setPosition(pos);
      // infoWindow.setContent('Location found.');
      bikeLayer.setMap(map);
      map.setCenter(pos);
      logPosition(pos);
    }, function() {
      handleLocationError(true, bikeLayer, map.getCenter());
    });
  }

}



// var map, infoWindow, pos;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 42.3726399, lng: -71.1096528},
//     zoom: 13
//   });
//   infoWindow = new google.maps.InfoWindow;

//   // Try HTML5 geolocation.
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       infoWindow.open(map);
//       map.setCenter(pos);
//       logPosition(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });
//   } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function logPosition(pos) {
  console.log('logPosisiton: ', pos);
}

