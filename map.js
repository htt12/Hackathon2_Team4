$(document).ready(initializeApp);


function initializeApp(){

  searchButtonClick();
}
function searchButtonClick(){
  $("#searchButton").on('click', getSearchInfo);
}


function getSearchInfo(searchTerm){
    var searchTerm = searchTerm + " places";
  var url = "https://www.google.com/maps/embed/v1/search?q=" + searchTerm + "&key=AIzaSyA2LQkpDCGy7IB420XJ9uposdqKkKxINH4";
             $("iframe").attr("src", url);

}

// function getSearchInfo(input){
//    input = $("#searchPhrase").val();
//   var url = "https://www.google.com/maps/embed/v1/search?q=" + input + "&key=AIzaSyA2LQkpDCGy7IB420XJ9uposdqKkKxINH4";
//              $("iframe").attr("src", url);

// }
// getSearchInfo(searchTerm);