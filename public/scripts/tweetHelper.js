const createTweetElement = function (object) {
  const timeSince = Date.now() - object.created_at;

  let fnArticle = '';

  //call getTimeString to create the time since posted string
  const timeString = getTimeString(timeSince);
  

  if (!object.user.avatars) {
    object.user.avatars = "https://i.imgur.com/nlhLi3I.png";
  }

  //construct the new tweet with imported values
  if (object) {
    fnArticle = `
    <article class="tweet">
      <header>
        <div>
          <img src="${object.user.avatars}">
          <p class="username">${object.user.name}</p>
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
  `;
  }
  return fnArticle;
}

const renderTweets = function (objArray) {
  $("article.tweet").replaceWith();

  //reverse order with object.keys > reverse > foreach()
  const reversedKeys = Object.keys(objArray).reverse();
  
  reversedKeys.forEach(element => {
    $("#tweets-area").append(createTweetElement(objArray[element]));
  });
  return;
}

const loadTweets = function () {
  $.get('/tweets/', (data) => {})
  .done((data) => {
    renderTweets(data);
  })
};