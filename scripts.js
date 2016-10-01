var btn = document.createElement("button");
var text = document.createTextNode("Add A Die");

//create global counter to count dice on the page
var counter = 0;

var rollDice = function() {
    var instances = [];
    window.Die = function() {
        instances.push(this);
    };
    window.Die.prototype.select = function() {
        for( var i=0, l=instances.length; i<l; i++) instances[i].value = Math.floor((Math.random()*6)+1);    
    };
};

btn.addEventListener('click', addDie);
btn.style.margin = '20px';
btn.style.display = 'inline';
btn.appendChild(text);
document.body.appendChild(btn);

//adding die
function addDie() {
    //creating square
    var die = document.createElement('div');
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
    die.value = Math.floor((Math.random()*6)+1);
    //increase counter everytime you addDie
    counter++;
    die.innerHTML = die.value;

    //assign counter as the id
    die.id = counter;

    //put the die on the page
    document.body.appendChild(die);
    
    };
