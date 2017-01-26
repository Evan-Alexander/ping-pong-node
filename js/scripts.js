$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number").val());

    for(i = 0; i < number1; i++) {
      $("#result").append(i + ', ');
      console.log(i);
    }
    $("#result").css("display", "block");
    // $("#result").text(number1);
  });
});
//
// $(document).ready(function() {
//   $("form#game").submit(function(event) {
//     event.preventDefault();
//     var number = parseInt($("input#number").val());
//     var list = numberList(number);
//     console.log(list);
//
//     $("#result").text(number);
//   });
// });
