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
    feed.innerHTML=`<div class="header"><h5>Home</h5></div>
    <div class="post">
      <div class="avatar">
        <img src="https://picsum.photos/10" />
      </div>
      <div class="textbox">
        <textarea placeholder="Whats's happening?" rows="3" cols="50"></textarea>
        <i class="fa fa-picture-o" aria-hidden="true"></i>
        <button class="btn">Tweet</button>
      </div>
    </div>`;
    console.log(array);
    let x=0;
    for (const tweet of array) {
        feed.innerHTML+=` <div class="cuerpo">
        <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/male/${x}.jpg" /></div>
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
        </div>
        </div>`
        x++;
    }
}