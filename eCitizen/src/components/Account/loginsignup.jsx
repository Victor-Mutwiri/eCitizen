import { useState } from 'react'
import './loginsignup.css'
import eCitizenLogo from '../../assets/Logo.png'

export default function LoginSignup(){
    const [action, setAction] = useState("Login")
    return (
        <div className="login-signup">
            <img src={eCitizenLogo} alt="ImmigrationLogo" />
            <div className="container">
                <div className="head">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:<div className="input">
                        <i className='bx bx-user'></i>
                        <input type="text" placeholder='Name...'/>
                    </div>}
                    
                    <div className="input">
                        <i className='bx bxs-envelope'></i>
                        <input type="email" placeholder='Email ID...'/>
                    </div>
                    <div className="input">
                        <i className='bx bx-lock-open'></i>
                        <input type="password" placeholder='password...'/>
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}            
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}