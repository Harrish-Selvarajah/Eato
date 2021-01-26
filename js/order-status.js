$(document).ready(function () {
    var name = JSON.parse(sessionStorage.getItem('userobj')).name;
    $('#name').text(name);
    setTimeout(function () { $(".se-pre-con").fadeOut("fast"); }, 1500);
})

let map;

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 6.904333, lng: 79.867488 },
        zoom: 15,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
    });
    directionsRenderer.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);
}

async function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
            origin: {
                query: "302 Galle Rd, Colombo 00400, Sri Lanka",
            },
            destination: {
                query: "57 Ramakrishna Rd, Colombo 00600, Sri Lanka",
            },
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}