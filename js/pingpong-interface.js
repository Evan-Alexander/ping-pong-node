var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number").val());
    var simpleCalculator = new Calculator("hot pink");
    var display = simpleCalculator.pingPong(number1);
    $("#result").text(display + ',');
    $("#result").show();
    $("#number").val("");
  });
});
