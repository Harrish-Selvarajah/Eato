var loyaltyArray = [];

$(document).ready(function () { 
    console.log(sessionStorage, 'session')
    var loyaltyPoints = sessionStorage.getItem('loyaltyPoints');
    loyaltyArray = JSON.parse(sessionStorage.getItem('loyaltyPointsArray'));
    renderActivity();
    $('#loyaltyPoints').text(loyaltyPoints);
});

function renderActivity() {
    renderHtml = "";
    loyaltyArray.forEach(function(item) {
        renderHtml += `<div class="acitivity card">
        <div class="acitivity_circle">
            <img src="../assets/food/indian.jpg" alt="vendor">
        </div>
        <div style="text-align: center;"> <b>You earned ${item}</b> <br> LKR${item} at Melt House</div>
        <div class="acitivity_circle" style="border: 1px solid  black;">+${item}</div>
    </div> `
    })
    $('#render-activity').append(renderHtml);

}