var shopper = {
  name: "Bryan",
  age: 34,
  isShopping: true,
  groceryCart: ["bananas", " grapes", " bread"],
  shopperDetails: function() {
    console.log ("My name is " + this.name + " and my age is " + this.age + " and the items in my cart are " +this.groceryCart);
  }
}