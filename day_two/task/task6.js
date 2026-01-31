// Inheritance example
// Create Product, then extend a new class FoodProduct that has an expiry date
// Goal: model real objects with OOP

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
     getInfo(){
        console.log(`${this.name}, price: ${this.price}`)
    }
}

class FoodProduct extends Product{
    constructor(name, price, expiry){
        super(name, price)
        this.expiry = expiry;
    }

    getInfo(){
        console.log(`${this.name}, price: ${this.price}, expiry date: ${this.expiry}`)
    }
}

let Food1 = new FoodProduct("Momo", 150, 2026-3-12)
Food1.getInfo();