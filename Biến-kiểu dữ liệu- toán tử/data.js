let physical = parseInt(prompt("Enter physical scores: "));
let chemistry = parseInt(prompt("Enter chemistry scores"));
let biological = parseInt(prompt("Enter biological scores"));

let medium = (physical + chemistry + biological) / 3;
document.write("Medium is: " + medium);
