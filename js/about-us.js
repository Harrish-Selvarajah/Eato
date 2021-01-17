$(document).ready(function () {
    
    var popup = getUrlParameter('popup');
    console.log(popup)
    if(popup == true || popup == "true"){
        console.log("yooo")
        $('#header-bar').hide();
        $('#footerr').hide();
        $('.logo-center-container').css('margin-top','0px')
        $('.ui-content').css('min-height','0px')
    }

    $("#close-popup").click(function(){
        $("#popup-modal").popup("close");
    })

    if (sessionStorage.length > 1) {
        $('#navBar').show();
    } else {
        $('#navBar').hide();
    }
})


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};