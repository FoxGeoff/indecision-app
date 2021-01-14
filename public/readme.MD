# Project: Safari React web development

## Kanaban Task #2: Setup live server

### Task: Install Yarn

1. Run: ```npm install -g yarn```
2. NOTE Close and open Windows
3. Run: ```npm install -g yarn```

### Task: Install live-server

1. Run: ```yarn global add live-server``` doesn't work!
2. Alternate run: ```npm install -g live-server``` works!
3. Check run: ```live-server -v```
4. Docs: <http://tapiov.net/live-server>

### Task: Start live-server

1. Run: ```live-server public```
2. Displays page on 127.0.0.1:8080

## Kanban Task #3: Hello React

### Task: Add script tags for React and ReactDOM

1. Go to web page and in console look for React and ReactDOM objects
2. Add to app.js ```console.log("app.js is runing!#);```
3. ERROR: script  tag header type mismach
4. ERROR: ```Uncaught SyntaxError expresion, got '<'```
5. FIX: Add Babeljs.io

### Task: Add: Simulation babel.js pre-compiler

1. NOTE: Typscript and React preset <https://www.typescriptlang.org/docs/handbook/react.html>
2. NOTE: Gatsby : <https://www.gatsbyjs.com/>
3. We use 2 presets with Babel: env and react
4. Run: ```yarn global add babel-cli@6.24.1``` this will fail
5. Run ```npm install -g babel-cli@6.24.1```
6. Run presets: ```yarn int```
7. Run: ```yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2```
8. Run: ```babel src/app.js --out-file=public/scripts/app.js --presets="env,react" --watch```
9. Ref: <https://stackoverflow.com/questions/61116908/react-couldnt-find-preset-env-react-relative-to-directory-src>

### Task: Setting up Babel (local)

### Task: Conditional Rendering in JSX

1. Template function ```return <p>Location {location}```
2. Conditional ``` 'true' && 'not true // returns true or if not returns 'not true'
3. Conditional (ternay) operator ```true? 'this is true' : 'this is false'```
