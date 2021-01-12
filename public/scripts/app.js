console.log(`app.js working!`);

//JSX - JavaScript XML
//var template = <p>This is JSX from app.js!</p>;

//The result from using Babeljs
var template = React.createElement(
    "p",
    {id: "someId"},
    "This is JSX from app.js"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);