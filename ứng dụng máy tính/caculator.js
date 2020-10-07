let countone = document.getElementById("countone");
let counttwo = document.getElementById("counttwo");
let result = document.getElementById("result");

// console.log(document.getElementById("result"));
function addition() {
  result.innerHTML =
    "Kết quả:" + (Number(countone.value) + Number(counttwo.value));
}
function subtraction() {
  result.innerHTML =
    "Kết quả:" + (Number(countone.value) - Number(counttwo.value));
}
function multiplication() {
  result.innerHTML =
    "Kết quả:" + Number(countone.value) * Number(counttwo.value);
}
function division() {
  result.innerHTML =
    "Kết quả:" + Number(countone.value) / Number(counttwo.value);
}
