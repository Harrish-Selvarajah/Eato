$(document).ready(function () {

    // get vendor Id of the relavant page 
    var vendorID = getUrlParameter('vendorID')
    console.log(vendorID)
    markVendorFavOrNot(vendorID)
    // favourite selected or unselected
    $('#fav-icon-container').click(function () {
        addOrRemoveFavourites(vendorID);
    })


});

function goToRatings() {
    document.location.href = "./customer-review.html";
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
                    rating: currentVendor.rating
                })
            }
        } else if (userobj != null) {
            userobj.favourites = []
            var currentVendor = filterVendors(vendor, vendorID)
            if (currentVendor != null) {
                userobj.favourites.push({
                    vendorID: `${vendorID}`,
                    vendorName: currentVendor.name,
                    rating: currentVendor.rating
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
    //console.log(userobj)
    sessionStorage.setItem('userobj', JSON.stringify(userobj));
}


function filterVendors(vendors, vendorID) {
    var vendorArr = []
    vendorArr = vendors.filter(function (element) {
        return element.id == vendorID
    })
    console.log(vendorArr[0])
    return vendorArr[0]
}

function filterFavList(vendors, vendorID) {
    var vendorArr = []
    vendorArr = vendors.filter(function (element) {
        return element.vendorID == vendorID
    })
    console.log(vendorArr[0])
    return vendorArr[0]
}

function removeVendor(vendors, vendorID) {
    var vendorArr = []
    vendorArr = vendors.filter(function (element) {
        return element.vendorID != vendorID
    })
    console.log(vendorArr)
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

    if (userobj.favourites != null) {
        var currentVendor = filterFavList(userobj.favourites, vendorID)
        //   console.log(currentVendor)
        if (currentVendor != null && currentVendor != undefined) {
            $('#fav-icon').text('favorite')
        } else {
            $('#fav-icon').text('favorite_border')
        }
    }
}