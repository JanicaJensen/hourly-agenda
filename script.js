
$(function () {
  //Sets the date and time at the top of the page
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var currentTime = dayjs();
  $("#currentTime").text(currentTime.format('hh : mm A'));
  
  $("#clearBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  function hourCompare() {
    //sets the current hour variable using dayJS, this is for comparison purposes to change classes of past, present, future.
      var currentHour = dayjs().format('HH'); 
      //takes the ID of the time block and removes hour from it for comparison with our current hour
      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);
          console.log(blockHour, currentHour)
          if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
          }
          else if (blockHour == currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
          
          }
          else { 
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
          }}
  
 ) }


//runs the function detailed above
hourCompare();
 //sets an event listener on the .saveBtn class and assigns key to local storage
 $(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id").split("hour")[1];
  localStorage.setItem(time, value);
});


 
  //this is populating the local storage into the time-blocks.
 $("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
 $("#11").val(localStorage.getItem("11"));
 $("#12").val(localStorage.getItem("12"));
 $("#13").val(localStorage.getItem("13"));
 $("#14").val(localStorage.getItem("14"));
 $("#15").val(localStorage.getItem("15"));
 $("#16").val(localStorage.getItem("16"));
 $("#17").val(localStorage.getItem("17"));
  })