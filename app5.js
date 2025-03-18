// card.innerHTML=content;
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   taks() {
//     console.log("he talks");
//   }
// }
// class Student extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
//   taks() {
//     console.log("he talks");
//   }
// }
// class Studen2 extends Person {
//   constructor(name, age) {
//     super(name, age);
//   }
//   taks() {
//     console.log("he talks");
//   }
// }
// let p11 = new Studen2("junaid", 11);
//////////// question=>1
// console.log("hello world");
//////////question=>2
// function func() {  question=>2
//   let a = parseInt(prompt("enter num one"));
//   let b = parseInt(prompt("enter num two"));
//   let c = a + b;
//   console.log(c);
// }
// func();

////////// question=>3
// function func() {
//   let number = parseInt(prompt("enter number"));
//   if (number % 2 == 0) {
//     console.log(`the number ${number} is even`);
//   } else if (!number % 2 == 0) {
//     console.log(`the number ${number} is odd`);
//   } else {
//     console.log(" Nan");
//   }
// }
// func();

////////////  question=>4
// let num1 = parseInt(prompt("enter num one"));
// let num2 = parseInt(prompt("enter num two"));
// let num3 = parseInt(prompt("enter num three"));
// let max = 0;
// function a(...argu) {
//   const vari = Math.max(max, ...argu);
//   console.log(vari);
// }
// a(num1, num2, num3);

// method 2
// let num1 = parseInt(prompt("enter num one"));
// let num2 = parseInt(prompt("enter num two"));
// let num3 = parseInt(prompt("enter num three"));
// let large;

// if (num1 >= num2 && num1 >= num3) {
//   large = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   large = num2;
// } else {
//   large = num3;
// }
// console.log(`largest number is ${large}`);
///////////   question=>5
// let st=prompt("enter a string");
// function reverse(str) {
//   let string = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     string += str[i];
//   }
//   return string;
// }
// const a=reverse(st);
// console.log(a);
////////////   question=>6
// function func(str) {
//  const count = str.match(/[aeiou]/gi).length;
//   return count;
// }
// const st=prompt("enter a string");
// const res=func(st);
// console.log(res);
////////////   question=>7
// let number = parseInt(prompt("enter number"));
// function func(n) {
//   let num=1;
//   for (let i = 1; i <= n; i++) {
//     num = num * i;
//   }
//   return num;
// }
// const num2 = func(number);
// console.log(num2);
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
          }, 500);
        }
      }
    }
  }
}
