var reviews = [];
var currentID;
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
function openPopup() {
    location.href = "./popup.html"
}

$(document).ready(function() {
	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
	getReviews();
});

function getReviews() {
	reviews = [];
	firebase.database().ref('Vendors/'+1).child('reviews').once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			// console.log(childSnapshot);
		  var childData = childSnapshot.val();
		  
		//   console.log(childData);
		//   reviews.push(childData);
		var item = {
			key: childSnapshot.key,
			date: childData.date,
			rating: childData.rating,
			review: childData.review,
			reviewResponse: childData.reviewResponse.response,
			userObj : {
				name: childData.userobj.name,
				profilepicLink: childData.userobj.profilepicLink
			}
		}
		reviews.push(item);
		})
		console.log(reviews);
		repeat();
	  })
}

function repeat() {
	var renderHtml = "";
	if (reviews.length > 0) {
		reviews.forEach(function (item) {
			renderHtml += ` <div class="container">
			<div class="card review-card">
				<div class="left-container">
					<div class="outer-circle">
						<div class="circular_image">
							<img src="../assets/harrish.jpg">
						</div>
					</div>
				</div>
				<div class="right-container">
					<div style="width: 100%;">
						<div>
							<h5>
								${item.userObj.name}
							</h5>
							<div class="ui-grid-a">
								<div class="ui-block-a" style="width: 80px;">
									<div style="width:74px">
										<div class="ui-grid-d">
										<span class="stars-container stars-${item.rating}">★★★★★</span>
										</div>
									</div>
								</div>
								<div class="ui-block-b date-container">
									<div class="date">
										${item.date}
									</div>
								</div>
							</div>
							<div class="infoText">
								${item.review}
								
							</div>
						</div>
					   
						<div class="reply-div">
							<a onclick = "reply('${item.key}')" href="#popupLogin" data-rel="popup" data-position-to="window"
								data-transition="pop">Reply</a>
							
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
			</div>
		</div>`
		})
		$('#repeat').append(renderHtml);
	}

	// reviews.forEach(function(item) {
	// 	var status = document.getElementById(`vendor-feedback-${item.key}`);
	// 	if (item.reviewResponse == "") {
	// 		status.style.display = "none";
	// 	} else {
	// 		status.style.display = "flex";
	// 	}
	// })
}

function reply(id) {
	console.log(id, "reply funciton");
	currentID = id;
}

function submitResponse() {
	var response = $('#reviewReply').val();
	console.log(currentID, "currentID")
	firebase.database().ref('Vendors/'+ 1).child('reviews/' + currentID).child('reviewResponse').update({
		// name: 'Melt House',
			response
			}
	  , (error) => {
		if (error) {
		  console.log("Push to firebase failed!");
		
		} else {
		  console.log("pushed to firebase succesfully!");
		  getReviews();
		  showResponse(currentID);
		// $("#mydiv").load(location.href + " #mydiv");
		}
	  });
}

function showResponse(id) {
	var status = document.getElementById(`vendor-feedback-${id}`);
	status.style.display = "flex";
}