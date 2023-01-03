var numberLikes = 3;
let likes = document.querySelector("span");
console.log(likes);
console.log(numberLikes)

function plusLikes(element){
    numberLikes++;
    likes.innerText=numberLikes + " likes(s)";
}