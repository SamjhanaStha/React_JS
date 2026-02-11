import "../style.css"
import { useNavigate } from 'react-router'

let Login = () =>{
    const navigate = useNavigate()
    const goHome = ()=>{
        navigate('/')
    }
    return(
        <div className="login">
            <div className={"login-box"}>
                <h1>Login Page</h1>
                Name: <input type="text" placeholder="Enter your name" /><br /><br />
                Email:  <input type="email" placeholder="Enter your Email" /><br /><br />
                Password: <input type="password" placeholder="Enter your Password" /><br /><br />
                <button className={"button"} onClick={goHome}>Login</button>
            </div>
        </div>
    )
}

export default Login