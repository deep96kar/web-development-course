function createCard(title, cName, views, monthsold, duration, thumbnail) {
  let views2;
  if (views < 1000) {
    views2 = views / 1000;
  } else if (views > 1000000) {
    views2 = views / 1000000 + "M";
  } else {
    views2 = views / 1000 + "K";
  }
  let html = ` <div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${views2} views . ${monthsold} months ago</p>
        </div>
      </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "introduction to backend | Sigma web dev video #2",
  "Deep karmakar",
  "50000",
  "7",
  "31.06",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
