// Calculate Sum Using Rest + Spread

let calSum = (...values)=>{
    return values.reduce((total, num) => total + num, 0)
}

console.log(calSum(10, 20, 30))