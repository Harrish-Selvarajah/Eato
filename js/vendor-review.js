reviews = [];
var currentID;
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
	var foodItemID = '-MQIVU18l9mKwEdlWQ3I';
	firebase.database().ref('Vendors/'+ 1).child('foodItem/'+ foodItemID).child('reviews').once('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			// console.log(childSnapshot);
		  var childData = childSnapshot.val();
		//   debugger;
		//   console.log(childData);
		//   reviews.push(childData);
		var item = {
			key: childSnapshot.key,
			date: childData.date,
			rating: childData.rating,
			review: childData.review,
			userObj : {
				name: childData.userObj.name,
				// profilepicLink: childData.userobj.profilepicLink
			}
		}
		reviews.push(item);
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
			</div>
		</div>`
		})
		$('#repeat').append(renderHtml);
	}
}

function reply(id) {
	console.log(id, "reply funciton");
	currentID = id;
}

function submitResponse() {
	var foodItemID = '-MQIVU18l9mKwEdlWQ3I';
	var response = $('#reviewReply').val();
	console.log(currentID, "currentID")
	firebase.database().ref('Vendors/'+ 1).child('foodItem/'+ foodItemID).child('reviews/' + currentID).update({
		// name: 'Melt House',
			reviewResposne : response ,
			}
	  , (error) => {
		if (error) {
		  console.log("Push to firebase failed!")
		} else {
		  console.log("pushed to firebase succesfully!");
		}
	  });
}