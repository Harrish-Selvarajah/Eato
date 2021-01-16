var loyaltyArray = [];

$(document).ready(function () {
    console.log(sessionStorage, 'session')
    var loyaltyPoints = sessionStorage.getItem('loyaltyPoints');
    loyaltyArray = JSON.parse(sessionStorage.getItem('loyaltyPointsArray'));
    renderActivity();
    $('#loyaltyPoints').text(loyaltyPoints + ' Points');
});

function renderActivity() {
    renderHtml = "";
    loyaltyArray.forEach(function (item) {
        renderHtml += `<div class="acitivity card">
        <div class="acitivity_circle">
            <img src="../assets/food/indian.jpg" alt="vendor">
        </div>
        <div style="text-align: center;"><span class="subtitle">You earned ${item} points</span> <br><span style="color: #5C5C5C;" class="primaryText"> Rs ${item} at Melt House</span></div>
        <div class="acitivity_circle" style="border: 1px solid  black; "><span class="subtitle">+${item}</span></div>
    </div> `
    })
    $('#render-activity').append(renderHtml);

}