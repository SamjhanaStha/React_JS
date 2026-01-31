import { useState } from "react"

let UseOfState = () =>{
    // let [a, b] = [0 , f]
    // destructuring state
    // useState hook is used to create state and update state
    let [count, setCount] = useState(0)

    let handleState = () =>{
        setCount(count+1)
        console.log(count)
    }
    return(
        <div>
            <h1>Use of state</h1>
            <h4>Count = {count}</h4>
            <button onClick={handleState}>Increment</button>
        </div>
    )
}

export default UseOfState