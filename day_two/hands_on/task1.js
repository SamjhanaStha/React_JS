let a = 32
export default a

let checkEven = (number)=>{
    let isEven = number%2 == 0
    if(isEven){
    return "even"
}
else{
    return "odd"
}
}
export {checkEven}

export const add = (a, b) => {
    return a +b
}