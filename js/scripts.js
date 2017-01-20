// validates user input as a number
var validateInput = function(number) {
  if (isNaN(number) || (number % 1 !== 0)) {
  return alert("Please enter an integer, starting with 1.");
  } else {
    return number
  }
};

// var integer = function(number) {
//   if (number % 1 !== 0) {
//   return alert("Please enter a whole number")
//   } else {
//     return number
//   }
// };


// var numberSplitter = function(number) {
//   return verified.split("").map(function(t){return parseInt(t)});
// }




$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var verified = validateInput(number);
    var wholeNumber = integer(number);
    // var numbers = numberSplitter(verified);
    // console.log(validateInput);
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
    // $(".number").text(number);
    // $(".roman").text(result);
    //
    // $("#result").show();
