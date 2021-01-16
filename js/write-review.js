var ratingValue;
var vendorId = 0;
var firebaseConfig = {
  apiKey: "AIzaSyBDwiPGqXFeormDpnISyavzwju3BnCUPTo",
  authDomain: "eato-69.firebaseapp.com",
  databaseURL: "https://eato-69-default-rtdb.firebaseio.com",
  projectId: "eato-69",
  storageBucket: "eato-69.appspot.com",
  messagingSenderId: "274943061802",
  appId: "1:274943061802:web:9916cf1cb84f515bdab853"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var Key = firebase.database().ref().child('movies').push().key;
var rootRef = new Firebase("https://eato-69-default-rtdb.firebaseio.com/").ref();
$(document).ready(function () {
  vendorId = getUrlParameter('vendorID');
  $('#stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10);
    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });

  $('#stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10);
    var stars = $(this).parent().children('li.star');
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);

  });
});

function writeUserData() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  var userObj = sessionStorage.getItem('userobj');
  var bla = $('#reviewComment').val();
  if (ratingValue === "" || ratingValue === NaN || ratingValue === undefined || ratingValue === null) {
    toastr.warning('Please Select Rating', 'Warning');
  }
  else if (bla === "") {
    toastr.warning('Please Write A Review', 'Warning');
  }
  else {
    firebase.database().ref('Vendors/' + vendorId).child('reviews').push({
      // name: 'Melt House',
      review: bla,
      reviewResponse: '',
      rating: ratingValue * 10,
      date: today,
      userobj: {
        name: JSON.parse(userObj).name,
        profilepicLink: ''
      }
    }, (error) => {
      if (error) {
        toastr.error('Unable To Send Review', 'Error');
      } else {
        toastr.success('Review Sent', 'Success');
        setTimeout(function () { document.location.href = "./orders.html"; }, 500);
      }
    });
  }
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};