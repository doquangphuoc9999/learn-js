const price = {
  VND: 23000,
  USD: 1,
  EUR: 0.85,
};
const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");

function convert() {
  let fromto = from.value + "_" + to.value;
  switch (fromto) {
    case "vietnam_vietnam":
      result.innerHTML = "kết quả: " + amount.value + " " + "VNĐ";
      break;
    case "vietnam_USD":
      result.innerHTML = "Kết quả: " + amount.value * 23000 + " " + "USD";
      break;
    case "vietnam_Euro":
      result.innerHTML = "Kết quả: " + amount.value / 27200 + " " + "EURO";
      break;
    case "USD_vietnam":
      result.innerHTML = "Kết quả: " + amount.value / 23000 + " " + "VNĐ";
      break;
    case "USD_USD":
      result.innerHTML = "Kết quả: " + amount.value + " " + "USD";
      break;
    case "Euro_vietnam":
      result.innerHTML = "Kết quả: " + amount.value * 27200 + " " + "VNĐ";
      break;
    case "Euro_USD":
      (result.innerHTML = "Kết quả: " + amount.value * 1), 18 + " " + "USD";
      break;
    case "USD_Euro":
      (result.innerHTML = "Kết quả: " + amount.value * 0), 85 + " " + "EURO";
      break;
    case "Euro_Euro":
      result.innerHTML = "Kết quả: " + amount.value + " " + "EURO";
      break;
  }
}
// Trường hợp 2
// function show() {
//     //   alert(amountDOM.value);
//     console.log(amountDOM.value, fromDom.value, toDOm.value);
//     if (fromDom.value === "USD" && toDOm.value === "vietnam") {
//       resultDOm.innerHTML = amountDOM.value * 23000;
//     }
//     console.log(amountDOM.value, fromDom.value, toDOm.value);
//     if (fromDom.value === "vietnam" && toDOm.value === "USD") {
//       resultDOm.innerHTML = amountDOM.value / 23000;
//     }
//     console.log(amountDOM.value, fromDom.value, toDOm.value);
//   }
