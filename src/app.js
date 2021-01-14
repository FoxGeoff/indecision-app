console.log(`app.js working!`);

var post = {
  title: "The Indecision App",
  subTitle: "React Javascript Example",
  subTitle2: "Missing Sub-title",
  
  options: ["one", "two"],
};

function subTitle(subTitle) {
  if (subTitle) {
    return <p>{subTitle}</p>;
  }
}

function options(optList) {
  if (optList) {
    return <li> Item {optList} </li>;
  }
}

//JSX - JavaScript XML
var template = (
  <div>
    <h1>{post.title}</h1>
    <p>{subTitle(post.subTitle)}</p>
    <p>{post.options.length? 'Here are your options:' : 'There are no options:'}</p>
    <p>{post.subTitle || post.subTitle2}</p>
    <ol>
      {options(post.options[0])}
      {options(post.options[1])}
      {options(post.options[2])}
    </ol>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
