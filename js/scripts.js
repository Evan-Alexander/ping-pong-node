

function pingPong(number1) {
  var pingArray = [];
  for ( i = 1; i <= number1; i++ ) {
    if (i % 15 === 0) {
      pingArray.push(" ping-pong");
    } else if (i % 5 === 0) {
      pingArray.push(" pong");
    } else if (i % 3 === 0) {
      pingArray.push(" ping");
    } else {
      pingArray.push(" " + i);
    }
  }
  console.log(pingArray);

  return pingArray;
}

$(document).ready(function() {
  $("form#game").last().submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number").val());
    var display = pingPong(number1);
    $("#result").text(display + ',');
    console.log(display);

    $("#result").show();
    $("#number").val("");
  });
});

//
// $("form#game").last().submit(function() {
//   $("#result").show();
// });
