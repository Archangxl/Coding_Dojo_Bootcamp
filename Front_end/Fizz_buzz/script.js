let coding = document.querySelector("h1");

function codingChallenge() {
    for(let i = 1; i < 101; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
            coding.innerHTML += "<p>FizzBuzz</p>";
        } else if(i % 3 === 0) {
            console.log("Fizz");
            coding.innerHTML += "<p>Fizz</p";
        } else if(i % 5 === 0 ) {
            console.log("Buzz");
            coding.innerHTML += "<p>Buzz</p";
        } else {
            console.log(i);
            coding.innerHTML += "<p>"+ i +"</p>";
        };
    };
};
codingChallenge();
