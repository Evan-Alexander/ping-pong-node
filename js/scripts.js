// validates user input as a number and an integer.
var validateInput = function(number) {
  if (isNaN(number) || (number % 1 !== 0)) {
  return alert("Please enter an integer, starting with 1.");
  } else {
    return number
  }
};

// rule for ping

// rule for pong
// var three = function(number) {
//   if (number % 3 == 0) {
//   return alert("ping");
//   } else {
//     return number
//   }
// };
// // // rule for ping-pong
// var five = function(number) {
//   if (number % 5 == 0){
//   return alert("pong");
//   } else {
//     return number
//   }
// };
// var allThree = function(number) {
//   if ((number % 3 == 0) && (number % 5 == 0)) {
//   return alert("ping-pong");
//   } else {
//     return number
//   }
// };
var pingPong = function(number) {
  if ((number % 3 == 0) && (number % 5 == 0)) {
    return alert("ping-pong");
  } else if (number % 5 == 0) {
    return alert("pong");
  } else if (number % 3 == 0) {
    return alert("ping");
  } else {
    return number;
  }
};





$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var verified = validateInput(number);
    // var ping = three(number);
    // var pong = five(number);
    var game = pingPong(number);
    // var numbers = numberSplitter(verified);
    // console.log(validateInput);
    // $(".number").text(number);
    // $(".roman").text(result);
    //
    // $("#result").show();
  });
});
    // var numbers = numberSplitter(verified);
    // var onesPlace = onesIdentifier(numbers);
    // var tensPlace = tensIdentifier(numbers);
    // console.log(onesPlace);
  //  var hundredsPlace = hundredsIdentifier(numbers);
  //  var thousandsPlace = thousandsIdentifier(numbers);
//   console.log(thousandsPlace + hundredsPlace + tensPlace + onesPlace);
  //  var result = roman(thousandsPlace, hundredsPlace, tensPlace, onesPlace);
  //  console.log(result);
