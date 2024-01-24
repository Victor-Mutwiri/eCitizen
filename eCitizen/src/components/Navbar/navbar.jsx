import './navbar.css'


export default function Navbar(){
    return (
        <header>
            <a href="#" className="logo">
                <img src="../../assets/Logo.png" alt="Logo"/>
            </a>
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Passports</a></li>
                <li><a href="#">Visa</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Account</a></li>
            </ul>
        </header>
    )
}