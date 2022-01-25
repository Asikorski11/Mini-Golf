let par = 3;
let gameNum = 0;
let score = 0;

let gamer = prompt("Welcome to GC Mini Golf! What is your name?");
while (gameNum !== 3 && gameNum !== 6) {
  gameNum = prompt("Hi, gamer! Would you like to play 3 or 6 holes?");
  gameNum = Number(gameNum);
}

par = par * gameNum;

for (i = 0; i < gameNum; i++) {
	console.log(i);

  let holeNum = i + 1;

  let putts = prompt(`How many putts for hole ${holeNum}?`);
  
  score += Number(putts);
  
  console.log("holeNum", holeNum);
  console.log("putts", putts);
  console.log("score", "score");
}

if (score === par) {
	alert("Great job, gamer. Your total par was: 0");
} else if (score < par) {
	alert(`Great job, gamer. Your total par was: -${par - score}`);
} else {
	alert(`Nice try, gamer. Your total par was: +${score - par}`);
}
