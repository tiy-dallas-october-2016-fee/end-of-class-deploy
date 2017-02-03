$.ajax({
  url: 'https://www.googleapis.com/youtube/v3/search?q=minecraft&key=AIzaSyCsfwKZq88-qClFpNJKLgGXO6QfqDSgu-k&part=snippet'
})
.done(function(data) {
  console.log('Look at this --> ', data);

  var outputUL = document.querySelector('#output');

  data.items.forEach((item) => {
    console.log(item);

    var li = document.createElement('li');

    var img = document.createElement('img');
    img.src = item.snippet.thumbnails.medium.url;
    li.appendChild(img);

    var channel = document.createElement('a');
    channel.href = 'https://www.youtube.com/channel/' + item.snippet.channelId;
    channel.textContent = item.snippet.channelTitle;
    li.appendChild(channel);

    outputUL.appendChild(li);
  });

});
