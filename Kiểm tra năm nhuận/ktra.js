let year = parseInt(prompt("Enter a year"));

if (year % 4 == 0) {
  if (year % 4 == 0) {
    if (year % 100 != 0) {
      alert(year + ":" + "This i a leap year");
    }
  }
  if (year % 100 == 0) {
    if (year % 400 != 0) {
      alert(year + ":" + "This not a leap year");
    }
  }
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      alert(year + ":" + "This is a leap year");
    }
  }
} else if (year % 4 != 0) {
  alert(year + ":" + "This not a leap year");
}
