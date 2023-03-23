
$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var currentTime = dayjs();
  $("#currentTime").text(currentTime.format('HH : mm A'));
  var singleHourCurrent = dayjs().format('h');
 
  $(".saveBtn").on ("click", function() {
    console.log(this);
    console.log("sup")
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");
   
    localStorage.setItem(time, text);
  })
 
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
 
  
  function hourCompare() {
  
    var currentHour = dayjs().format('HH'); 
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

    if (blockHour < currentHour) {
      $(this).addClass("past");
      // $(this).removeClass("future");
      // $(this).removeClass("present");
    }
    else if (blockHour == currentHour) {
      // $(this).removeClass("past");
      $(this).addClass("present");
      // $(this).removeClass("future");
  
    }
    else { 
      // $(this).removeClass("present");
      // $(this).removeClass("past");
      $(this).addClass("future");
    }})}
    hourCompare();
  })
