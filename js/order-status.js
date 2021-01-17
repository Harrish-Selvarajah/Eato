$(document).ready(function(){
    console.log(sessionStorage)
    var name = JSON.parse(sessionStorage.getItem('userobj')).name;
    $('#name').text(name);
    setTimeout(function(){$(".se-pre-con").fadeOut("fast"); }, 1500);
    
})