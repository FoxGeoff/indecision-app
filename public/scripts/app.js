"use strict";

// Object literal
var user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "London"],

  // es6 method syntax using the map function
  printPlacesLived: function printPlacesLived() {
    var cityMessage = this.cities.map(function (city) {
      return "A message from " + city + "!";
    });
    return cityMessage;
  }
};

// call the function
console.log(user.printPlacesLived());
