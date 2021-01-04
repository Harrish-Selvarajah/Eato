var ratingValue;
$(document).ready(function(){

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

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
     
      // Now highlight all the stars that's not after the current hovered star
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
    
    
    /* 2. Action to perform on click */
    $('#stars li').on('click', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');
      
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }
      
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
      }

      // JUST RESPONSE (Not needed)
      ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
      var msg = "";
      console.log(ratingValue, "rating value");
      if (ratingValue > 1) {
          msg = "Thanks! You rated this " + ratingValue + " stars.";
      }
      else {
          msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
      }
      responseMessage(msg);
    });
  });
  
  function writeUserData() {
    var database = firebase.database();
    console.log(ratingValue, "rating value")
    var bla = $('#reviewComment').val();
    firebase.database().ref('Vendors/' + 01).set({
      name: 'Melt House',
      reviews: [
        {
          review: bla,
          rating: ratingValue,
          date: "20/01/2021",
          userobj : {
            name: 'Harrish',
            profilepicLink: ''
          }
        }
      ]
    });
  }
  