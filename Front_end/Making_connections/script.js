console.log("page loaded...");

let nameS = document.querySelector(".change");
function changer(){
    nameS.innerHTML = "Jannet Smith";
};

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let yourConnections = document.querySelector(".upCount");
let yourFriends = 418;
let connectionRequests = document.querySelector(".downCount");
let yourRequests = 2;

function acceptOne() {
    one.innerHTML = "";
    yourFriends++;
    yourConnections.innerHTML = yourFriends;
    yourRequests--;
    connectionRequests.innerHTML = yourRequests;
};
function acceptTwo() {
    two.innerHTML = "";
    yourFriends++;
    yourConnections.innerHTML = yourFriends;
    yourRequests--;
    connectionRequests.innerHTML = yourRequests;
};
function rejectOne() {
    one.innerHTML = "";
    yourRequests--;
    connectionRequests.innerHTML = yourRequests;
};
function rejectTwo() {
    two.innerHTML = "";
    yourRequests--;
    connectionRequests.innerHTML = yourRequests;
};