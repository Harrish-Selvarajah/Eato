// Global Variables 
var vendorList = [
    {
        id : 1,
        vendorName : "MeltHouse",
        rating : 4,
        type : 'Burger'
    },
    {
        id : 2,
        vendorName : "Cart Lache",
        rating : 3,
        type : 'Burger'
    },
    {
        id : 1,
        vendorName : "City Villy",
        rating : 4,
        type : 'Rice'
    }
]

sortFilterQuery = {
    sort : "none",
    filter : 0
}

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


function loadData(){
    //vendorList = JSON.parse(sessionStorage.getItem('userobj'))
}


function populateVendors(){

    $section = $('#section')

    var sectionCard = ""

    vendorList.forEach((vendor, idx) => {

        sectionCard = sectionCard.concat(
               `
               <div class="section-card" id ="vendor-${idx}">
                    <div class="vendor-img">
                        <img src="../assets/food/indian.jpg">
                    </div>
                    <div class="vendor-details">
                        <div class="vendor-title" id="vendor-name"> ${vendor.vendorName} </div>
                        <div class="vendor-ratings" id="vendor-rating">${vendor.rating} <i class="material-icons start-icon">star</i></div>
                    </div>

                </div>
               ` )
    });

    $section.append(sectionCard)
}

$(document).ready(function () {  

    loadData();
    populateVendors();

    // Selecting Stars 
$('#star-container i').click(function (e) { 
    
    sortFilterQuery['filter'] = 0;

    if (e.target.id == "star-1" && $(`#star-1`).hasClass('selected') && $(`#star-2`).hasClass('unselected')){
        $(`#${e.target.id}`).removeClass('selected')
        $(`#${e.target.id}`).addClass('unselected')
        
    }else{
    var done = false;
    $('#star-container i').each(function (idx,element) {
       
        if(!done){
            $(`#${element.id}`).removeClass('unselected')
            $(`#${element.id}`).addClass('selected')
        }else{
            $(`#${element.id}`).removeClass('selected')
            $(`#${element.id}`).addClass('unselected')
        }

        if(e.target.id == element.id){
            done = true;
            sortFilterQuery['filter'] = idx + 1;
        }
    });
}

});


// Highlighlight selection in filter
$('#sort-catagory-sorting div').click(function(e){
    sortFilterQuery['sort'] = 'none';
    var event = `#{e.target.value}`
if(! $(`#${e.target.id}`).hasClass('button-selected')){
    $('#sort-catagory-sorting div').each(function (idx,element) {  
         
        if(e.target.id == element.id){
            $(`#${e.target.id}`).removeClass('button-unselected')
            $(`#${e.target.id}`).addClass('button-selected')
            sortFilterQuery['sort'] = e.target.id;
        }else{
            $(`#${element.id}`).removeClass('button-selected')
            $(`#${element.id}`).addClass('button-unselected')
        }
    });
}else{
    $(`#${e.target.id}`).removeClass('button-selected')
    $(`#${e.target.id}`).addClass('button-unselected')
}
     });

$('#confirm-filter').click(function (e) { 
    filterPOI();
    $('#filter-popup').popup('close')
        
    });

$('.quick-filter').click(function(e){
      filterWithType(e);
});

});


function filterPOI() {
    console.log(sortFilterQuery)
    var sort = sortFilterQuery.sort;
    var filter = sortFilterQuery.filter
    
    // Filter First 
    vendorList.forEach(function(element,idx){
        if (element.rating < filter){
             $(`#vendor-${idx}`).css('display','none')
        }else{
          $(`#vendor-${idx}`).css('display','block')
        }
   });

   // Sort
   var sectionChildrenElements = $('#section .section-card')
   if (sort == "a-z"){
    sectionChildrenElements = sortFromAtoZ(sectionChildrenElements);
   }else if (sort == "z-a"){
    sectionChildrenElements = sortFromZtoA(sectionChildrenElements);
   }else if (sort == "rating"){
    sectionChildrenElements = sortByRating(sectionChildrenElements);
   }
   
   $('#section').empty();
   $('#section').append(sectionChildrenElements)

   // finally clear search

   document.getElementById("search").value = ""
}

function sortFromAtoZ(venList) {  

    venList = venList.sort(function(a,b){
        var last = $(`#${a.id}`).find('#vendor-name').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-name').text().toLowerCase()
        
        if (first > last){
            return -1;
        }else if(last > first){
            return 1;
        }

        return 0;
    })

  return venList;
}


function sortFromZtoA(venList) {  

    venList = venList.sort(function(a,b){
        var last = $(`#${a.id}`).find('#vendor-name').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-name').text().toLowerCase()
        
        if (first < last){
            return -1;
        }else if(last < first){
            return 1;
        }

        return 0;
    })

  return venList;
}

function sortByRating(venList){

    venList = venList.sort(function(a,b){
        var last = $(`#${a.id}`).find('#vendor-rating').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-rating').text().toLowerCase()
        
        if (first < last){
            return -1;
        }else if(last < first){
            return 1;
        }

        return 0;
    })

  return venList;
}

function  filterWithType(e){  
     console.log(e.target.id)
     vendorList.forEach(function(element,idx){
         if(e.target.id == element.type){
            $(`#vendor-${idx}`).css('display','block')
         }else{
            $(`#vendor-${idx}`).css('display','none')
         }
     })
}