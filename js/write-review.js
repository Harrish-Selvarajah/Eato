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
console.log(rootRef);
$(document).ready(function(){
  vendorId = getUrlParameter('vendorID');
  console.log(vendorId);
    $('#stars li').on('mouseover', function(){
      var onStar = parseInt($(this).data('value'), 10); 
      $(this).parent().children('li.star').each(function(e){
        if (e < onStar) {
          $(this).addClass('hover');
        }
        else {
          $(this).removeClass('hover');
        }
      });
      
    }).on('mouseout', function(){
      $(this).parent().children('li.star').each(function(e){
        $(this).removeClass('hover');
      });
    });
    
    $('#stars li').on('click', function(){
      var onStar = parseInt($(this).data('value'), 10);
      var stars = $(this).parent().children('li.star');
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
      }
      ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
      var msg = "";
      console.log(ratingValue, "rating value");
      if (ratingValue > 1) {
          msg = "Thanks! You rated this " + ratingValue + " stars.";
      }
      else {
          msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
      }
    });
  });
  
  function writeUserData() {
    var userObj = sessionStorage.getItem('userobj');
    var bla = $('#reviewComment').val();
    firebase.database().ref('Vendors/'+ vendorId).child('reviews').push({
      // name: 'Melt House',
          review: bla,
          reviewResponse: '',
          rating: ratingValue,
          date: "26/10/2020",
          userobj : {
            name: JSON.parse(userObj).name,
            profilepicLink: ''
          }
    }, (error) => {
      if (error) {
        console.log(error, "Push to firebase failed!")
      } else {
        console.log("pushed to firebase succesfully!");
      }
    });
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