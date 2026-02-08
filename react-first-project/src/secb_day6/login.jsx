import { useState } from "react"
import "./login.css"
import ReactLogo from "../assets/react.svg"
import Image from "../assets/download.jpg"

let Login = ()=>{
    let [isDrak,setIsDrak]= useState(false)
    return(
        <div>
            {/* inline css */}
            <h1 style={
                {
                    color: "red",
                    backgroundColor: "grey",
                    padding: "10px 10px 10px 10px"
                }
            }>Login page</h1>
            <h1>Login page</h1>
            <input type="email" placeholder="Enter Your Email" /><br /><br />
            <input type="password" placeholder="Enter your Password" /><br /><br />
            <button className={`Button ${isDrak ? "Dark" : ""}`}>Login</button>
            <button onClick={()=>setIsDrak(!isDrak)}>Toggle Theme</button>
            <img src="ReactLogo" alt="" />
            <img src="Image" alt="" />
        </div>
    )
}

export default Login