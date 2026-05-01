import { createContext, useContext, useState } from "react"
import SecondContext from "./SecondContext"
// Creating context using createContext
export let DataContext = createContext()

const MainComp= ()=>{
    const[data, setData] = useState("Hello World")
   return(
    <div>
        <h1>Main Component</h1>
        {/* Dependency Injection */}
        <DataContext.Provider value={data}>
            <ChildComp/>
        </DataContext.Provider>
    </div>
   )
}
export default MainComp

const ChildComp = ()=>{
    let data = useContext(DataContext)
    return(
        <div>
            <h1>Child Component</h1>
            <SecondContext/>
            <ChildComp2 />
        </div>
    )
}

const ChildComp2 = ()=>{
    let data = useContext(DataContext)
    return(
        <div>
            <h1>Child Component 2</h1>
            <p>Data Inside Child 2:{data}</p>
        </div>
    )
}



// State Management, DI(Dependency Injection )