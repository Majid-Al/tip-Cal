"use strict";
let bill = "",
  tipPersent = "",
  peopleNum = "";

//----------------------- to take tip percent from buttom and show the selected one
function setPercent(percent) {
  let some = document.getElementsByClassName("theSelectedButton");
  for (const theSelectedButton of some) {
    theSelectedButton.classList.remove("theSelectedButton");
    theSelectedButton.setAttribute("class", "regulator");
  }
  let some2 = document.getElementsByClassName("theSelectedButton2");
  for (const theSelectedButton2 of some2) {
    theSelectedButton2.classList.remove("theSelectedButton2");
    theSelectedButton2.setAttribute("class", "regulator2");
  }
  event.target.setAttribute("class", "theSelectedButton");
  document.getElementById("perInput").value = "";
  tipPersent = percent;
  calculateFunc();
}
function setPercent2(percent) {
  let some = document.getElementsByClassName("theSelectedButton");
  for (const theSelectedButton of some) {
    theSelectedButton.classList.remove("theSelectedButton");
    theSelectedButton.setAttribute("class", "regulator");
  }
  let some2 = document.getElementsByClassName("theSelectedButton2");
  for (const theSelectedButton2 of some2) {
    theSelectedButton2.classList.remove("theSelectedButton2");
    theSelectedButton2.setAttribute("class", "regulator2");
  }
  event.target.setAttribute("class", "theSelectedButton2");
  document.getElementById("perInput").value = "";
  tipPersent = percent;
  calculateFunc();
}
function tipInputFunc() {
  tipPersent = document.getElementById("perInput").value;
  let some = document.getElementsByClassName("theSelectedButton");
  for (const theSelectedButton of some) {
    theSelectedButton.classList.remove("theSelectedButton");
    theSelectedButton.setAttribute("class", "regulator");
  }
  let some2 = document.getElementsByClassName("theSelectedButton2");
  for (const theSelectedButton2 of some2) {
    theSelectedButton2.classList.remove("theSelectedButton2");
    theSelectedButton2.setAttribute("class", "regulator2");
  }
  calculateFunc();
}
//-----------------------------------------------------------------RESET BUTTOM
function resetAll() {
  (bill = 0), (tipPersent = 0), (peopleNum = 0);
  document.getElementById("billInput").value = "";
  document.getElementById("perInput").value = "";
  document.getElementById("pNumInput").value = "";
  document.getElementById("monitor1").innerHTML = " $0.00";
  document.getElementById("monitor2").innerHTML = " $0.00";

  //---------------------- making the selected button disapear
  let some = document.getElementsByClassName("theSelectedButton");
  for (const theSelectedButton of some) {
    theSelectedButton.classList.remove("theSelectedButton");
    theSelectedButton.setAttribute("class", "regulator");
  }
  let some2 = document.getElementsByClassName("theSelectedButton2");
  for (const theSelectedButton2 of some2) {
    theSelectedButton2.classList.remove("theSelectedButton2");
    theSelectedButton2.setAttribute("class", "regulator2");
  }
}

function calculateFunc() {
  bill = document.getElementById("billInput").value;
  peopleNum = document.getElementById("pNumInput").value;

  if (bill != "" && tipPersent != "" && peopleNum != "") {
    let tipvalue = (bill / 100) * tipPersent;
    let show1 = tipvalue / peopleNum;
    let show2 = bill / peopleNum + show1;

    document.getElementById("monitor1").innerHTML = ` $${show1.toFixed(2)}`;
    document.getElementById("monitor2").innerHTML = ` $${show2.toFixed(2)}`;
  }
}
//--------------------------------------------------------------------------  change inner Html to an imput value
//  let set = document.getElementById("myText").value;
// document.getElementById("sos").innerHTML = "set";

//--------------------------------------------------------------------------  set attrebute ( class & ...)
// let set = document.getElementById("myText").value;
// document.getElementById("sos").setAttribute("class", "democlass");

//-----------------------------------------------------------------------  set attrebute ( class & ...)
// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction1);
// function myFunction1() {
//   document.getElementById("demo").innerHTML += "First function was executed! "
// }
