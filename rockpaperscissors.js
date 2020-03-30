

var hand = ['rock', 'paper', 'scissors'];

function getHand(){
	let rand = Math.random();

	if(rand <= 0.333){
		return hand[0];
	} else if(rand <= 0.666){
		return hand[1];
	} else{
		return hand [2];
	}
}

var computerHand = getHand();
var userHand = getHand();

console.log(userHand);
console.log(computerHand);

function compare(){
if (computerHand == userHand){
	return "Computer: " + computerHand + "\nYou:" + userHand + "\nThe result is a tie!";
}

if(computerHand=="rock"){
        if(userHand=="scissors"){
            return "Computer: " + computerHand + "\nYou: " + userHand + "\nYou lost HAHA!";
        }
        else{
            return "Computer: " + computerHand + "\nYou: " + userHand + "\nYou won YAY!";
        }
    }
if(computerHand=="paper"){
        if(userHand=="rock"){
            return "Computer: " + computerHand + "\nYou: " + userHand + "\nYou LOST MWAHAHAHA!";
        }
        else{
            return "Computer: " + computerHand + "\nYou: " + userHand + "\nYou won, YEET!";
        }
    }
if(computerHand=="scissors"){
        if(userHand=="rock"){
            return "Computer: " + computerHand + "\nYou: " + userHand + "\nYou won YAY!";
        }
        else{
            return "Computer: " + computerHand + "\nYou: " + userHand + "\nYou lost HAHAHAHAHA!";
        }
    }
};

console.log(compare(userHand,computerHand));

/*GEORGE"S CODE
var playerWin = 0;
var computerWin = 0;
​
function playGame(player1, computer2, playUntil){
    
    
    while(playerWin < playUntil && computerWin < playUntil){
        // choice[0] = 'rock', choice[1] = 'paper', choice[2] = 'scissors'
        var choice = ['rock', 'paper', 'scissors']; 
​
        function getChoice() {
​
            let rand = Math.random();
​
            if (rand < 0.34 ){
                return choice[0];
            }else if (rand < 0.67 ){
                return choice[1];
            }else{
                return choice[2];
            }
        }
​
        var computerChoice = getChoice();
        var userChoice = getChoice();
​
        console.log(player1 + ' you have ' + playerWin)
        console.log(computer2 + ' you have ' + computerWin)
​
        function compare() {
            if(computerChoice == userChoice){
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
            }
​
            if(computerChoice == 'rock'){
                if(userChoice == 'scissors'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
            
            if(computerChoice == 'paper'){
                if(userChoice == 'rock'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
​
            if(computerChoice == 'scissors'){
                if(userChoice == 'paper'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
            
        }
​
        console.log(compare());
    }
​
    console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
}
​
playGame('George', 'Computer', 5);
​
// console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
*/

/* FIRST ATTEMPT
function hands(){
var random = (parseInt(Math.random()*10)%3);

if (random = 0){
	random = 'rock';
	// console.log('rock');
}else if(random = 1){
	random = 'paper';
	// console.log('paper');
}else{
	random = 'scissors';
	// console.log('scissors');
}

return random;
}

console.log(hands());
*/

/*
function getHand(){
	
	return (parseInt(Math.random()*10)%3);
}

console.log(getHand());*/



/*
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1==choice2){
        return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
    }
    if(choice1=="rock"){
        if(choice2=="scissors"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="paper"){
        if(choice2=="rock"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
    if(choice1=="scissors"){
        if(choice2=="rock"){
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou won!";
        }
        else{
            return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nYou lost!";
        }
    }
};

alert(compare(userChoice,computerChoice));
*/