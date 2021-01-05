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
								S. Harrish
							</h5>
							<div class="ui-grid-a">
								<div class="ui-block-a" style="width: 80px;">
									<div style="width:74px">
										<div class="ui-grid-d">
											<div class="ui-block-a">
												<img src="../assets/star.png" style="height: 10px;">
											</div>
											<div class="ui-block-b">
												<img src="../assets/star.png" style="height: 10px;">
											</div>
											<div class="ui-block-c">
												<img src="../assets/star.png" style="height: 10px;">
											</div>
											<div class="ui-block-d">
												<img src="../assets/star.png" style="height: 10px;">
											</div>
											<div class="ui-block-e">
												<img src="../assets/star.png" style="height: 10px;">
											</div>
										</div>
									</div>
								</div>
								<div class="ui-block-b date-container">
									<div class="date">
										21.12.2020
									</div>
								</div>
							</div>
							<div class="infoText">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Vestibulum laoreet, nunc eget laoreet sagittis,
								quam ligula sodales orci, congue imperdiet eros tortor ac lectus.
								
							</div>
						</div>
					   
						<div class="reply-div">
							<a href="#popupLogin" data-rel="popup" data-position-to="window"
								data-transition="pop">Reply</a>
							<div data-role="popup" id="popupLogin" data-theme="a" class="ui-corner-all" style="height: 330px;
							width: 335px; border-radius: 20px;">
								   <div class="pop-up-header">
									<i class="close"></i>
									<h5>Type Response</h5>
								</div>
								<div class="ui-content-header popup-header">
									<div class="pop-up-content-contianer">
										<div class="input-field-container">
											<input type="text" placeholder="Type message here" name="usrnm" style="height: 136px; width: 278px;">
										</div>
										<div class="action-btn popup-btn">
											<button type="button">
												<p class="primaryText">Login</p>
											</button>
										</div>
									</div>
								  
								</div>
							   
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`
		})
		$('#repeat').append(renderHtml);
	}
}