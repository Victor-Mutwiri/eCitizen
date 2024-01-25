
import './App.css'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <section className='home'>
          <div className='about'>
            <h2>The Department of Immigration</h2>
            <h3>Access Immigration services using your eCitizen account.</h3>
            <p>Apply and pay for your Passport online and get Live updates of your application progress via SMS and Email.</p>
            <button className='btn'>Learn More</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default App
