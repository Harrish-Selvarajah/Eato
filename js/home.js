$(document).ready(function(){ });

function goToVendor(vendorID) {
    console.log(vendorID);
    sessionStorage.setItem('vendorID', vendorID);
    document.location.href = '../components/customer-vendor.html?vendorID=' + vendorID;
}