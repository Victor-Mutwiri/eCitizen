import './navbar.css'
import logoImage from '../../assets/Logo.png'
import {Link} from 'react-router-dom'
import {useState} from 'react'

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState (false)
    return (
        <header>
            <Link to="/" className="logo">
                <img src={logoImage} alt="Logo"/>
            </Link>
            <ul id="navbar" className={menuOpen?"open":""}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/passports'>Passports</Link></li>
                <li><Link to='/visa'>Visa</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/contact Us'>Contact Us</Link></li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
            <div className="bx bx-menu" id="menu-icon" onClick={()=>{setMenuOpen(!menuOpen)}}></div>
        </header>
    )
}