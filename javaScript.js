"use strict";
let bill = 0,
  tipPersent = 0,
  peopleNum = 0;

const submit = document.getElementById("reset");
submit.addEventListener("click", myFunction1);
function myFunction1() {
  bill = document.getElementById("billInput").value;
  tipPersent = document.getElementById("perInput").value;
  peopleNum = document.getElementById("pNumInput").value;
  let tipvalue = (bill / 100) * tipPersent;
  let show1 = tipvalue / peopleNum;
  let show2 = bill / peopleNum + show1;

  document.getElementById("monitor1").innerHTML = ` $${show1.toFixed(2)}`;
  document.getElementById("monitor2").innerHTML = ` $${show2.toFixed(2)}`;
  asdsadsdsa;
}
function settip() {
  document.getele;
}
//---------------------------------------------------------------------------------  change inner Html to an imput value
//  let set = document.getElementById("myText").value;
// document.getElementById("sos").innerHTML = "set";

//---------------------------------------------------------------------------------  set attrebute ( class & ...)
// let set = document.getElementById("myText").value;
// document.getElementById("sos").setAttribute("class", "democlass");

//---------------------------------------------------------------------------------  set attrebute ( class & ...)
// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction1);
// function myFunction1() {
//   document.getElementById("demo").innerHTML += "First function was executed! "
// }
