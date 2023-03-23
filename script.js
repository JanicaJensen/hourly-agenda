
$(function () {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  var currentTime = dayjs();
  $("#currentTime").text(currentTime.format('HH : mm A'));
  var singleHourCurrent = dayjs().format('h');
 
    console.log(singleHourCurrent);
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on ("click", function() {
    console.log(this);
    console.log("sup")
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id");
   
    localStorage.setItem(time, text);
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
 
  //so here you added your singlecurrenthour variable as a compare, but you need
  //to check the id/class of the blocks inhtml to see what's actually being
  //compared as well as berify that it works with am/pm because the hours
  //will likely not match up at some point since 7 am is before 2 pm but 7>2
  function hourCompare() {
    $("time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, singleHourCurrent)

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present")
    }
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    })
  }
  hourCompare();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.var today = dayjs();

  
});
