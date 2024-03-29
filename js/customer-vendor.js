
$(document).ready(function () {

    // get vendor Id of the relavant page 
    var vendorID = getUrlParameter('vendorID')
    markVendorFavOrNot(vendorID)
    // favourite selected or unselected
    $('#fav-icon-container').click(function () {
        addOrRemoveFavourites(vendorID);
    })

    $('#close').click(function (e) { 
        $('body').css('overflow', 'auto');
        $('#review-popup').popup('close') 
    });

});

function goToRatings() {
    if(!detectMobileWithAgent()){
        $('body').css('overflow', 'hidden');
        $('#review-popup').popup('open')
    }else{
        document.location.href = "./customer-review.html";
    }
    
}

function addOrRemoveFavourites(vendorID) {

    var userobj = JSON.parse(sessionStorage.getItem('userobj'));
    //userobj.favourites
    if ($('#fav-icon').text() == 'favorite_border') {
        $('#fav-icon').text('favorite')


        if (userobj != null && userobj.favourites != null) {

            var currentVendor = filterVendors(vendor, vendorID)

            if (currentVendor != null) {
                userobj.favourites.push({
                    vendorID: `${vendorID}`,
                    vendorName: currentVendor.name,
                    rating: currentVendor.rating,
                    img : currentVendor.img
                })
            }
        } else if (userobj != null) {
            userobj.favourites = []
            var currentVendor = filterVendors(vendor, vendorID)
            if (currentVendor != null) {
                userobj.favourites.push({
                    vendorID: `${vendorID}`,
                    vendorName: currentVendor.name,
                    rating: currentVendor.rating,
                    img: currentVendor.img
                })
            }
        }
        toastr.success('Added To Favourites', 'Success');
    } else {

        $('#fav-icon').text('favorite_border')
        var favVendorList = removeVendor(userobj.favourites, vendorID)
        userobj.favourites = favVendorList
        toastr.success('Removed From Favourites', 'Success');
    }
    sessionStorage.setItem('userobj', JSON.stringify(userobj));
}


function filterVendors(vendors, vendorID) {
    var vendorArr = []
    vendorArr = vendors.filter(function (element) {
        return element.id == vendorID
    })
    return vendorArr[0]
}

function filterFavList(vendors, vendorID) {
    var vendorArr = []
    vendorArr = vendors.filter(function (element) {
        return element.vendorID == vendorID
    })
    return vendorArr[0]
}

function removeVendor(vendors, vendorID) {
    var vendorArr = []
    vendorArr = vendors.filter(function (element) {
        return element.vendorID != vendorID
    })
    return vendorArr
}

function getUrlParameter(sParam) {
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


function markVendorFavOrNot(vendorID) {
    var userobj = JSON.parse(sessionStorage.getItem('userobj'));

    if (userobj != null && userobj.favourites != null) {
        var currentVendor = filterFavList(userobj.favourites, vendorID)
        if (currentVendor != null && currentVendor != undefined) {
            $('#fav-icon').text('favorite')
        } else {
            $('#fav-icon').text('favorite_border')
        }
    }
}

function detectMobileWithAgent() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem) 
    });
}
