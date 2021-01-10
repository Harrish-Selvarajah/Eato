$(document).ready(function () {
    $(".bottom-nav").removeClass("slideup")
    $(".item").click(function () {
        $(".item.active-state").removeClass("active-state");
        $(this).addClass("active-state");
    });
});

function searchVendor() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let title = document.getElementsByClassName('vendor-title');
    let card = document.getElementsByClassName('section-card');

    for (i = 0; i < title.length; i++) {
        if (!title[i].innerHTML.toLowerCase().includes(input)) {
            card[i].style.display = "none";
        }
        else {
            card[i].style.display = "unset";
            ;
        }
    }
}