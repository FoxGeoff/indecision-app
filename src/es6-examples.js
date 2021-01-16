// Object literal
const user = {
   name: 'Andrew',
   cities: ['Philadelphia', 'New York', 'London'],
   printPlacesLived: function() {
      console.log(this.name);
      console.log(this.cities);
   }
};

// call function
user.printPlacesLived();

// JSX - JavaScript XML
const template = (
   <div>Test run</div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);