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

$(document).ready(function () {
	console.log(sessionStorage);
	var showChar = 100;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function () {
		var content = $(this).html();

		if (content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar - 1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function () {
		if ($(this).hasClass("less")) {
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
	// var fooditemID = getUrlParameter('fooditemID');	
});

$('#close-btn').click(function (e) { 
	$('#popup-modal').popup('close')
});



function getReviews() {
	reviews = [];
	// debugger
	var vendorID = JSON.parse(sessionStorage.getItem('vendorObj')).id;
	firebase.database().ref('Vendors/' + vendorID).child('reviews').once('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			var childData = childSnapshot.val();
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
		renderReview();
	})
}



function renderReview() {
	$(".se-pre-con").fadeOut("fast");
	var renderHtml = "";
	$(".review-item").remove();
	if (reviews.length > 0) {
		reviews.forEach(function (item) {
			console.log(item);
			renderHtml += `<div class="review-item cards">
                    <div class="review-details">
                        <div class="profile-pic-container">
                            <div class="profile-pic"></div>
                        </div>
                        <div>
                            <p class="primaryText">${item.userObj.name}</p>
                            <div>
                                <span class="stars-container stars-${item.rating}">★★★★★</span>
                                <span class="date">${item.date}</span>
                            </div>
                            <div class="review">
                                <p class="secondaryText">${item.review}</p>
                            </div>
                        </div>
                    </div>
                    <div class="reply" id="reply-div-${item.key}">
					<a onclick="reply('${item.key}')" href="#popup-modal" id="reply-btn" data-rel="popup" data-position-to="window"
					data-transition="pop">Reply</a>
					</div>
					<div class="vendor-response" id="vendor-feedback-${item.key}" style="display: none;">
                        <p class="secondaryText">${item.reviewResponse}</p>
                    </div>
				</div>`
				
				// $(`#reply-btn-${item.key}`).click(function () {
				// 	console.log("ebifebwfb")
				// 	$('#popup-modal').popup('open')
				// })
			
			
		})
		$('#reviews').append(renderHtml);
	}

	$('#close-btn').click(function (e) { 
		$('#popup-modal').popup('close')
	});
	

	reviews.forEach(function (item) {
		// debugger;
		var status = document.getElementById(`vendor-feedback-${item.key}`);
		var status2 = document.getElementById(`reply-div-${item.key}`);
		if (item.reviewResponse == "") {
			status.style.display = "none";
			status2.style.display = "flex";
		} else {
			status.style.display = "flex";
			status2.style.display = "none";
		}
	})
}

function reply(id) {
	currentID = id;
	// $("#reply-btn").click(function () {
	// 	console.log("ebifebwfb")
	// 	$('#popup-modal').popup('open')
	// })
}

function submitResponse() {
	var response = $('#reviewReply').val();
	var vendorID = JSON.parse(sessionStorage.getItem('vendorObj')).id;
	firebase.database().ref('Vendors/' + vendorID).child('reviews/' + currentID).update({
		// name: 'Melt House',
		reviewResponse: response,
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
		$('#popup-modal').popup('close')

	var status = document.getElementById(`vendor-feedback-${id}`);
	status.style.display = "flex";
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

