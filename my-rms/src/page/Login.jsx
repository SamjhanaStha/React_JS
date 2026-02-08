import "../sytle.css"

let Login = () =>{
    return(
        <div className={"login"}>
            <h1>Login Page</h1>
            Name: <input type="text" placeholder="Enter your name" /><br /><br />
            Email:  <input type="email" placeholder="Enter your Email" /><br /><br />
            Password: <input type="password" placeholder="Enter your Password" /><br /><br />
            <button className={"button"}>Login</button>
        </div>
    )
}

export default Login