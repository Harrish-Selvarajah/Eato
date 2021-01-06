// var status = document.getElementById("vendor-feedback");
// status.style.display = "none";
var reviews = [];
var firebaseConfig = {
    apiKey: "AIzaSyCaz3jxfddaasAJLueb9lP9qfUblutlWHY",
    authDomain: "dfood-6b02c.firebaseapp.com",
    projectId: "dfood-6b02c",
    storageBucket: "dfood-6b02c.appspot.com",
    messagingSenderId: "414378093119",
    appId: "1:414378093119:web:db24e2caa44942abc8268a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var rootRef = new Firebase("https://eato-69-default-rtdb.firebaseio.com/").ref();
$(document).ready(function(){
  // firebase.database().ref('Vendors/'+ 1).child('reviews').once('value', (snapshot) => {
  //   const data = snapshot.val();
  //   console.log(data);
  //   reviews.push(data);
  //   console.log(reviews, "reviews");
  // });
    var foodItemID = '-MQIVU18l9mKwEdlWQ3I';
  firebase.database().ref('Vendors/'+ 1).child('foodItem/'+ foodItemID).child('reviews').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
    //   var childData = childSnapshot.val();
		  
      //   console.log(childData);
        // reviews.push(childData);
      var item = {
          key: childSnapshot.key,
          date: childData.date,
          rating: childData.rating,
          review: childData.review,
          reviewResponse: childData.reviewResponse,
          userObj : {
              name: childData.userObj.name
            //   profilepicLink: childData.userobj.profilepicLink
          }
      }
      reviews.push(item);
    })
    console.log(reviews);
    repeat();
  })
});

function ShowVendorReply(id) {
  console.log('here');
  // $.mobile.changePage( "#vendor-feedback" );
  var status = document.getElementById(`vendor-feedback-${id}`);
  var status1 = document.getElementById("upArrow");
  var status2 = document.getElementById("downArrow");
  console.log(status, "status");
  status.style.display = "flex";
  status1.style.display = "flex";
  status2.style.display = "none";
}

function hideVendorReply(id) {
  var status = document.getElementById(`vendor-feedback-${id}`);
  var status1 = document.getElementById("upArrow");
  var status2 = document.getElementById("downArrow");
  console.log(status, "status");
  status.style.display = "none";
  status1.style.display = "none";
  status2.style.display = "flex";
}

function repeat() {
  var arrayXYZ = [{
    name: "ABC"
  },
  { name: "XYZ" }];
  var renderHtml = "";
  // debugger;
  if (reviews.length > 0) {
    reviews.forEach(function (item) {
      renderHtml += `<div class="card">
                    <div id="customer-feedback">
                        <div class="ui-grid-a">
                            <div class="ui-block-a">
                                <div style="height: 15px;"></div>
                            </div>
                            <div class="ui-block-b">
                                <div style="float: right; padding-right: 10px;
                                padding-top: 5px;
                                padding-left: 10px;">
                                    <!-- <a id='btnShowSignUp' data-role="button" href='#' onclick="ShowSignUp();">Show</a> -->
                                    <!-- <a href="#" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all">No text</a> -->
                                    <!-- <img src="../assets/downArrow.png" style="height: 10px;"> -->
                                    <!-- <a id='btnShowSignUp' data-role="button" href='#' onclick="ShowSignUp();">Sign Up</a> -->
                                    <a id='downArrow' href="#" data-shadow="false" data-theme="none"
                                        onclick="ShowVendorReply('${item.key}');">
                                        <img src="../assets/downArrow.png" style="height: 15px;">
                                    </a>
                                    <a id='upArrow' href="#" data-shadow="false" data-theme="none"
                                        onclick="hideVendorReply('${item.key}');" style="display: none;">
                                        <img src="../assets/upArrow.png" style="height: 15px;">
                                    </a>
                                    <!-- <div id="custom-border-radius">
                                            <a href="#" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all">No
                                            text</a>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="ui-grid-b">
                            <div class="ui-block-a">
                                <div class="ui-bar ui-bar">
                                    <div class="outer-circle">
                                        <div class="circular_image">
                                            <img src="../assets/harrish.jpg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h5>
                               ${item.userObj.name}
                            </h5>
                            <div class="ui-grid-a">
                                <div class="ui-block-a">
                                    <div>
                                    <span class="stars-container stars-${item.rating}">★★★★★</span>
                                    </div>
                                </div>
                                <div class="ui-block-b">
                                    <div class="date">
                                        ${item.date}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="infoText">${item.review}</p>
                            </div>
                        </div>

                    </div>
                    <div page-role="page" id="vendor-feedback-${item.key}" style="display: none;">
                        <div class="feedback">
                            <div class="feedback-cont">
                                <p class="infoText" style="background-color: orange;">
                                    ${item.reviewResponse}</p>
                            </div>
                        </div>
                    </div>
                </div>`
    })
    $('#repeat').append(renderHtml);
  }
}