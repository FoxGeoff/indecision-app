'use strict';

// Object literal
var user = {
   name: 'Andrew',
   cities: ['Philadelphia', 'New York', 'London'],
   printPlacesLived: function printPlacesLived() {
      console.log(this.name);
      console.log(this.cities);
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
