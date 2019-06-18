// Business Logic for AddressBook ---------
function BookTickets(){
  this.currentId = 0,
  this.customers = []
}


BookTickets.prototype.purchaseTicket = function (customer) {
  if (this.customers.length < 51){
    customer.id = this.assignId();
    this.customers.push(customer);

  }else {
    $(".houseFull").show();
  }
}

BookTickets.prototype.assignId = function () {
  this.currentId +=1;
  return this.currentId;
}


BookTickets.prototype.searchCustomer = function(id) {
  console.log(id)
  for (var i=0; i< 50; i++) {
    if (this.customers[i]) {
      if (this.customers[i].id == id) {
        return this.customers[i];
      }
    }
  };
  return false;
}

/// Business Logic for customer ---------

function customer(userName, age, time, movieName){
  this.userName = userName,
  this.age = age,
  this.time = time,
  this.movieName = movieName

}

// function for button
function callInputForm (){
  $(".movie-list").hide();
  $("#userInfo").show();

}
function mainPage (){
  $(".movie-list").show();
  $("#userInfo").hide();

}

var bookTickets = new BookTickets();

function displayCustomerDetails(bookTicketsToDisplay) {
  var customerList = $("ul#customers");
  var htmlForCustomerInfo = "";
  bookTicketsToDisplay.customers.forEach(function(customer) {
    htmlForCustomerInfo += "<li id=" + customer.id + ">" + customer.userName +  "</li>";
  });
  customerList.html(htmlForCustomerInfo);
};

function showCustomer(customerId) {

  // console.log(customerId);


  var customer = bookTickets.searchCustomer(customerId);

  // console.log(customer)
  // console.log(customer.time)

  $(".show-purchaseTicket").show();
  $(".name").html(customer.userName);
  $(".movieName").html(customer.movieName);
  $(".movieTime").html(customer.time);
  $(".moviePrice").html(customer.price);
  }

  // attachContactListeners function
function attachContactListeners() {
$("#customers").on("click", "li", function() {
  showCustomer(this.id);
});
};

var movieName;


// User Interface Logic ---------

$(document).ready(function() {
    $(".callMe").click(function(event){
    movieName= event.target.name;
    $(".movieName").append('<ul> <strong> <em>" ' + movieName + '"</em></strong></ul>');
    });
    attachContactListeners();
    $("form#userInfo").submit(function(event) {
      event.preventDefault();
    var inputName = $("input#name").val();
    var inputAge = $("input:radio[name=age]:checked").val();
    var inputTime = $("input:radio[name=time]:checked").val();

    $("input#name").val("");
    $("input:radio[name=age]:checked").val("");
    $("input:radio[name=time]:checked").val("");
    var newdetails = new customer(inputName, inputAge, inputTime, movieName);
    bookTickets.purchaseTicket(newdetails);
    displayCustomerDetails(bookTickets);

})
})
