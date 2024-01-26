import './home.css'
import immigrationImg from '../../assets/Immigration logo.png'

export default function  Home(){
    return (
    <section className='home'>
      <img src={immigrationImg} alt="ImmigrationLogo" />
      <div className='about'>
        <h2>The Department of Immigration</h2>
        <h3>Access Immigration services using your eCitizen account.</h3>
        <p>Apply and pay for your Passport online and get Live updates of your application progress via SMS and Email.</p>
        <button className='btn'>Learn More</button>
      </div>
    </section>
    )
}