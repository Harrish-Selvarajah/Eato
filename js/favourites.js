var favVendorList = []
var selectedFavList = []
var userID = "-MQN7UYipYUXF5l7caW6" // This should change to local storage
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
sortFilterQuery = {
    sort: "none",
    filter: 0
}
var test = false
var firebaseConfig = {
    apiKey: "AIzaSyBDwiPGqXFeormDpnISyavzwju3BnCUPTo",
    authDomain: "eato-69.firebaseapp.com",
    databaseURL: "https://eato-69-default-rtdb.firebaseio.com",
    projectId: "eato-69",
    storageBucket: "eato-69.appspot.com",
    messagingSenderId: "274943061802",
    appId: "1:274943061802:web:9916cf1cb84f515bdab853"
};

// toaster options
toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var rootRef = new Firebase("https://eato-69-default-rtdb.firebaseio.com/").ref();

var ref = firebase.database().ref('users')

function loadFavListFromFirebase() {
    ref.once('value', function (snapshot) {
        var data = snapshot.val()
        // console.log(data)

        if (Object.keys(data).includes(userID)) {
            //  console.log(data[userID]['favourites'])
            if (data[userID]['favourites'] != undefined || data[userID]['favourites'].length != 0) {
                console.log("STARTING TO LOAD FAVOURITES LIST")
                favVendorList = data[userID]['favourites'];
                allFavVendorList = favVendorList;
                loadFavVendorList(undefined);
            } else {
                console.log("USER HAS NOT FAVOURITED ANYTHING")

            }
        } else {
            console.error("USER NOT FOUND")
        }
    },
        function (error) {
            console.log("Error: " + error.code);
        });

}
function loadDisplayData() {
    var favouriteList;
    try {
        favouriteList = JSON.parse(sessionStorage.getItem('userobj')).favourites;
    } catch (e) {
        loadFavListFromFirebase();
    }

    if (favouriteList != null & test == false) {
        console.log("Session Pull")
        loadFavVendorList(favouriteList);
    } else {
        console.log("DB Pull")
        loadFavListFromFirebase();
    }


}

function loadFavVendorList(favList) {

    favList = favList != undefined ? favList : favVendorList

    $favUiList = $('#fav-list')
    $favUiList.empty();
    var poiContent = ""
    console.log(favList)
    favList.forEach((favVendor, idx) => {

        poiContent = poiContent.concat(
            `<li class="item" id="li-${idx}">
                <div class="item-img">
                    <div class="icon-container" onClick="removeFavourite(${favVendor.vendorID})">
                        <i class=" material-icons icon-fav">favorite</i>
                    </div>
                </div>
                <div class="fav-checkbox">
                    <div>
                        <h4 id="vendor-name" >${favVendor.vendorName}</h4>
                        <input class="checkbox" onClick="addCheckBoxClick(${favVendor.vendorID})" id="select-${favVendor.vendorID}" type="checkbox" />
                    </div>
                </div>
                <div class="d-flex">
                    <i class="material-icons icon-star">grade</i>
                    <h4 id="vendor-rating">${favVendor.rating}</h4>
                </div>
            </li>`
        )
    })

    if(favList.length < 3){
         poiContent = poiContent.concat(addEmptyComponentIfNotThree());
    }

    $favUiList.append(poiContent)
    favVendorList = favList;
}

