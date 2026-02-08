import { useState } from "react"

let StateExample = () =>{
    // let [a, b] = {0, f}
    let [timer, setTimer] = useState(0);
    return(
        <div>
            <h1>State Example</h1>
            <h4>Timer: {timer}</h4>
            {/* conditional rendaering using ternary operator (? :) */}
            {timer %2 == 0? <h5>Even Number</h5>: <h5>Odd Number</h5>}
            <button onClick={()=>{
                setTimer(timer+1)
                console.log("timer:" , timer)
            }}>Increment Timer</button>
        </div>
    )
}

export default StateExample