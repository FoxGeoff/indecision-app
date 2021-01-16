// Object literal
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "London"],

  // es6 method syntax using the map function
  printPlacesLived() {
    return this.cities.map((city) => `A message from ${city}!`);
  }
};

// call the function
console.log(user.printPlacesLived());
