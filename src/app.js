console.log(`app.js working!`);

//JSX - JavaScript XML
var template = (
<div>
   <h1>Geoff Fox</h1>
   <p>Age: 26</p>
   <p>Location: Philadelphia</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);