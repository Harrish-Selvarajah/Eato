$(document).ready(function () {
    console.log(sessionStorage)
    renderHome();
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

function renderHome() {
    debugger
   var vendors = [];
   debugger
   vendors = JSON.parse(sessionStorage.getItem('vendors'));
   vendors.forEach(function (item) {
       var total = 0,avg = 0,count = 0;
       Object.values(item.reviews).forEach(function (rev) {
           total = total + rev.rating;
           count = count + 1;
       })
       avg = total / count;
    //    $(`#vendor-rating-${item.id}`).empty();
    //    $(`#vendor-rating-${item.id}`).append(Number(avg/10));
    //    $(`#vendor-rating-${item.id}`).addClass('material-icons star-icon');
   })
}
