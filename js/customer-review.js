// var status = document.getElementById("vendor-feedback");
// status.style.display = "none";
$(document).ready(function(){
  
});

function ShowVendorReply() {
  console.log('here');
  // $.mobile.changePage( "#vendor-feedback" );
  var status = document.getElementById("vendor-feedback");
  var status1 = document.getElementById("upArrow");
  var status2 = document.getElementById("downArrow");
  console.log(status, "status");
  status.style.display = "flex";
  status1.style.display = "flex";
  status2.style.display = "none";
}

function hideVendorReply() {
  var status = document.getElementById("vendor-feedback");
  var status1 = document.getElementById("upArrow");
  var status2 = document.getElementById("downArrow");
  console.log(status, "status");
  status.style.display = "none";
  status1.style.display = "none";
  status2.style.display = "flex";
}

function repeat() {
  var arrayXYZ = [{
    name: "ABC"
  },
  { name: "XYZ" }];
  var renderHtml = "";
  if (arrayXYZ.length > 0) {
    arrayXYZ.forEach(function (item, index) {
      renderHtml += `<div class="card"><h5>${item.name}</h5></div>`
    })
    $('#repeat').append(renderHtml);
  }
}