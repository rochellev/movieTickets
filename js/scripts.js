function PersonalDetails(userName, age, time, movieName){
  this.userName = userName,
  this.age = age,
  this.time = time,
  this.movieName = movieName

}

// PersonalDetails.prototype. = function () {
//
// };

function BookTickets(){
  this.currentID = 0,
  this.details = []
}

BookTickets.prototype.purchaseTicket = function (userInput) {
  userInput.id = this.assignID();
  this.details.push(userInput);

}

BookTickets.prototype.assignID = function () {
  this.currentID +=1;
  return this.currentID;
}

BookTickets.prototype.searchMovies = function(id) {
  for (var i=0; i< 50; i++) {
    if (this.details[i]) {
      if (this.details[i].id == id) {
        return this.details[i];
      }
    }
  };
  return false;
}


// function for button
function callInputForm (){
  $(".movie-list").hide();
  $("#userInfo").show();

}





$(document).ready(function() {
  $(".movie-list").click(function(event){
    var movieName;
    movieName= event.target.name;
    $(".movieName").append('<ul> <strong> <em>" ' + movieName + '"</em></strong></ul>');
    $("form#userInfo").submit(function(event) {
      event.preventDefault();
    var inputName = $("input#name").val();
    var inputAge = $("input:radio[name=age]:checked").val();
    var inputTime = $("input:radio[name=time]:checked").val();


});
});
});
