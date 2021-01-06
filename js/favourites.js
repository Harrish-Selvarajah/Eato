// Global Variables
var allFavVendorList = []
var favVendorList = []
var selectedFavList = []
var demoUserId = "-MQN7UYipYUXF5l7caW6"
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

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
 // var rootRef = new Firebase("https://eato-69-default-rtdb.firebaseio.com/").ref();

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

    favVendorList.forEach((favVendor,idx) => {
        poiContent = poiContent.concat(`<!-- Start of POI -->
        <div class="poi-container" id="poi-container">
            <div class="image-container">
                <div class="heart-container"> 
                    <i class=" material-icons icon-fav">favorite</i>
                </div>
            </div>

            <div class="info-container">
                <div class= "info-line-1">
                    <h2>${favVendor.vendorName}</h2>
                    <input type="checkbox" id="checkbox-${favVendor.vendorID}" onClick="addCheckBoxClick(${favVendor.vendorID},${idx})" class="checkbox"/>
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
    selectedFavList = favVendorList;
    activeShareButton();
    }else{

        console.log("Un-click")

        $('.poi-container').find(':checkbox').each(function(element){
            $(this).prop('checked', false);
         });

    // Unselected all 
    //   selectedFavList = favVendorList.filter(function(element){
    //       return !selectedFavList.includes(element)
    //   })
    selectedFavList = []

      disableSharebutton();
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

    $('#share-btn').click(function (){  
    
        content = "<html> <body> <ul>"
        selectedFavList.forEach(function(fav){
            
            content = content.concat(`<li> Vendor Name : ${fav.vendorName} Rating : ${fav.Rating} </li>`)
        })
        content = content.concat(`</ul> </body> </html>`)

        var email = $('#email-input').val()
        
        if(validateEmail(email)){
            $("#error-message").css("display", "none");
            SendEmail(email, content)
        }else{
            console.error("Invalid Email")
            $("#error-message").css("display", "block");;
        }
    });

    // Adding Item to select FavList
    // $('.poi-container .checkbox').each(function(element){
    //     console.log(element)
    //     element.click(function(e){
    //       console.log(e.target.value)
    //       console.log("Errrrrr")
    //     });
    // });

    // $('.poi-container .checkbox').click(function(e){
    //     console.log("sdsdfsdfsdfsdfsdfsdf")
    // })



  });


  function SendEmail(email , message){
    console.log(message)
    console.log(email)
    Email.send({
    Host : "smtp.gmail.com",
    Username : "eato.corp@gmail.com",
    Password : "Qwerty@12345$",
    To : email,
    From : "eato.corp@gmail.com",
    Subject : "List of Favourites",
    Body : content
}).then(
    message => alert(message)
);
}

function addCheckBoxClick(id,idx){

   if($(`#checkbox-${id}`).is(":checked") == true){
     
    var selectedItem = favVendorList.find(function(element){
         return element.vendorID == id;
     })

    selectedFavList = selectedFavList.concat(selectedItem)
    console.log(selectedItem)
    console.log(selectedFavList)

    // Make Share Actives
     activeShareButton();
        
   }else{
    console.log("Unchecked")
    selectedFavList = selectedFavList.filter(function(element){
        return id != element.vendorID;
    })
    console.log(selectedFavList);
    
    if(selectedFavList.length == 0){
        console.log("Wicked")
        disableSharebutton();
    }
   }
}

function activeShareButton(){
console.log("act")
  $('#share-button-container').attr('style', 'background-color: #FD6921 !important');
}

function disableSharebutton(){
   $('#share-button-container').attr('style', 'background-color: #707070 !important');
}

function validateEmail(email){
   if(emailRegex.test($.trim(email))){
       // console.log("valid email")
       return true;

   }else{
       //console.log("invalid email")
        return false;
   }
}