$(document).ready(function () {
    $(".bottom-nav").removeClass("slideup")
    disableSharebutton();
    $('#error-msg').hide();

    loadDisplayData();
    contentEmptyoperations();

    $("#select-all").click(function () {

        if ($('#select-all').is(":checked")) {

            $('#fav-list').find(':checkbox').each(function (element) {
                $(this).prop('checked', true);
            });

            // Add all favourites in the screen to selected favourites
            selectedFavList = favVendorList;

            activeShareButton();
            
        } else {
            //console.log($('#fav-list').children())
            $('#fav-list').find(':checkbox').each(function (element) {
                $(this).prop('checked', false);
            });

            
            selectedFavList = []

            disableSharebutton();
        }

    });

    $("#share-btn").click(function () {
        if ($("#share-btn").hasClass('enabled')) {
            $('#popup-modal').popup('open')
        }
    })

    $('#close-btn').click(function (e) {
        $('#popup-modal').popup('close')
    });

    $('#search-filter').click(function (e) {
        $('#filter-popup').popup('open')

    });

    $('#confirm-filter').click(function (e) {
        filterPOI();
        $('#filter-popup').popup('close')

    });

    $('#last-share-btn').click(function () {
        var email = $('#input-email').val()
        content = "<html> <body> <ul>"
        selectedFavList.forEach(function (fav) {

            content = content.concat(`<li> Vendor Name : ${fav.vendorName} Rating : ${fav.rating} </li>`)
        })

        if (!validateEmail(email)) {
            $('#error-msg').show();
            console.log("Invalid email format")
        } else {
            $('#error-msg').hide();
            SendEmail(email, content)
            $('#popup-modal').popup('close')
        }
       
    });

    $(document).on('input', '#search', function (e) {
        var input = e.target.value;
        search(input);
    });


    // Highlighlight selection in filter
    $('#sort-catagory-sorting div').click(function (e) {
        sortFilterQuery['sort'] = 'none';

        if (!$(`#${e.target.id}`).hasClass('button-selected')) {
            $('#sort-catagory-sorting div').each(function (idx, element) {

                if (e.target.id == element.id) {
                    $(`#${e.target.id}`).removeClass('button-unselected')
                    $(`#${e.target.id}`).addClass('button-selected')
                    sortFilterQuery['sort'] = e.target.id;
                } else {
                    $(`#${element.id}`).removeClass('button-selected')
                    $(`#${element.id}`).addClass('button-unselected')
                }
            });
        } else {
            $(`#${e.target.id}`).removeClass('button-selected')
            $(`#${e.target.id}`).addClass('button-unselected')
        }
    });

    // Selecting Stars 
    $('#star-container i').click(function (e) {

        sortFilterQuery['filter'] = 0;

        if (e.target.id == "star-1" && $(`#star-1`).hasClass('selected') && $(`#star-2`).hasClass('unselected')) {
            $(`#${e.target.id}`).removeClass('selected')
            $(`#${e.target.id}`).addClass('unselected')

        } else {
            var done = false;
            $('#star-container i').each(function (idx, element) {

                if (!done) {
                    $(`#${element.id}`).removeClass('unselected')
                    $(`#${element.id}`).addClass('selected')
                } else {
                    $(`#${element.id}`).removeClass('selected')
                    $(`#${element.id}`).addClass('unselected')
                }

                if (e.target.id == element.id) {
                    done = true;
                    sortFilterQuery['filter'] = idx + 1;
                }
            });
        }

    });

});


function activeShareButton() {
    $('#share-btn').removeClass('disabled')
    $('#share-btn').addClass('enabled')
}

function disableSharebutton() {
    $('#share-btn').removeClass('enabled')
    $('#share-btn').addClass('disabled')
}

function addCheckBoxClick(id) {

    if ($(`#select-${id}`).is(":checked") == true) {
        console.log(favVendorList)
        var selectedItem = favVendorList.find(function (element) {
            return element.vendorID == id;
        })
        console.log(selectedItem)
        selectedFavList = selectedFavList.concat(selectedItem)

        // Make Share Actives
        activeShareButton();

    } else {
        console.log(selectedFavList)
        selectedFavList = selectedFavList.filter(function (element) {
            return id != element.vendorID;
        })

        if (selectedFavList.length == 0) {
            disableSharebutton();
        }
    }
}

function validateEmail(email) {
    if (emailRegex.test($.trim(email))) {
        return true;

    } else {
        return false;
    }
}

function SendEmail(email, message) {

    Email.send({
        Host: "smtp.gmail.com",
        Username: "eato.corp@gmail.com",
        Password: "Qwerty@12345$",
        To: email,
        From: "eato.corp@gmail.com",
        Subject: "List of Favourites",
        Body: content
    }).then(
        message => toastr["success"]("Email Successfully Sent", "Success!")
    ).catch(
        error =>  toastr["error"]("Email not Sent", "Error!")
    )
}

