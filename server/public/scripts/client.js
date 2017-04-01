$(document).ready(function(){
  init();
}); // end doc ready

function init() {
  getListings();
}

function getListings() {
  $.ajax({
    type: "GET",
    url: "/listings",
    success: function(response){
      console.log(response);
    }
  });
}
