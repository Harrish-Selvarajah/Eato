$(document).ready(function () {
    $("#add-item-btn").click(function () {
        $('#popup-modal').popup('open')
    })

    $('#close-btn').click(function (e) {
        $('#popup-modal').popup('close')
    });
});