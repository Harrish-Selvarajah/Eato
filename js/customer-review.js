// var status = document.getElementById("vendor-feedback");
// status.style.display = "none";
var reviews = [];
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
$(document).ready(function () {
    // firebase.database().ref('Vendors/'+ 1).child('reviews').once('value', (snapshot) => {
    //   const data = snapshot.val();
    //   reviews.push(data);
    // });

    firebase.database().ref('Vendors/' + 1).child('reviews').once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            //   var childData = childSnapshot.val();

            //   reviews.push(childData);
            var item = {
                key: childSnapshot.key,
                date: childData.date,
                rating: childData.rating,
                review: childData.review,
                reviewResponse: childData.reviewResponse,
                userObj: {
                    name: childData.userobj.name,
                    profilepicLink: childData.userobj.profilepicLink
                }
            }
            reviews.push(item);
        })
        renderReviews();
    })
});

function ShowVendorReply(id) {
    // $.mobile.changePage( "#vendor-feedback" );
    var status = document.getElementById(`vendor-feedback-${id}`);
    var status1 = document.getElementById(`upArrow-${id}`);
    var status2 = document.getElementById(`downArrow-${id}`);
    status.style.display = "block";
    status1.style.display = "flex";
    status2.style.display = "none";
}

function hideVendorReply(id) {
    var status = document.getElementById(`vendor-feedback-${id}`);
    var status1 = document.getElementById(`upArrow-${id}`);
    var status2 = document.getElementById(`downArrow-${id}`);
    status.style.display = "none";
    status1.style.display = "none";
    status2.style.display = "flex";
}

function renderReviews() {
    $(".se-pre-con").fadeOut("fast");
    var renderHtml = "";
    if (reviews.length > 0) {
        reviews.forEach(function (item) {
            renderHtml += `<div class="review-item cards">
                    <div class="review-details d-flex">
                        <div class="profile-pic"></div>
                        <div>
                            <p class="secondaryText">${item.userObj.name}</p>
                            <div>
                                <span class="stars-container stars-${item.rating}">★★★★★</span>
                                <span class="date">${item.date}</span>
                            </div>
                        </div>
                        <div id='downArrow-${item.key}' onclick="ShowVendorReply('${item.key}');">
                            <i class="arrow arrow-down"></i>
                        </div>
                        <div id='upArrow-${item.key}' onclick="hideVendorReply('${item.key}');">
                            <i class="arrow arrow-up"></i>
                        </div>
                    </div>
                    <div class="review">
                        <p class="secondaryText">${item.review}</p>
                    </div>
                    <div class="vendor-response" id="vendor-feedback-${item.key}" style="display: none;">
                        <h5>Melt House</h5>
                        <p class="secondaryText">${item.reviewResponse}</p>
                    </div>
                </div>`
        })
        $('#reviews').append(renderHtml);
    }
}