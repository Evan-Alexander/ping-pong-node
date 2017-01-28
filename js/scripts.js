

function pingPong() {
  var pingArray = [];
  for ( i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      pingArray.push("ping-pong");
      console.log(pingArray);
    } else if (i % 5 === 0) {
      pingArray.push("pong");
    } else if (i % 3 === 0) {
      pingArray.push("ping");
    } else {
      pingArray.push(i);
    }
  }
  // return pingArray;
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
    $("#result").show(display);
    // $("#result").text(number1);
  });
});
