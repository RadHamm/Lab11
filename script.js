class ProductProperties {
    // constructs the base class
    constructor(name, price, quantity) { 
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // method to multiply and return result of price * quantity
    getTotalValue() {
        return this.price * this.quantity;
    }
    // method to create a text string which shows name, price and quantity
    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
        
    }
}
// Test to check if product properties class and methods work correctly.
const product = new ProductProperties('apple', 2.5, 50);
console.log(product.getTotalValue());
console.log(product.toString());

