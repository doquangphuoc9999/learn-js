let username = prompt("Who are you: ");

if (username == "Admin") {
  let pass = prompt("Enter password");
  if (pass == "Themaster") {
    alert("Welcome");
  } else if (pass == "null") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (username == "null") {
  alert("canceld");
} else {
  alert("I don’t know you");
}
