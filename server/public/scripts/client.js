// declare variables
var forRentListings = [];
var forSaleListings = [];

// do this after document loads
$(document).ready(function(){
  getListings();
}); // end doc ready

// GET all house listings
function getListings() {
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response){
    // console.log(response);
    // appendListings(response);
    checkStatus(response);
    }
  });
}

function checkStatus (responseToCheck){
  for(var i = 0; i < responseToCheck.length; i ++){
    if (responseToCheck[i].cost === undefined){
      forRentListings.push(responseToCheck[i]);
      // console.log(responseToCheck[i]);
    } // end if
    else {
      forSaleListings.push(responseToCheck[i]);
    }
  } // end for
  console.log(forRentListings);
  console.log(forSaleListings);
  appendListings(forRentListings, forSaleListings);
}// end checkStatus

function appendListings(forRentListings, forSaleListings) {
  for(var i = 0; i < forRentListings.length; i ++){
    var rentListing = forRentListings[i];
    var $el = $(".listings").last();
    $el.append("<li class ='list-group-item'>" + "<b>" + "Rent: " + "</b>" + "$" + rentListing.rent + "</li>");
    $el.append("<li class ='list-group-item'>" + "<b>" + "SqFt: " + "</b>" + rentListing.sqft + "</li>");
    $el.append("<li class ='list-group-item'>" + "<b>" + "City: " + "</b>" + rentListing.city + "</li>");
    $el.append("<li class='spacer'>" + " " + "</li>");

  } // end for
  for(var j = 0; j < forSaleListings.length; j ++){
    var saleListing = forSaleListings[j];
    var $el2 = $(".listings").last();
    $el2.append("<li class ='list-group-item'>" + "<b>" + "Cost: " + "</b>" + "$" + saleListing.cost + "</li>");
    $el2.append("<li class ='list-group-item'>" + "<b>" + "SqFt: " + "</b>" + saleListing.sqft + "</li>");
    $el2.append("<li class ='list-group-item'>" + "<b>" + "City: " + "</b>" + saleListing.city + "</li>");
    $el2.append("<li class='spacer'>" + " " + "</li>");
  } // end for
} // end appendListings
