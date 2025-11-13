/*
----- GOAL
Buttons that roll dice based on their respective values
I would prefer a single function that gets called when the button is clicked. 
That function then grabs the id (maybe the class?) of the button.
Then uses that same id/class to to pick the correct input field.
Then uses the value in that field to roll a number of d6 equal to that value.
Stores that as an array?
Shows the roll results in a popup window.

----- FUTURE GOALS
Include the number of successes based on the Favored/Natural/Neglected values for the given roll type.
Bonus points if we can work out logic for it to consider dynamic successes and failures.
Would need to store success in one array and failures in another and then check for doubles in the success array and 1s in the failures array

----
just a fun note, someone made a pretty rad module https://fantasticdice.games/
----

----- Thoughts
the most basic thing we already know is that Math.floor(Math.random()*6+1) is our d6. Easy peasy.
we also know that we can do it as alert() will print w/e is in the () as a message in a pop-up
the best move for rolling will be to set up a function that:
- is called on click
- which gets the related input value
- does a for loop, where each loop rolls the d6 and stores the value in an array
- then the alert pops up with the listed results from the roll

*/
// rollResult = [];
const attackButton = document.getElementById('attackButton');
const attackRoll = document.getElementById("attackRoll");
const defendButton = document.getElementById("defendButton");
const defendRoll = document.getElementById("defendRoll");
const magicRoll = document.getElementById("magicRoll");
const magicButton = document.getElementById("magicButton");
const awareRoll = document.getElementById("awareRoll");
const awareButton = document.getElementById("awareButton");
const resistRoll = document.getElementById("resistRoll");
const resistButton = document.getElementById("resistButton");

// Pass a function reference so rollDice runs only when the button is clicked
// it was running when the page opened before and this stopped that
attackButton.addEventListener("click", () => rollDice(Number(attackRoll.value)));
defendButton.addEventListener("click", () => rollDice(Number(defendRoll.value)));
magicButton.addEventListener("click", () => rollDice(Number(defendRoll.value)));
awareButton.addEventListener("click", () => rollDice(Number(defendRoll.value)));
resistButton.addEventListener("click", () => rollDice(Number(defendRoll.value)));

// set up the empty array
// this function will roll the dice, store them, and print them in the pop up. #of rolls will be called on the appropriate element
function rollDice(rollCount){
    const count = Number(rollCount);
    if (!Number.isFinite(count) || count <= 0) {
        alert('Please enter a positive number of dice to roll.');
        return;
    }
    const rollResult = [];
    for (let i = 0; i < Math.floor(count); i++) {
        rollResult.push(Math.floor(Math.random() * 6) + 1);
    }
    alert(rollResult);
}


// 