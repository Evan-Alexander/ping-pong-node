(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(number1) {
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
  return pingArray;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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


},{"./../js/pingpong.js":1}]},{},[2]);
