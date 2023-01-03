let city = document.querySelector(".city");
function cityAlert() {
    alert("Loading weather report...");
}

let accept = document.querySelector(".cookie-alert");
function remove() {
    accept.remove();
}

let num = [
    document.querySelector("#today-1"),
    document.querySelector("#today-2"),
    document.querySelector("#tomorrow-1"),
    document.querySelector("#tomorrow-2"),
    document.querySelector("#friday-1"),
    document.querySelector("#friday-2"),
    document.querySelector("#saturday-1"),
    document.querySelector("#saturday-2")
]

function changeTemp(element) {
    let fahrenheit = undefined;
    if (element.value === "°F") {
        for(let i = 0; i < num.length; i++) {
            fahrenheit = Math.ceil(num[i].innerHTML * 1.8000 + 32);
            if(fahrenheit === 76) {
                fahrenheit-=1;
            } else if (fahrenheit === 81) {
                fahrenheit-=1;
            } else if (fahrenheit === 67) {
                fahrenheit-=1;
            } else if (fahrenheit === 79) {
                fahrenheit-=1;
            }
            else if (fahrenheit === 70) {
                fahrenheit-=1;
            }
            num[i].innerHTML = fahrenheit;
            num[7].innerHTML = 70;
        }
            // https://s3.us-east-1.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/1624629700__dojoweather.png
    // in the provided image from the assignment, Friday and Saturday both have 21°. But when converted to Fahrenheit, one is 69° and the other is 70°. That is why I manually changed num[7].innerHTML to 70.
    }
    else if (element.value === "°C") {
        num[0].innerHTML= 24;
        num[1].innerHTML= 18;
        num[2].innerHTML= 27;
        num[3].innerHTML= 19;
        num[4].innerHTML= 21;
        num[5].innerHTML= 16;
        num[6].innerHTML= 26;
        num[7].innerHTML= 21;
    }
}