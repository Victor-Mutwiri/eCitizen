
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import Navbar from './components/Navbar/navbar'
import Services from './components/Services/services'
import Passport from './components/Passports/passports'
import Visa from './components/Visa/visa'
import News from './components/News/news'
import Faq from './components/FAQ/faq'
import ContactUs from './components/Contact/contactUs'
import Account from './components/Account/account'


function App() {

  return (
    <Router>
      <div>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/passports' element={<Passport/>}/>
            <Route path='/visa' element={<Visa/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/FAQ' element={<Faq/>}/>
            <Route path='/contact us' element={<ContactUs/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
