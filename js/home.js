$(document).ready(function () {
    $(".item").click(function () {
        $(".item.active-state").removeClass("active-state");
        $(this).addClass("active-state");
    });
    var location = sessionStorage.getItem('location');
    if (location === null) {
        location = 'Add Location';
        $('#location').text(location);
    } else {
        $('#location').text(location);
    }

    $("#close-popup").click(function () {
        $("#popup-modal").popup("close");
    })
});

function goToVendor(vendorID) {
    sessionStorage.setItem('vendorID', vendorID);
    document.location.href = '../components/customer-vendor.html?vendorID=' + vendorID;
}

function food(name) {
    $('#food-type').text(name);
}
