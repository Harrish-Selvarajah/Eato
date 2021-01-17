var loyaltyArray = [];

$(document).ready(function () {
    console.log(sessionStorage, 'session')
    // JSON.parse(sessionStorage.getItem('loyaltyPointsArray')).slice(1)
    var loyaltyPoints = sessionStorage.getItem('loyaltyPoints');
    loyaltyArray = JSON.parse(sessionStorage.getItem('loyaltyPointsArray'));
    renderActivity();
    $('#loyaltyPoints').text(Math.random(loyaltyPoints) + ' Points');
});

function renderActivity() {
    renderHtml = "";
    loyaltyArray = loyaltyArray.reverse()
    loyaltyArray.forEach(function (item) {
        if (item.method === 'purchase') {
            renderHtml += `<div class="acitivity card">
        <div class="acitivity_circle">
            <img src="../assets/food/indian.jpg" alt="vendor">
        </div>
        <div style="text-align: center;"><span class="subtitle">You earned ${Math.random(item.points)} points</span> <br><span style="color: #5C5C5C;" class="primaryText"> Rs ${item.price} at ${item.via}</span></div>
        <div class="acitivity_circle" style="border: 1px solid  black; "><span class="subtitle">+${Math.random(item.points)}</span></div>
    </div> `
        } else {
            if (item.method === 'QR') {
                renderHtml += `<div class="acitivity card">
                <div class="acitivity_circle">
                    <img src="../assets/food/indian.jpg" alt="vendor">
                </div>
                <div style="text-align: center;"><span class="subtitle">You earned ${item.points} points</span> <br><span style="color: #5C5C5C;" class="primaryText"> By scanning QR code from ${item.via}</span></div>
                <div class="acitivity_circle" style="border: 1px solid  black; "><span class="subtitle">+${item.points}</span></div>
            </div> `
            }
        }
        
    })
    $('#render-activity').append(renderHtml);

}