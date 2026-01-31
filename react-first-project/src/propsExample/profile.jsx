// let {a, b} = {a: 3, b : 10}
//let {name, age} = { name: "samjhana", age : 20}
// desrtruction props
let Profile = ({age, name, address}) => {
    console.log("Age:", age)
    console.log("Name: ", name)
    return(
        <div>
            <h1>Profile</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Address: {address}</p>
        </div>
    )
}

export default Profile