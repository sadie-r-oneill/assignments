var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop("lettuce")

// console.log(vegetables)

fruit.shift(0)

// console.log(fruit)

var indexOfOrange = fruit.indexOf("orange")

// console.log(indexOfOrange)

fruit.splice([1])
// console.log(fruit)

var slicedVegetables = vegetables.slice('3')

console.log(slicedVegetables)