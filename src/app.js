console.log(`app.js working!`);

var post = {
    title: 'The Indecision App',
    subTitle: 'React Javascript Example'
}
//JSX - JavaScript XML
var template = (
<div>
   <h1>{post.title}</h1>
   <p>{post.subTitle}</p>
   <ol>
       <li>Item one</li>
       <li>Item two</li>
   </ol>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);