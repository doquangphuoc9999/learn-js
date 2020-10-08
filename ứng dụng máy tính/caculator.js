let countone = document.getElementById("countone");
let counttwo = document.getElementById("counttwo");
let result = document.getElementById("result");

function printResult(input) {
  result.innerHTML = "Kết quả: " + input;
}
// console.log(document.getElementById("result"));
function addition() {
  printResult(Number(countone.value) + Number(counttwo.value));
}
function subtraction() {
  printResult(Number(countone.value) - Number(counttwo.value));
}
function multiplication() {
  printResult(Number(countone.value) * Number(counttwo.value));
}
function division() {
  printResult(Number(countone.value) / Number(counttwo.value));
}
