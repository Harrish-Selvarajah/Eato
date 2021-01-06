var popupAction = null;

$(document).ready(function () {
    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() < 768) {
            $("#food-item-popup").popup("close");
            $('body').css('overflow', 'auto');
        }
    });
});

function handleFoodItemPopup(action) {
    if ($(window).width() < 768) {
        $("#food-item-popup").popup("close");
        $('body').css('overflow', 'auto');
        window.location.href = '../components/food-item.html';
    }
    else {
        popupAction = action
        if (popupAction === "open") {
            $('body').css('overflow', 'hidden');
            $('body').css('background-color', 'red');
            $("#food-item-popup").popup("open");
        }
        else {
            $('body').css('overflow', 'auto');
            $("#food-item-popup").popup("close");
        }
    }
}