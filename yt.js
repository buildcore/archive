// A JavaScript snippet that lists recent viral short videos from Youtube?

function getRecentViralVideos() {
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos",
        data: { 
            part: 'snippet', 
            chart: 'mostPopular',
            regionCode: 'US',
            videoCategoryId: '10'
         },
        success: function(response) {
            console.log(response);
            for(var i=0; i<response.items.length; i++) {
                var video = response.items[i];
                console.log(video.snippet.title);
            }
        }
    });
}

/*
function getRecentVideos() {
    $.ajax({
        url: "https://www.googleapis.com/youtube/v3/videos",
        data: {
            key: [API_KEY],
            part: 'snippet,statistics',
            chart: 'mostPopular',
            maxResults: 25
        },
        success: function(response) {
            console.log(response);
            var output;
            $.each(response.items, function(i, item) {
                console.log(item);
                videoTitle = item.snippet.title;
                videoId = item.id;
                output = '<li><iframe src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></li>';

                //Append to results listStyleType
                $('#results').append(output);
            })
        }

    });
}
*/

/* server.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  getRecentViralVideos();
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/


