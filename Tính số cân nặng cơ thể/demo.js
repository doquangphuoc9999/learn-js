let weight = document.getElementById("weight");
let height = document.getElementById("height");
let result = document.getElementById("result");
let bim = weight / (height ^ 2); 
function count(){
    if(bim < 18.5){
        result.innerHTML = "Result: " + "underweight";
    }
    else if(18.5 <= bim <= 25){
        result.innerHTML = "Result: " + "Normal";
    }
    else if(25 < bim <30){
        result.innerHTML = "Result: " + "Overweight";
    }
    else{
        result.innerHTML = "Result: " + "Obese";
    }
}




















// let weight = prompt("Enter weight: ", ' ');
// let height = prompt("Enter height: ", ' ');


// let bim = weight / (height ^ 2);

// if(bim < 18.5){
//     alert("underweight", bim);
// }
// else if(18.5 <= bim <= 25){
//     alert("Normal", bim);
// }
// else if(25 < bim <30){
//     alert("Overweight");
// }
// else{
//     alert("Obese", bim);
// }