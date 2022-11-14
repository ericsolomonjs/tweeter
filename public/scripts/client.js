/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function (object) {
  let fnArticle = '';
  let timeSince = Date() - object.content.created_at;
  let monthsSince = Math.trunc(timeSince / 1000 / 60 / 60 / 24 / 30);
  let daysSince = Math.trunc(timeSince / 1000 / 60 / 60 / 24);
  let hoursSince = Math.trunc(timeSince / 1000 / 60 / 60);
  let minutesSince = Math.trunc(timeSince / 1000 / 60);
  let secondsSince = Math.trunc(timeSince / 1000);

  let timeString = '';

  //choose appropriate
  if (monthsSince > 0) {
  timeString = `Posted ${monthsSince} ago.`;
  } else
  if (daysSince > 0) {
  timeString = `Posted ${daysSince} ago.`;
  } else
  if (hoursSince > 0) {
  timeString = `Posted ${hoursSince} ago.`;
  } else
  if (minutesSince > 0) {
  timeString = `Posted ${minutesSince} ago.`;
  } else
  if (secondsSince > 0) {
  timeString = `Posted ${secondsSince} ago.`;
  }
        
  //construct the new tweet with imported values
  if (object) {
    fnArticle = `<section class="tweet">
    <article class="tweet">
      <header>
        <div>
          <img src="${object.user.avatars}">
          <p class="username">${}</p>
        </div>
        <div>
          <p class="usertag">${object.user.handle}</p>
        </div>
      </header>
      <p class="tweet-content">
        ${object.content.text}
      </p>
      <hr></hr>
      <footer>
        <div>
          <p class="time-since-posted">${timeString}</p>
        </div>
        <div>
          <p class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-share"></i>
            <i class="fa-solid fa-heart"></i>
          </p>
        </div>
      </footer>
    </article>
  </section>`;
  }
  return fnArticle;
}

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

module.exports = {createTweetElement}; 