import "./styles.css";

("use strict");
var buttons = document.getElementsByTagName("button");
var disp = document.getElementById("display");
var op1 = 0;
var op2 = null;
var operand = null;

function evaluate() {
  var value = this.getAttribute("data-value");
  if (value == "+") {
    operand = "+";
    op1 = parseFloat(disp.textContent);
    disp.innerText = "";
  } else if (value == "-") {
    operand = "-";
    op1 = parseFloat(disp.textContent);
    disp.innerText = "";
  } else if (value == "*") {
    operand = "*";
    op1 = parseFloat(disp.textContent);
    disp.innerText = "";
  } else if (value == "/") {
    operand = "/";
    op1 = parseFloat(disp.textContent);
    disp.innerText = "";
  } else if (value == "%") {
    operand = "/";
    op1 = parseFloat(disp.textContent);
    disp.innerText = eval(op1 + "/100");
  } else if (value == "=") {
    op2 = parseFloat(disp.textContent);
    disp.innerText = eval(op1 + operand + op2);
  } else if (value == "ac") {
    disp.innerText = "";
  } else if (value == "clear") {
    var text = disp.textContent;
    var sub = text.substring(0, text.length - 1);
    disp.innerText = sub;
  } else {
    disp.innerText += value;
  }
}
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", evaluate);
}
