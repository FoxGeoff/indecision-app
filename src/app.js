console.log(`app.js working!`);

var userName = 'Mike';
var userAge = 23;
//JSX - JavaScript XML
var template = (
<div>
   <h1>{userName}</h1>
   <p>Age: {userAge}</p>
   <p>Location: Philadelphia</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);