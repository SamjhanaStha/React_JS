import { useReducer } from "react"

let myReducer = (state, action)=>{
    if(action.type === "inc"){
        return state+1
    } else if(action.type === "dec"){
        return state-1
    }else{
        return state
    }
}

const UseReducerExample = ()=>{ 
    const [count, dispatch] = useReducer(myReducer, 0)
    return(
        <div>
            <h1>UseReducer Hook Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>dispatch({type: "inc"})}>Increment</button>
            <button onClick={()=>dispatch({type: "dec"})}>Drecrement</button>
        </div>
    )
}

export default UseReducerExample