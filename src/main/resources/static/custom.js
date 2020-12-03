var map;
var icon = 'https://maps.google.com/mapfiles/kml/shapes/bus_maps.png';

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng) },
        zoom: 15,
        scrollwheel: false
    });
	
    for (i=0; i<busLocations.length; i++){

        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map, icon: icon, 
        });
        addInfoWindow(marker, "The #" + busLocations[i].VEHICLE);
        //var contentString = ("The #" + busLocations[i].VEHICLE);
        //var infowindow = new google.maps.InfoWindow({content: contentString,});
        //addInfoWindow(marker, contentString, infowindow);
        //google.maps.event.addListener(marker, 'click', function() {infowindow.open(map, marker)});
    }

    var marker2 = new google.maps.Marker({position: {lat: parseFloat(personLocation.lat), lng: parseFloat(personLocation.lng) }, map: map,});

function addInfoWindow(marker, content) {
    var infoWindow = new google.maps.InfoWindow({content: content});
    google.maps.event.addListener(marker, 'click', function () {infoWindow.open(map, marker)});
}  

/*function addMarkerListener(marker, infowindow) {

        marker.addListener('click', function(e) {
          infowindow.open(map,marker);
        });
}*/
}