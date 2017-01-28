

function pingPong() {
  var pingArray = [];
  for (var i =1; i <= number; i++) {
    if (i % 15 === 0) {
      pingArray.push("ping-pong")

    }
  }
  return pingArray
}




$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number").val());
    var display = pingPong(number1);
    for(i = 0; i < number1; i++) {
      $("#result").append(i + ', ');
      console.log(i);
    }
    $("#result").show(i);
    // $("#result").text(number1);
  });
});
