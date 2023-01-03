let nichole = document.querySelector(".Nichole");
let nicholeLikes = 12
let neil = document.querySelector(".Neil");
var neilLikes = 9;
let jim = document.querySelector(".Jim");
var jimLikes = 9;

function plusNichole(element){
    nicholeLikes++;
    nichole.innerText=nicholeLikes + " likes(s)";
}
function plusNeil(element){
    neilLikes++;
    neil.innerText=neilLikes + " likes(s)";
}
function plusJim(element){
    jimLikes++;
    jim.innerText=jimLikes + " likes(s)";
}