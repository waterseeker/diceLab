$(document).ready(function() {
    

var btn = document.createElement("button");
var text = document.createTextNode("Add A Die");

//create global counter to count dice on the page
var counter = 0;
                
btn.addEventListener('click', addDie);
btn.style.margin = '20px';
btn.style.display = 'inline';
btn.appendChild(text);
document.body.appendChild(btn);

//adding die
function addDie() {
    //creating square
    var die = document.createElement('div');
    var value = Math.floor((Math.random()*6)+1);
    die.className = "Die";
    die.style.color = 'white';
    //modifying square
    die.style.backgroundColor='black';
    die.style.height='50px';
    die.style.width='50px';
    die.style.display="inline-block";
    die.style.margin='10px';
    die.style.textAlign='center';
    die.style.lineHeight='50px';
    //die.value = Math.floor((Math.random()*6)+1);
    //increase counter everytime you addDie
    counter++;
    //assign counter as the id
    die.id = counter;
    //assigns the class "dice" to the die
    die.class = "dice";
    die.innerHTML = 0;
    //put the die on the page
    document.body.appendChild(die);
    //die.innerHTML = die.value;
    // assign new value to the die when the roll die button is clicked.
        function rollDice () {
            var value = Math.floor((Math.random()*6)+1);
            this.innerHTML = this.value;
                
        } // end of rollDice
            }; // end of addDie function

function rollAllDice () {
    var diceList = document.getElementsByClassName ("dice");
    [].forEach.call(diceList, function (el) {
        var value = Math.floor((Math.random()*6)+1);
        this.innerHTML = this.value;});
};//end of rollAllDice

 document.getElementById("rollBtn").onclick = function() {rollAllDice()};       

    

});///end of document.ready    
    
    
