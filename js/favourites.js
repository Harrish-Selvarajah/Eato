// Global Variables
var allFavVendorList = []
var favVendorList = []
var selectedFavList = []
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
                console.log("STARTING TO LOAD FAVOURITES LIST")
                favVendorList = data[demoUserId]['favourites'];
                allFavVendorList = favVendorList;
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

    $flexContainer = $('.flex-container')
    $(".flex-container .poi-container").remove();

    var poiContent = ""

    favVendorList.forEach(favVendor => {
        poiContent = poiContent.concat(`<!-- Start of POI -->
        <div class="poi-container" id="vendor-${favVendor.vendorID}">
            <div class="image-container">
                <div class="heart-container"> 
                    <i class=" material-icons icon-fav">favorite</i>
                </div>
            </div>

            <div class="info-container">
                <div class= "info-line-1">
                    <h2>${favVendor.vendorName}</h2>
                    <input type="checkbox" id="" class="checkbox"/>
                </div>
                <div class= "info-line-2">
                    <i class=" material-icons icon-star">grade</i>
                    <h4>${favVendor.Rating}</h4>
                </div>
            </div>    
        </div>
        <!-- End of POI -->`)       
    });
    
   $flexContainer.append(poiContent)
}


$(document).ready(function(){

    // Close PopUp doesnt work 
    $('#close-click').click(function(){
        console.log("Close")
         $("#popupLogin-popup").hide()
    })

    // Open -But doesnt work 
    $(".share-button-container").click(function () { 
        console.log("Open")
        $("#popupLogin-popup").show();
        
    });
     
   $("#select-all").click(function () { 
       
    if ($('#select-all').is(":checked")) {
        
        console.log("Click")
        $('.poi-container').find(':checkbox').each(function(element){
            $(this).prop('checked', true);
         });

    // Add all favourites in the screen to selected favourites
    selectedFavList.concat(favVendorList);

    }else{

        console.log("Un-click")

        $('.poi-container').find(':checkbox').each(function(element){
            $(this).prop('checked', false);
         });

    // Unselected all 
      selectedFavList = favVendorList.filter(function(element){
          return !selectedFavList.includes(element)
      })
    } 

    console.log(selectedFavList)
   });


   //Searching Feature 
   $("#search-bar").change(function (e) { 
      console.log(e.target.value)

      favVendorList = allFavVendorList.filter(function (element) {  
          console.log(element.vendorName)
        return element.vendorName.toUpperCase().includes(e.target.value.toUpperCase());
      })
      console.log(favVendorList)
      loadFavVendorList();
       
   });
  });