const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
var newValue = 0;
var operations = [];

function operation(op) {
  operations.push(newValue);
  operations.push(op);
  currentValue = "";
  result.innerText = currentValue;
}
function evaluate(op) {
  var res = 0;
  if (op === "/") {
    res = operations[0] / newValue;
  } else if (op === "+") {
    res = parseInt(operations[0]) + parseInt(newValue);
  } else if (op === "-") {
    res = operations[0] - newValue;
  } else if (op === "*") {
    res = operations[0] * newValue;
  }

  result.innerText = Number.parseFloat(res).toPrecision(3);
  operations = [res];
}

document.querySelector(".buttons").addEventListener("click", function(event) {
  const selected_button = event.target.innerText;

  var res = 0;

  if (selected_button === "C") {
    operations = [];
    result.innerText = "";
  } else if (selected_button === "←") {
    var len = result.innerText.length;
    if (len === 1) {
      result.innerText = "0";
    } else {
      result.innerText = result.innerText.substring(0, len - 1);
    }
  } else if (selected_button === "÷") {
    operation("/");
  } else if (selected_button === "+") {
    operation("+");
  } else if (selected_button === "-") {
    operation("-");
  } else if (selected_button === "×") {
    operation("*");
  } else if (selected_button === "=") {
    evaluate(operations[1]);
  } else {
    currentValue = event.target.innerText;
    result.innerText += currentValue;
    newValue = result.innerText;
  }
});
