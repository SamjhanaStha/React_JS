// Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.

let sumAll = (...numbers) => {
    let sum = 0
    for( let i = 0; i< numbers.length; i++)
        sum+=numbers[i]
    console.log(sum)
}

sumAll(1, 2, 3, 4)

// another way
let sumAll1 = (...numbers) => {
    return numbers.reduce((sum, n) => sum+n, 0)
}

console.log(sumAll1(1, 2, 3, 4))