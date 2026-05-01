import { useEffect, useState } from "react"

const UseEffectWithCleanUp =()=>{
    const [count, setCount] = useState(0)
    useEffect(
        ()=>{
            let timer = setTimeout(
                ()=>{  
                        setCount(count+1)
                }, 1000
            )
            // cleanup function to clear the timer 
            return()=>{
                clearTimeout(timer);
            }
        },
        [count]
    )
    return(
        <div>
            <h2>UseEffect with cleanUp</h2>
            <p>This component rendered this {count} many times</p>
        </div>
    )
}

export default UseEffectWithCleanUp