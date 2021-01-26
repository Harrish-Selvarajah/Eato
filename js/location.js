$(document).ready(function () {
  savedLocation = JSON.parse(sessionStorage.getItem('savedLocation'));

  if (savedLocation == null) {
    savedLocation = [];
    sessionStorage.setItem('savedLocation', JSON.stringify(savedLocation));
  } else {
    renderRadioButton();
    $('input:radio[name=radio]').change(function () {
      sessionStorage.setItem('location', this.value);
    });
  }
});

let map, infoWindow, userLocation;

function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 6.927079, lng: 79.861244 },
    zoom: 15,
    mapTypeId: "roadmap",
    disableDefaultUI: true,
  });

  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      // const icon = {
      //   url: place.icon,
      //   size: new google.maps.Size(71, 71),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(17, 34),
      //   scaledSize: new google.maps.Size(25, 25),
      // };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          // icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      userLocation = place.name;
      savedLocation = JSON.parse(sessionStorage.getItem('savedLocation'));

      savedLocation.push(userLocation);
      sessionStorage.setItem('location', userLocation);
      sessionStorage.setItem('savedLocation', JSON.stringify(savedLocation));
      renderRadioButton();

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });

  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          codeLatLng(position.coords.latitude, position.coords.longitude);
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function codeLatLng(lat, lng) {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({ 'latLng': latlng }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        //find country name
        for (var i = 0; i < results[0].address_components.length; i++) {
          for (var b = 0; b < results[0].address_components[i].types.length; b++) {
            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
            if (results[0].address_components[i].types[b] == "establishment") {
              //this is the object you are looking for
              city = results[0].address_components[i];
              break;
            }
          }
        }
        //city data
        // alert(city.short_name + " " + city.long_name)
        savedLocation = JSON.parse(sessionStorage.getItem('savedLocation'));
        savedLocation.push(city.short_name);
        sessionStorage.setItem('location', city.short_name);
        sessionStorage.setItem('savedLocation', JSON.stringify(savedLocation));
        // savedLocation.push(userLocation);
        renderRadioButton();

      } else {
        alert("No results found");
      }
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

function saveLocation() {
  if (userLocation !== "") {
    savedLocation.push(userLocation);
  }
}

function renderRadioButton() {
  currentLocation = sessionStorage.getItem('location')
  var renderHtml = "";
  $(".selected-location").empty();
  $(".divider").remove();
  savedLocation.forEach(function (x) {
    renderHtml += `<label class="selected-location">${x}
    <input type="radio" name="radio" id="selected-location-${x}" value='${x}'>
    <span class="checkmark"></span>
  </label>
  <hr class="divider" style="margin-top: 20px;">`
  })
  $('#render-radio-button').append(renderHtml);
  document.getElementById(`selected-location-${currentLocation}`).checked = true;
}