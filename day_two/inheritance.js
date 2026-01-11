// inheritance: the ability of an object to inherit properties and methods from another object
// parent class
class Vechicle{
    constructor(noOfWheels, VechicleName){
        console.log("Vechicle constructor called")
        this.noOfWheels = noOfWheels
        this.name = VechicleName
    }

    // method
    move(){
        console.log(`${this.name} is moving`)
    }
}

// Child Class
class Car extends Vechicle{
    constructor(no, name, color){
        console.log("Car constructor Called")
        super(no, name)
        this.color = color
    }
}
let myCar = new Car(4, "BMW", "Blue")
myCar.move()

// Child Class
class Bike extends Vechicle{
    constructor(no, name, price){
        super(no, name)
        this.price = price
    }

    makeSound(){
        console.log("Sound is Broom Broom")
    }

    // overriding the method
    // Note: declaring the same method in the child always override the method in the parent class
    move(){
        console.log("Bike move called")
        console.log(`the bike ${this.name} is moving. Its price is ${this.price}`)
    }

}
let myBike = new Bike(2, "Honda", 200000)
myBike.makeSound()
myBike.move()