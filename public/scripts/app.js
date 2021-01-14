"use strict";

console.log("app.js working!");

var post = {
  title: "The Indecision App",
  subTitle: "React Javascript Example",
  subTitle2: "Missing Sub-title",

  options: ["one", "two"]
};

function subTitle(subTitle) {
  if (subTitle) {
    return React.createElement(
      "p",
      null,
      subTitle
    );
  }
}

function options(optList) {
  if (optList) {
    return React.createElement(
      "li",
      null,
      " Item ",
      optList,
      " "
    );
  }
}

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    post.title
  ),
  React.createElement(
    "p",
    null,
    subTitle(post.subTitle)
  ),
  React.createElement(
    "p",
    null,
    post.options.length ? 'Here are your options:' : 'There are no options:'
  ),
  React.createElement(
    "p",
    null,
    post.subTitle || post.subTitle2
  ),
  React.createElement(
    "ol",
    null,
    options(post.options[0]),
    options(post.options[1]),
    options(post.options[2])
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
