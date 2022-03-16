function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, userMove, result, userResult, compResult;

userMove = prompt("Wprowadz liczbe: 1-kamien, 2-nozyce. 3-papier");
console.log("Uzytkownik wpisal " + userMove);

if (userMove == 1) {
    userMove = "kamien"
    printMessage("Wybrales kamien")
} else if (userMove == 2) {
    userMove = "nozyce"
    printMessage("Wybrales nozyce")
} else if (userMove == 3) {
    userMove = "papier"
    printMessage("Wybrales papier")
} else {
    printMessage("Jestes idiota")
};

computerMove = Math.floor(Math.random() * 3 + 1);
console.log("Komputer wybral " + computerMove);

if (computerMove == 1) {
    computerMove = "kamien"
    printMessage("Komputer wybral kamien")
} else if (computerMove == 2) {
    computerMove = "nozyce"
    printMessage("Komputer wybral nozyce")
} else if (computerMove == 3) {
    computerMove = "papier"
    printMessage("Komputer wybral papier")
};

userResult = 0;
compResult = 0;

if (userMove == "kamien" && computerMove == "nozyce") {
    printMessage("Wygrales")
    userResult = userResult + 1
} else if (userMove == "papier" && computerMove == "kamien") {
    printMessage("Wygrales")
    userResult = userResult + 1
} else if (userMove == "nozyce" && computerMove == "papier") {
    printMessage("Wygrales")
    userResult = userResult + 1
} else if (userMove == computerMove) {
    printMessage("Remis!")
} else {
    printMessage("Przegrales")
    compResult = compResult + 1
}

printMessage("Komputer " + compResult + ":" + userResult + " Gracz");


