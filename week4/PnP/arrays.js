var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Step 1: Remove the last item from the vegetable array.
vegetables.pop();
console.log("Vegetables: " + vegetables);

//Step 2: Remove the first item from the fruit array.
fruits.shift();
console.log("Fruits: " + fruits);

//Step 3: Find the index of "orange."
var indexOfOrange = fruits.findIndex(function(element){
  return element == "orange";
})

console.log("The index of orange is currently: " + indexOfOrange);

//Step 4: Add that number to the end of the fruit array.
fruits.push(indexOfOrange);
console.log("Fruits: " + fruits);

//Step 5: Use the length property to find the length of the vegetable array.
var vegLength = vegetables.length;
console.log("The length of Vegetables is: " + vegLength);

//Step 6: Add that number to the end of the vegetable array.
vegetables.push(vegLength);
console.log("Vegetables: " + vegetables);

//Step 7: Add that number to the end of the vegetable array.
var food = fruits.concat(vegetables);
console.log("The new array is: " + food);

//Step 8: Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2);
console.log("After removing 2 items starting at index 4: " + food);

//Step 9: Reverse your array.
food.reverse();
console.log("Array after Reversing: " + food);

//Step 10: Turn the array into a string and return it.
food.toString();
console.log("After converting array into a string: " + food);