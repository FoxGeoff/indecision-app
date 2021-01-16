// Object literal
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "London"],

  // es6 method syntax
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    // work around
    const that = this;
    // an arrow function in this method would cause 'this' to fail
    this.cities.forEach(function (city) {
      console.log(city); //good
      // console.log(this.name); // error
      console.log(that.name); // work around
    });

    // now for arrow functions
    this.cities.forEach((city) => {
      console.log(` ${this.name} has lived in ${city}`);
    });
  },
};

// call the function
user.printPlacesLived();

// JSX - JavaScript XML
const template = <div>Test run</div>;

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
