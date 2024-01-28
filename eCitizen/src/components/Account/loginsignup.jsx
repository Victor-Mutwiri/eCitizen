import './loginsignup.css'

export default function LoginSignup(){
    return (
        <div className="container">
            <div className="head">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <label>Name</label>
                    <input type="text" placeholder='Name...'/>
                </div>
                <div className="input">
                    <label>Email</label>
                    <input type="email" placeholder='Email ID...'/>
                </div>
                <div className="input">
                    <label>Password</label>
                    <input type="password" placeholder='password...'/>
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}