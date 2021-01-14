$(document).ready(function () {
    $(".item").click(function () {
        $(".item.active-state").removeClass("active-state");
        $(this).addClass("active-state");
    });
    var location = sessionStorage.getItem('location');
    $('#location').text(location);
});

function goToVendor(vendorID) {
    console.log(vendorID);
    sessionStorage.setItem('vendorID', vendorID);
    document.location.href = '../components/customer-vendor.html?vendorID=' + vendorID;
}