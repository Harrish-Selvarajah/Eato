function detectMobileWithAgent() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem) 
    });
}

function detectMobileWithScreen() {
    return ( ( window.innerWidth <= 400 ) && ( window.innerHeight <= 800 ) );
  }



  $(document).ready(function () {
    //   console.log(detectMob())


   $('#abc').click(function (e) { 
       console.log(!detectMobileWithScreen())
       if(!detectMobileWithAgent()){
            console.log('open')

            var re =  $("#i")
            $.mobile.pageContainer.pagecontainer( "getActivePage" ).not(re)
            .addClass( "blur-filter" );
        
            //$("body").addClass( "blur-filter" );
            $("#i").removeClass('blur-filter');
            $(".ui-popup-container").children().removeClass('blur-filter');
            $(".ui-popup-container").removeClass('blur-filter');
            $(".ui-popup-screen").children().removeClass('blur-filter');
            $(".ui-popup-screen").removeClass('blur-filter');
            $('#i').popup("open")
       }else{
        document.location.href = '../components/about-us.html'
       }
    });
   
    $('#close').click(function(){
        $('#i').popup("close")
        $.mobile.pageContainer.pagecontainer( "getActivePage" ).removeClass( "blur-filter" );
    })
  })