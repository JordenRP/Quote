var color = ['#035024', '#F2C94C', '#B84646', '#452352', '#533316', '#103244', '#5F2828'];

  var quote_text = document.getElementById('quote-text');
  var quote_autor = document.getElementById('quote-autor');
  var port_img = document.getElementById('port_img');
  var butt = document.getElementById('button');
  var elem = document.querySelector('img');
  var tweet = document.getElementById('tweet');

 getObj(); 

 function getObj () {
   var xhr = new XMLHttpRequest ();
   xhr.open('GET', 'https://api.myjson.com/bins/13buf1');
   xhr.onload = function(evt) {
     var rawData = evt.target.response;
     loaderObj = JSON.parse(rawData);
     
     getQuote(loaderObj);
     }
   
   xhr.send();
 }


function getQuote(sad) {
  var randomQuote = Math.floor(Math.random() * 15);
  var random = Math.floor(Math.random() * 7);
  var currentColor = color[random];
  var obj = sad[randomQuote];

  document.body.firstElementChild.lastElementChild.className = obj.backg;
  elem.setAttribute("src", obj.port);
  quote_autor.innerHTML = obj.autor;
  quote_text.innerHTML = obj.quote;
  port_img.style.backgroundColor = currentColor;
  butt.style.backgroundColor = currentColor;
  
  tweet.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=TwitterStories%2C&original_referer=https%3A%2F%2Fs.codepen.io%2Fboomerang%2FiFrameKey-2f1504bd-7bcc-f9cd-7645-05f4dbc2f18f%2Findex.html%3Feditors%3D1000&ref_src=twsrc%5Etfw&text='+obj.quote+'%20-'+obj.autor+'&tw_p=tweetbutton')
};


butt.addEventListener("click", getObj);

  