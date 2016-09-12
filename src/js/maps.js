
//google maps api
var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 44, lng: -98.5},
            zoom: 4
    });

    //center map responsively

        var centerMap;
            function calculateCenter() {
                centerMap = map.getCenter();
                }

                    google.maps.event.addDomListener(map, 'idle', function() {
                        calculateCenter();
                    });
                    google.maps.event.addDomListener(window, 'resize', function() {
                        map.setCenter(centerMap);

                });

    //map markers
    var chiPosition = {lat: 41.896059, lng: -87.682774};
    var jacPosition = {lat: 43.479084, lng: -110.767517};

    var chiMarker = new google.maps.Marker ({
        position: chiPosition,
        map: map,
        title: "Home"
    });

    var jacMarker = new google.maps.Marker ({
        position: jacPosition,
        map: map,
        title: "Painted Buffalo Inn"
    });

    //marker onclick events
    var mapChanged = map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.


/*    ///////seems to mess-up the map by making it flicker/////
        window.setTimeout(function() {
          map.panTo(chiMarker.getPosition());
        }, 3000);

        window.setTimeout(function() {
          map.panTo(jacMarker.getPosition());
        }, 3000);
*/

      chiMarker.addListener('click', function() {
        map.setZoom(14);
        map.setCenter(chiMarker.getPosition());

         });
      jacMarker.addListener('click', function() {
        map.setZoom(14);
        map.setCenter(jacMarker.getPosition());

        });


    });
}
