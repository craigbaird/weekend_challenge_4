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
    $("#rentListings").append("<tr></tr>");
    var $el = $("#rentListings").children().last();
    $el.append("<td class='listing' style='width:10%'>" + "$" + rentListing.rent + "</td>");
    $el.append("<td class='listing' style='width:10%'>" + rentListing.sqft + " ft²" + "</td>");
    $el.append("<td class='listing' style='width:10%'>" + rentListing.city + "</td>");
  } // end for

  for(var j = 0; j < forSaleListings.length; j ++){
    var saleListing = forSaleListings[j];
   $("#saleListings").append("<tr></tr>");
    var $el2 = $("#saleListings").children().last();
    $el2.append("<td class='listing'>" + "$" + saleListing.cost + "</td>");
    $el2.append("<td class='listing'>" + saleListing.sqft +  " ft²" + "</td>");
    $el2.append("<td class='listing'>" + saleListing.city + "</td>");
  } // end for
} // end appendListings
