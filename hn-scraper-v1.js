var xhr = new XMLHttpRequest();
var request = new XMLHttpRequest();
request.open('GET', 'https://hacker-news.firebaseio.com/v0/topstories.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log('Hacker News front page items for ' + new Date().toLocaleDateString() + ':');
    data.forEach(function(item, index) {
      console.log((index+1) + '. ' + item.title);
    });
  } else {
    // We reached our target server, but it returned an error
    console.log('Error scraping Hacker News front page');
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log('Error connecting to Hacker News');
};

request.send();
