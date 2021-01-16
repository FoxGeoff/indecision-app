'use strict';

// Object literal
var user = {
   name: 'Andrew',
   cities: ['Philadelphia', 'New York', 'London'],
   printPlacesLived: function printPlacesLived() {
      console.log(this.name);
      console.log(this.cities);

      this.cities.forEach(function (city) {
         console.log(city); //good
         console.log(this.name); // error
      });
   }
};

// call function
user.printPlacesLived();

// JSX - JavaScript XML
var template = React.createElement(
   'div',
   null,
   'Test run'
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
