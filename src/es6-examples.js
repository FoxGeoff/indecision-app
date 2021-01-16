// Object literal
const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "London"],

  // es6 method syntax using the map function
  printPlacesLived() {
    const cityMessage = this.cities.map((city) => {
      return `A message from ${city}!`;
    });
    return cityMessage;
   }
};

// call the function
console.log(user.printPlacesLived());
