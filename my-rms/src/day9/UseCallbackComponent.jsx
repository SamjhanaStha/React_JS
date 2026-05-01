import {useCallback, useState } from "react"
import CustomButton from "./CustomButton"

const UseCallbackComponent = ()=>{
    console.log("UseCallbackComponent rendered")
    const [count , setCount] = useState(0)
    const handleHelpMe = useCallback(
        ()=>{
            console.log("Help me button Clicked");
            setCount(count+1)
        },
        [count]
    )
    const [toggle, setToggle] = useState(false)
    const handleToggle = useCallback(
        ()=>{
            console.log("Toggle Button Click")
            setToggle(!toggle)
        },
        [toggle]
    )
    
    return(
        <div>
            <h1>USe Callback Hook Example</h1>
            <p>Count: {count}</p>
            {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
            <CustomButton onClick={handleHelpMe}  title={"Increment"} />
            <CustomButton onClick={handleToggle}  title={"Toggled"} />
        </div>
    )
}

export default UseCallbackComponent