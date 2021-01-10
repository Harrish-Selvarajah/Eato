$(document).ready(function(){ });

function goToVendor(vendorID) {
    console.log(vendorID);
    sessionStorage.setItem('vendorID', vendorID);
    document.location.href = '../components/customer-vendor.html?vendorID=' + vendorID;
}

$(document).ready(function () {
    $(".item").click(function () {
        $(".item.active-state").removeClass("active-state");
        $(this).addClass("active-state");
    });
});