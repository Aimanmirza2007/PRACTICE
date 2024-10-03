///CHAPTER N0 09 PROMPT

//EXAMPLE NO 01 RELATED PROMPT

var userName = prompt("What is your name?");

var userAnswer = userName;

alert("Hello" + userName);

//EXAMPLE NO 02 RELATED PROMPT

var country = prompt("What is your favourite conutry?")

var favCountry = country

alert(`your favourite country is ${favCountry}`)

///CHAPTER N0 10 IF STATEMENT

//EXAMPLE NO 01 IF STATEMENT

var age = prompt("How old are you")

if (age <= 18) {

    alert("You are teenager")
}
else {
    alert("you are adult")
}

//EXAMPLE NO 02 IF STATEMENT

var vote = prompt("Dou you want to vote? Yes or no")

var candidate = prompt("Who do you want to vote for? (Candidate A or Candidate B)")

if (vote === "Yes" && candidate === "Candidate A" || "Candidate B") {

    alert(`you vote for ${candidate}. Thank you for your vote`)
}
else {
    alert("Thank you for your response!");
}
