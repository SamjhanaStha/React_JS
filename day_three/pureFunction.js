// pure function: those function that is independent to other variable or state except parameters
// pure function has no side effects
let c =80;
let add = (a,b)=> { //here add is pure fuction
    return a+b    
}

console.log("add:", add(9, 5))

// impure funtion example
let tax = 0.13
let calculateTaxAmount = (price)=>{
    return price*tax
}
console.log("tax amount:", calculateTaxAmount(1000))