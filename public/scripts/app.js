"use strict";

// Object literal
var user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "London"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);

    // work around
    var that = this;
    // an arrow function in this method would cause 'this' to fail
    this.cities.forEach(function (city) {
      console.log(city); //good
      // console.log(this.name); // error
      console.log(that.name); // work around
    });

    // now for arrow functions
    this.cities.forEach(function (city) {
      console.log(" " + _this.name + " has lived in " + city);
    });
  }
};

// call the function
user.printPlacesLived();

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  "Test run"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
