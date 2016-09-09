console.log("greatQ now get to work"),console.log("yes, its working"),console.log("yep, still working");


//google maps api
var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 44, lng: -98.5},
            zoom: 4
    });

//center map responsively
    var center;
        function calculateCenter() {
            center = map.getCenter();
            }
            google.maps.event.addDomListener(map, 'idle', function() {
                calculateCenter();
            });
            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(center);
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



}
