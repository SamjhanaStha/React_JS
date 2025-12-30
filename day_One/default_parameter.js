let add = (a,b) =>{
    const result = a + b
    console.log("add result : ", result)
}

// calling function with arguments
add(34, 78)
add(34)
add()

// function with default parameters
let sub = (a=0, b=10)=> {
    const result = a-b
    console.log("sub result :", result)
}

sub(34, 56)
sub(34)
sub()