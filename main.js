const feed=document.querySelector(".tweets");
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

}