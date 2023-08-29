// 1. create a constructor function `Product` with two private properties, `name` and `price` respectively.
function Product(name, price) {
    // Private properties
    this.name = name;
    this.price = price;

    // Getter for name
    this.getName = () => name

    // Getter for price
    this.getPrice = () => price
}


const newProduct = new Product("Chair", 200);
console.log(newProduct.getName());
console.log(newProduct.getPrice());



// 2. create another constructor function `ShoppingCart` with a private property of `items` holding an empty array.
function ShoppingCart() {
    let items = [];

     // Method to add an item to the cart
    this.addItem = (item) => items.push(item);

    // method to remove an item.
    this.removeItem = (item) => items.pop(item);

     // Method to get the cart items in the cart
    this.getCartItems = () => [...items] // Return a copy of the items array

    // get total item from the array
    this.getTotal = () => items.length;
}

// example 
const items = new ShoppingCart()
items.addItem("sugar");
items.addItem("plantain");

console.log(items.getCartItems());
items.removeItem()

console.log(items.getCartItems());
items.addItem("socks");

console.log(items.getCartItems());
console.log(items.getTotal())
