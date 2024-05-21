const cellElements = document.querySelectorAll(".cell")
const BoardElement = document.getElementById("Board")
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_O_Turn = false
const Player_X = "X"
const Player_O = "O"
const Board = [
	"", "", "", "", "", "", "", "", ""
]
const Winning_Combination = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];
for (let i = 0; i < cellElements.length; i++) {
	const element = cellElements[i];
	element.setAttribute("id",i)
	element.addEventListener('click', function(){
		console.log(this.id);
		onTurn(this.id)
	})
	
}
function updateElements() {
	for (let i = 0; i < Board.length; i++) {
		const element = Board[i];
		cellElements[i].innerHTML = element
		
	}
}
updateElements();




function startGame() {
	isPlayer_O_Turn = false
	restartButton.style.display = "none"
	winningMessageTextElement.innerHTML = "";
	for(let i = 0; i < Board.length; i++){
		Board[i] = "";
	}
	updateElements();
}
startGame()
//restartButton.addEventListener('click', startGame)
function onTurn(index) {
	let playerTurn;
	if(isPlayer_O_Turn){
		playerTurn = Player_O
	}else {
		playerTurn = Player_X
	}
	if(Board[index] == "" ){
	Board[index] = playerTurn
	updateElements()
	CheckWins(playerTurn);
	isPlayer_O_Turn = !isPlayer_O_Turn
	}
}


function CheckWins(playerTurn) {
	let hasWon = false; 
	for (let i = 0; i < Board.length/3; i++) {
		if (Board[i*3] == Board[i*3+1] && Board[i*3+1] == Board[i*3+2] && Board[i*3] != ""){
			console.log("Horizontal win");
			hasWon = true;
		}
		
	}
	for (let i = 0; i < Board.length/3; i++) {
		if (Board[i] == Board[i+3] && Board[i+3] == Board[i+6] && Board[i] != ""){
			console.log("Vertical win");
			hasWon = true;
		}
		
	}
	if(Board[0] == Board[4] && Board[4] == Board[8] && Board[0] != ""){
		console.log("Diagonal win");
		hasWon = true;
	}	if(Board[2] == Board[4] && Board[4] == Board[6] && Board[2] != ""){
		console.log("Diagonal win");
		hasWon = true;
	}if(hasWon){
		Win(playerTurn);
	}
}

function Win(playerTurn){
	console.log("Player "+playerTurn+" Has won")
	winningMessageTextElement.innerHTML = "Player "+playerTurn+" Has won"
	restartButton.style.display = "block"
}