function removeFavourite(vendorID) {
    console.log(vendorID)
    favVendorList = filterArrayById(favVendorList, vendorID)
    var userobj = JSON.parse(sessionStorage.getItem('userobj'));
    userobj.favourites = favVendorList;
    sessionStorage.setItem('userobj', JSON.stringify(userobj));

    selectedFavList = filterArrayById(selectedFavList, vendorID)
    toastr.success('Removed From Favourites', 'Success');


    loadFavVendorList();

}

function filterArrayById(array, id) {
    return array.filter(function (element) {
        return element.vendorID != id;
    })
}

function filterPOI() {
    console.log(sortFilterQuery)
    var sort = sortFilterQuery.sort;
    var filter = sortFilterQuery.filter

    // Filter First 
    favVendorList.forEach(function (element, idx) {
        if (element.rating < filter) {
            $(`#li-${idx}`).css('display', 'none')
        } else {
            $(`#li-${idx}`).css('display', 'block')
        }
    });

    // Sort
    var favChildElements = $('#fav-list').find('.item')
    if (sort == "a-z") {
        favChildElements = sortFromAtoZ(favChildElements);
    } else if (sort == "z-a") {
        favChildElements = sortFromZtoA(favChildElements);
    } else {
        favChildElements = sortByRating(favChildElements);
    }

    $('#fav-list').empty();

   
    $('#fav-list').append(favChildElements)

    if(favChildElements.length < 3){
        var poiContent = addEmptyComponentIfNotThree();
    }
    
    $('#fav-list').append(poiContent)


    // finally clear search

    document.getElementById("search").value = ""
    contentEmptyoperations();
}

function sortFromAtoZ(favList) {

    favList = favList.sort(function (a, b) {
        var last = $(`#${a.id}`).find('#vendor-name').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-name').text().toLowerCase()

        if (first > last) {
            return -1;
        } else if (last > first) {
            return 1;
        }

        return 0;
    })

    return favList;
}


function sortFromZtoA(favList) {

    favList = favList.sort(function (a, b) {
        var last = $(`#${a.id}`).find('#vendor-name').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-name').text().toLowerCase()

        if (first < last) {
            return -1;
        } else if (last < first) {
            return 1;
        }

        return 0;
    })

    return favList;
}

function sortByRating(favList) {

    favList = favList.sort(function (a, b) {
        var last = $(`#${a.id}`).find('#vendor-rating').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-rating').text().toLowerCase()

        if (first < last) {
            return -1;
        } else if (last < first) {
            return 1;
        }

        return 0;
    })

    return favList;
}


function search(input) {

    favVendorList.forEach(function (element, idx) {
        if (!element.vendorName.toUpperCase().substring(0, input.length).includes(input.toUpperCase())) {
            $(`#li-${idx}`).css('display', 'none')
        } else {
            $(`#li-${idx}`).css('display', 'block')
        }
    });
    contentEmptyoperations();
}

function contentEmptyoperations(){
    console.log('in')
    $content = $('#fav-list').find('.item')
    $('#favourites').find('#fav-empty').remove()
    $content = $content.filter(function(){
        return $(this).css('display') != 'none';
    })
    
    $('#share-btn').show()

    if ($content.length > 0){
            $('#fav-checkbox').css("display","block")
    }else{
          $('#fav-checkbox').css("display","none")

          emptyContent = `<div id="fav-empty" style="display:flex; margin-top:10%; align-content:center; justify-content:center; flex-direction:column">
          <span class="iconify" data-icon="mdi:heart-broken" data-inline="false" style="margin-bottom:20px; margin-left:auto; margin-right:auto;"></span>                         
                                    <h4 style="text-align:center;">No favourites found</h4>
                          </div>`
        $('#share-btn').hide()            
        $('#favourites').append(emptyContent)
    }
}

function addEmptyComponentIfNotThree() {  

    var poiContent = ""
    
    for(var i=0; i < 2; i++){
        poiContent = poiContent.concat(`<li class="item-none" style="border: 0px none white !important"></li>`)
    }
    

    return poiContent
}