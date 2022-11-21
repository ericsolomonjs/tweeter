/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  //load tweets on page load  
  loadTweets();
  //initialise the char counter
  runCharCounter();
  //submit tweet logic
  $("form").submit(function (event) {
    event.preventDefault();
    $("#error-display").slideUp("fast");
    let data = $("form").serialize();
    const errorBox =  document.getElementById("error-display");
    //detect & handle incorrect data length errors
    if (data.length > 145) {
      errorBox.innerHTML = "<p>Your text is too long for a tweet!</p>";
      $("#error-display").slideDown("fast");
    } else if (data.length == 5) {
      errorBox.innerHTML = "<p>Please enter text in the tweet box!</p>";
      $("#error-display").slideDown("fast");
    } 
    //submit correct tweet and reset form
    else if (5 < data.length && data.length < 145) {
      errorBox.innerHTML = "";
      $.post("/tweets/", data, function () {
        event.preventDefault();
        loadTweets();
      })
      //reset form
      $("form").trigger("reset");
    }
  })
})
