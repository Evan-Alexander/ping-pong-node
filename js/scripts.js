var numberList = function(number) {
  var i = [];
  for ( var i=1; i < number; i++ ) {
    console.log(i)
  }
  return i;
}


// var pingPong = function(verified) {
//   var getPingPong;
//   if ((verified % 3 == 0) && (verified % 5 == 0)) {
//     getPingPong = "ping-pong";
//     console.log(pingPong);
//   } else if (verified % 5 == 0) {
//     getPingPong = "pong";
//   } else if (verified % 3 == 0) {
//     getPingPong = "ping";
//   } else {
//     getPingPong = verified;
//   }
// };

$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var list = numberList(number);
    console.log(list);


    // $(".number").text(game);

    $(".number").text(list);
  });
});
