import { useMemo, useState } from "react"

const expensiveCalculation = (num)=>{
    for(let i = 0; i<1000000; i++){
        num+=1;
    }
    return num;
}

const UseMemoComponent=()=>{
    console.log("UseMemoComponent rendered")
    const [count, setCount] = useState(0)
    // using UseMemo to memoize the result of expensive calculation
    let result = useMemo(
        ()=>{
            return expensiveCalculation(count)
        },
        []
    )
    const [toggle, setToggle] = useState(false);

    return(
        <div>
            <h1>Use Memo Hook Example</h1>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <p>Expensive Calculation Result: {result}</p>
            <h3>Toggled</h3>
            <p>{toggle ? "Toggled On" : "Toggled Off"}</p>
            <button onClick={()=>setToggle(!toggle) }>Toggle</button>
        </div>
    )
}

export default UseMemoComponent