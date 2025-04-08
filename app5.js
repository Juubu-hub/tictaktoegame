const button = document.querySelectorAll(".box");
const resetButton = document.querySelector("#restart");
let player1 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

for (const e of button) {
  e.addEventListener("click", clickButton);

  function clickButton() {
    if (player1) {
      console.log((e.innerText = "X"));
      player1 = false;
      e.disabled = true;
      win();
    } else {
      console.log((e.innerText = "O"));
      player1 = true;
      e.disabled = true;
      win();
    }
  }
  resetButton.addEventListener("click", update);
  function update() {
    e.innerText = "";
    e.disabled = false;
  }
  function win() {
    for (const el of winPatterns) {
      let p1 = button[el[0]].innerText;
      let p2 = button[el[1]].innerText;
      let p3 = button[el[2]].innerText;
      if (p1 != "" && p2 != "" && p3 != "") {
        if (p1 === p2 && p2 === p3) {
          setTimeout(() => {
            alert("you win");
            acc();
          }, 500);
        }
      }
    }
  }
  function acc() {
    for (let ele of button) {
      ele.innerText = "";
    }
  }
}
