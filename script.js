class ProductProperties {

static applyDiscount(products, discount) {
    products.forEach(product => {
        product.price = product.price - (product.price * discount);
    
    });
}

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
// subclass
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity); // inherits constructor from main class
    this.expirationDate = expirationDate;
    }
    // modified toString to include expiration date
    toString() {
        return `Product: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;

    }
}

// Test to check if product properties class and methods work correctly.
const product = new ProductProperties('apple', 2.5, 50);
console.log(product.getTotalValue());
console.log(product.toString());

// test to check if subclass and method override works correctly
const perishableProduct1 = new PerishableProductProperties('apple', 2.5, 50, '2024-12-31');
const perishableProduct2 = new PerishableProductProperties('milk', 5, 25, '2024-12-20');
console.log(perishableProduct1.toString());
console.log(perishableProduct2.toString());

const productArray1 = [product, perishableProduct1, perishableProduct2];

ProductProperties.applyDiscount(productArray1, 0.1);
