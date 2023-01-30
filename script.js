console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
//func to change the turn
const changeturn = () => {
  turn = turn === "X" ? "0" : "X";
};
//function to check for a win
const checkwin = () => {};
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxtext = box.querySelector(".boxtext");
  box.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      changeturn();
      audioturn.play();
      checkwin();
      document.querySelector(".inf0").innerText = "turn for" + turn;
    }
  });
});
