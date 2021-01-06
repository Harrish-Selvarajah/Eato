$(document).ready(function(){ });

function goToVendor(vendorID) {
    console.log(vendorID);
    sessionStorage.setItem('vendorID', vendorID);
    document.location.href = "./customer-vendor.html";
}