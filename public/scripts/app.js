'use strict';

console.log('app.js working!');

//JSX - JavaScript XML
var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      'Geoff Fox'
   ),
   React.createElement(
      'p',
      null,
      'Age: 26'
   ),
   React.createElement(
      'p',
      null,
      'Location: Philadelphia'
   )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
