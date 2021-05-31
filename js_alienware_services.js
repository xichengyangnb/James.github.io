let d = new Date();
alert("Today's date is "+ d);

function oneFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good Morning,My customers";
  } else if (time < 18) {
    greeting = "Good Afternoon,My customers";
  } else {
    greeting = "Good Night,My customers";
  }
  document.getElementById("happy").innerHTML = greeting;
}