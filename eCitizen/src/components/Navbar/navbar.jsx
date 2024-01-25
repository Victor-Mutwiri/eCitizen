import './navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar(){
    return (
        <header>
            <Link to="/" className="logo">
                <img src="../../assets/Logo.png" alt="Logo"/>
            </Link>
            <ul className="navbar">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/passports'>Passports</Link></li>
                <li><Link to='/visa'>Visa</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/contact Us'>Contact Us</Link></li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
        </header>
    )
}