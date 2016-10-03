$(document).ready(function() {
    
//create an Add A Die button
var btn = document.createElement("button");
var text = document.createTextNode("Add A Die");

btn.addEventListener('click', addDie);
btn.style.margin = '20px';
btn.style.display = 'inline';
btn.appendChild(text);
document.body.appendChild(btn);

//create a Roll Dice button

var rollBtn = document.createElement("button");
var rollBtnText = document.createTextNode("Roll Dice");
rollBtn.addEventListener('click', rollAllDice);
rollBtn.style.margin = '20px';
rollBtn.style.display = 'inline';
rollBtn.appendChild(rollBtnText);
document.body.appendChild(rollBtn);

//create a sum button
var sumBtn = document.createElement("button");
var sumText = document.createTextNode("Sum Dice");
sumBtn.addEventListener('click', sumDie);
sumBtn.style.margin = '20px';
sumBtn.style.display = 'inline';
sumBtn.appendChild(sumText);
document.body.appendChild(sumBtn);

  
function sumDie() {
   var currentDie = document.getElementsByClassName("Die");;
   var total = 0;
   for (var i = 0; i < currentDie.length; i++) {
       total += currentDie[i].value;
   }
   alert("The sum of all the die is equal to " + total);
}


//create global counter to count dice on the page
var counter = 0;
                


//adding die
function addDie() {
    //creating square
    var die = document.createElement('div');
    var value = Math.floor((Math.random()*6)+1);
    die.className = "Die";
    die.style.color = 'white';
    //styling die
    die.style.backgroundImage="url('http://www.quarter-sawnflooring.com/images/curly-Cherry.jpg')";
    die.style.height='50px';
    die.style.width='50px';
    die.style.display="inline-block";
    die.style.margin='10px';
    die.style.textAlign='center';
    die.style.lineHeight='50px';
    die.value = Math.floor((Math.random()*6)+1);
    //increase counter everytime you addDie
    counter++;
    //put the die on the page
    document.body.appendChild(die);
    die.innerHTML = die.value;
    }; // end of addDie function

function reRollDice() {
    //creating square
    var die = document.createElement('div');
    var value = Math.floor((Math.random()*6)+1);
    die.className = "Die";
    die.style.color = 'white';
    //styling die
    die.style.backgroundImage="url('http://www.quarter-sawnflooring.com/images/curly-Cherry.jpg')";
    die.style.height='50px';
    die.style.width='50px';
    die.style.display="inline-block";
    die.style.margin='10px';
    die.style.textAlign='center';
    die.style.lineHeight='50px';
    die.value = Math.floor((Math.random()*6)+1);
    //put the die on the page
    document.body.appendChild(die);
    die.innerHTML = die.value;
    }; // end of addDie function


            function rollAllDice() {
                var functionCounter = 0
                var numDiceCounter = document.getElementsByClassName("Die").length;
                $('.Die').remove();
                for (;functionCounter < numDiceCounter; functionCounter++) {
                reRollDice();

                }
            } 
           

// example of forEach loop
// function myFunction(item,index,arr) {
//     arr[index] = item * document.getElementById("multiplyWith").value;
//     demo.innerHTML=numbers;
//     }
        
    // for (i = 0; i < diceList.length; i++) {
    // diceList[i].innerHtml = Math.floor((Math.random()*6)+1);
    //     }
      

});///end of document.ready    
    
    
