import './services.css'
import passport from '../../assets/passport.png'

export default function Services(){
    return(
        <div className="passport">
            <img src={passport} alt="Passport" width={180}/>
            <h2>Passport Application</h2>
            <p>You can apply, renew or replace your <br />
            passport and pay for it online. You will have to <br />
            print out a form at the end. You must sign and <br />
            date the form, add any documents or <br />
            photographs that ar needed, and return it for <br />
            processing.
            </p>
            <button className='btn'>Learn More</button>
        </div>
    )
}