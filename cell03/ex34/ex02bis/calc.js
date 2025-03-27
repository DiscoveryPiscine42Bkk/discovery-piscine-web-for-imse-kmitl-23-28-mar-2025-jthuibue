$(document).ready(function() {
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);

  $('form').submit(function() {
    const checkNum1 = $('#num1').val();
    const checkNum2 = $('#num2').val();
    const operator = $('#operator').val();
    
    if (isNaN(checkNum1) || isNaN(checkNum2) || checkNum1 % 1 != 0 || checkNum2 % 1 != 0) {
      console.log("Error :(");
      alert("Error :(");
      return;
    }
    
    const num1 = parseFloat(checkNum1);
    const num2 = parseFloat(checkNum2);
    let ans = 0;

    if (num1 < 0 || num2 < 0) {
      console.log("Error :(");
      alert("Error :(");
      return;
    } else if (operator == "+") {
      ans = num1 + num2;
    } else if (operator == "-") {
      ans = num1 - num2;
    } else if (operator == "*") {
      ans = num1 * num2;
    } else if (operator == "/") {
      ans = num1 / num2;
    } else if (operator == "%") {
      ans = num1 % num2;
    }

    if (ans === Infinity || isNaN(ans)) {
      console.log("It’s over 9000!");
      alert("It’s over 9000!");
    } else {
      console.log(ans);
      alert(ans);
    }
  })
})