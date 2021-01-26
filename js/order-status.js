$(document).ready(function () {
    var name = JSON.parse(sessionStorage.getItem('userobj')).name;
    $('#name').text(name);
    setTimeout(function () { $(".se-pre-con").fadeOut("fast"); }, 1500);
})

let map;

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 6.904333, lng: 79.867488 },
        zoom: 15,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
    });
    var directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        suppressMarkers: true,
        polylineOptions: {
            strokeColor: "#FD6921"
        }
    });

    calculateAndDisplayRoute(directionsService, directionsRenderer);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    // var start_icon_path = `file:///../assets/start_location.png`
    var currentLocation = sessionStorage.getItem('selectedAddress')
    if (currentLocation === "undefined" || currentLocation === undefined || currentLocation === "" || currentLocation === null) {
        currentLocation = "57 Ramakrishna Rd, Colombo 00600";
    }
    var icons = {
        start: new google.maps.MarkerImage(
            // URL
            'https://firebasestorage.googleapis.com/v0/b/eato-69.appspot.com/o/48_location.png?alt=media&token=e1026efd-8709-47da-a9a9-2b38ac8449ea',
            // (width,height)
            new google.maps.Size(48, 48),
            // The origin point (x,y)
            new google.maps.Point(0, 0),
            // The anchor point (x,y)
            new google.maps.Point(15, 20)
        ),
        end: new google.maps.MarkerImage(
            // URL
            'https://firebasestorage.googleapis.com/v0/b/eato-69.appspot.com/o/48_bike.png?alt=media&token=11ffa662-93a7-4de4-8c28-0fc5447e2ded',
            // (width,height)
            new google.maps.Size(48, 48),
            // The origin point (x,y)
            new google.maps.Point(0, 0),
            // The anchor point (x,y)
            new google.maps.Point(22, 32)
        )
    };
    directionsService.route(
        {
            origin: {
                query: "124 Bauddhaloka Mawatha, Colombo 00400",
            },
            destination: {
                query: currentLocation,
            },
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
                var leg = response.routes[0].legs[0];
                makeMarker(leg.start_location, icons.start, "title");
                makeMarker(leg.end_location, icons.end, 'title');
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}

function makeMarker(position, icon, title) {
    new google.maps.Marker({
        position: position,
        map: map,
        icon: icon,
        title: title
    });
}