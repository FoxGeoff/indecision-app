'use strict';

console.log('app.js working!');

var post = {
    title: 'The Indecision App',
    subTitle: 'React Javascript Example'
    //JSX - JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        post.title
    ),
    React.createElement(
        'p',
        null,
        post.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
