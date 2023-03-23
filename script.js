
$(function () {
  //Sets the date at the top of the page and the military time 
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var currentTime = dayjs();
  $("#currentTime").text(currentTime.format('HH : mm A'));
  
 //sets an event listener on the .saveBtn class
  $(".saveBtn").on ("click", function() {
    //creates variables for the user input in the time block description sections and the time in the time block
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");
   //sets items to local storage in format of time, text.
    localStorage.setItem(time, text);
  })
 //retrieves the elements that match the id hour#, must use military time numbers for easier comparison.
  $("#hour8.description").val(localStorage.getItem("hour8"));
  $("#hour9.description").val(localStorage.getItem("hour9"));
  $("#hour10.description").val(localStorage.getItem("hour10"));
  $("#hour11.description").val(localStorage.getItem("hour11"));
  $("#hour12.description").val(localStorage.getItem("hour12"));
  $("#hour13.description").val(localStorage.getItem("hour13"));
  $("#hour14.description").val(localStorage.getItem("hour14"));
  $("#hour15.description").val(localStorage.getItem("hour15"));
  $("#hour16.description").val(localStorage.getItem("hour16"));
  $("#hour17.description").val(localStorage.getItem("hour17"));
 
  //the function that comares the current time vs time of the description text is below
  function hourCompare() {
  //sets the current hour variable using dayJS
    var currentHour = dayjs().format('HH'); 
    //takes the ID of the time block and removes hour from it for comparison with our current hour
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)
/*assigns classes based on the equality of the times. I wasn't sure if I needed to leave in the 
remove/remove because I suppose if you leave the page open long enough, eventually multiple classes could be
applied to one time-block, so I left the removal in for redundancy. */
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
    }})}
    //runs the function detailed above
    hourCompare();
  })
