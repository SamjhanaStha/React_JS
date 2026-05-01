import { useState } from "react"
import './formValidation.css'

const FromValidation = () =>{
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [fullname, setFullname] = useState(" ");
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [fullnameError, setFullnameError] = useState(null)
    const handleFormSubmit = (event)=>{
        // prevent the default form submission behavior to avoid page reload
        event.preventDefault();
        // validation
        if(email === ""){
            // alert("Email is required")
            setEmailError("Email is required");
            return;
        }
        else if(password ===""){
            setPasswordError("password is requried")
            return
        }
        else if(password.length <6){
            setPasswordError("Password must be at least 6 characters long")
            return
        }
        else if(fullname ===" "){
            setFullnameError("Full Name is required")
            return
        }
        alert(`Email: ${email}\n password:${password}\n fullname: ${fullname}`)
        // reset form field
        setEmailError(null)
        setPasswordError(null)
        setFullnameError(null)
        setEmail("")
        setPassword(" ")
        setFullname(" ")
    }

    return (
        <div>
            <h4>Form Validation</h4>
            <form action="" onSubmit={handleFormSubmit}>
                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your Valid email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    {emailError && <p style={{color:"red"}}>{emailError}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
                </div>
                <div className="form-field">
                    <label htmlFor="fullname">Email</label>
                    <input type="text" placeholder="Enter your fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
                    {fullnameError && <p style={{color:"red"}}>{fullnameError}</p>}
                </div>
                <button type="sudmit"> Submit</button>
            </form>
        </div>
    )
}

export default FromValidation