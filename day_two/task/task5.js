// Class representing a Product
// Create a class Product with:
// name
// price
// getInfo()
// Create an object and print info.
// Goal: basic classes in real products

class Product{
    constructor(name , price){
        this.name = name
        this.price = price
    }

    getInfo(){
        console.log(`Name of product: ${this.name}, Price: ${this.price}`)
    }
}

let print = new Product("Momo", 150)
print.getInfo()