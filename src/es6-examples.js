// Object literal
const user = {
   name: 'Andrew',
   cities: ['Philadelphia', 'New York', 'London'],
   printPlacesLived: function() {
      console.log(this.name);
      console.log(this.cities);

      this.cities.forEach( function(city) {
         console.log(city); //good
         console.log(this.name); // error
      });
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