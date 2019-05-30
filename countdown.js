var countdownGenerator = function (x) {
  let index = x;
  var output = "";

  return function() {
    if (index > 0) {
      output = "T-minus " + index;
    } else if (index === 0) {
      output = "Blast Off!";
    } else if (index < 0) {
      output = "Rockets already gone, bub!";
    }
    index--;
    console.log(output);
  }
return output;
};


var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


var countdown = countdownGenerator(5);
countdown(); // T-minus 5...
countdown(); // T-minus 4...
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!