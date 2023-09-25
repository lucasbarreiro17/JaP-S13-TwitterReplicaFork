const feed=document.querySelector(".feed");
const API_URL="https://my-json-server.typicode.com/MrGalletah/fake-twitter-API/posts";
console.log(feed)

fetch(API_URL)
    .then(response => response.json())
    .then(data => agregarTweets(data))
    .catch(error =>{
        console.log("Hubo un error:",error);
    })

function agregarTweets(array){
    feed.innerHTML="";
    console.log(array);
    for (const tweet of array) {
        let x=0;
        feed.innerHTML+=` <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/male/${x}.jpg" /></div>
        <div class="content">
          <div class="names">
            <p class="full-name">${tweet.name}</p>
            <p class="user-name">${tweet.name.replace(" ","_").toLowerCase()}</p>
            <p class="time">${new Date().toLocaleString()}</p>
          </div>
        </div>
        <div class="tweet-content">
          <p>${tweet.text}</p>
        </div>
        <div class="tweet-icons">
          <i class="fa fa-comment" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
        </div>`
        x++;
    }
}