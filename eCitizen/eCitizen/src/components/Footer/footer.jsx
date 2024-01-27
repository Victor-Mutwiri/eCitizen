import './footer.css'

export default function Footer(){
    return (
        <footer className="contact">
            <div className="contact-box">
                <h4>Guidelines</h4>
                <li><a href="#"><i className='bx bxs-user-check'>  Sign Up</i></a></li>
                <li><a href="#"><i className='bx bx-lock-open'></i>  Sign In</a></li>
                <li><a href="#"> <i className='bx bx-money'>  Apply and Pay online</i></a></li>
            </div>
            <div className="contact-box">
                <h4>Quick Links</h4>
                <li><a href="https://www.president.go.ke/">The Presidency</a></li>
                <li><a href="http://kenyalaw.org/kl/index.php?id=398">Constitution</a></li>
                <li><a href="https://mfa.go.ke/">MFA</a></li>
            </div>
            <div className="contact-box">
                <h4>Talk</h4>
                <h5>Connect with us</h5>
                <div className="social">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                </div>
            </div>
        </footer>
        
    )
}