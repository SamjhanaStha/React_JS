// class: blueprint of real object
// object: instance of class
// creating class

class Car{
    // constructor is a function that helps in initial setup of class when creating its instance or object
    constructor(name, color, price, model){
        // defining properties of car
        this.name = name
        this.color = color
        this.price = price
        this.model = model
    }

    // defining method or action
    start(){
        console.log(`${this.name} is started`)
    }

    // dispaly details method
    dispalyDetails(){
        console.log(`${this.name} ${this.color} ${this.price} ${this.model}`)
    }

    calculateTotalprice(number){
        let totalPrice = this.price * number
        return totalPrice;
    }
}

// making instance of car class
let bmw = new Car("BME", "Black", 50000, "M3")
let tesla = new Car("tesla", "Gray", 80000, "Model 1")
// Accessing property of object
console.log("name and color of BMW :",bmw.name, bmw.color )
console.log("name and color of Tesla :", tesla.name, tesla.color)

// calling method
tesla.start()
bmw.dispalyDetails()
tesla.dispalyDetails()

console.log("Price of BMW :",bmw.calculateTotalprice(10))
console.log("Price of Tesla",tesla.calculateTotalprice(5))