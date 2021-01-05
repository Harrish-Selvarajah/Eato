reviews = [];
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
	firebase.database().ref('Vendors/'+1).child('reviews').once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var childData = childSnapshot.val();
		  // console.log(childData);
		  reviews.push(childData);
		})
		console.log(reviews);
		repeat();
	  })
});

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
							${item.userobj.name}
							</h5>
							<div class="ui-grid-a">
							<span class="stars-container stars-${item.rating}">★★★★★</span>
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
							<a href="#popupLogin" data-rel="popup" data-position-to="window"
								data-transition="pop">Reply</a>
							
						</div>
					</div>
				</div>
			</div>
		</div>`
		})
		$('#repeat').append(renderHtml);
	}
}