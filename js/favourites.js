// Global Variables
var favVendorList = []
var demoUserId = "786"

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
  var rootRef = new Firebase("https://eato-69-default-rtdb.firebaseio.com/").ref();

  var ref = firebase.database().ref('users')
  
  ref.once('value', function(snapshot){
    var data = snapshot.val()
   // console.log(data)

    if (Object.keys(data).includes(demoUserId)){
            if(data[demoUserId]['favourites'] != undefined || data[demoUserId]['favourites'].length != 0){
                console.info("STARTING TO LOAD FAVOURITES LIST")
                favVendorList = data[demoUserId]['favourites'];
                loadFavVendorList();
            }else{
                console.log("USER HAS NOT FAVOURITED ANYTHING")
                
            }
    }else{
        console.error("USER NOT FOUND")
    }
},
function (error) {
    console.log("Error: " + error.code);
});


function loadFavVendorList() {
    
    $selectAllContainer = $('.select-all-container')
        console.log($selectAllContainer)
        console.log(favVendorList)
    favVendorList.forEach(favVendor => {
        
    });
}