import './passport.css'
import Table from './table'

export default function Passport(){
    return(
        <div className="application">
            <section className="headline">
                <h2>Passport Application</h2>
                <p>You can apply for, renew or replace your passport and pay for it online. You’ll have to print out a <br />
                form at the end. You must sign and date the form, add any documents or photographs that are <br />
                needed, and return it for processing.</p>
                <p>You’ll pay using mobile money, Credit, Debit Cards and online banking from local banks. It <br />
                should take atleast 10 working days to get your first passport once your form has been <br />
                physically submitted at the Immigration offices. For all other application types, it should take.<br/>
                atleast 5 working days. It can take longer if more information is needed or your application
                hasn’t been filled out correctly.
                </p>
            </section>
            <section className='details'>
                <div className="steps detail">
                    <h3>STEPS OF APPLICATION</h3>
                    <hr />
                    <ol>
                        <li>Register on www.ecitizen.go.ke</li>
                        <li>Go to immigration.ecitizen.go.ke and or Department of immigration services and click on the passport <br />
                        application form.</li>
                        <li>Read the instructions carefully then fill the application form.</li>
                        <li>Select the mode of payment and pay for the passport fees.</li>
                        <li>Download and print the application form and three application receipts.</li>
                        <li>Submit the application form in person to the Immigration offices.( Nyayo house, Mombasa & Kisumu.)</li>
                    </ol>
                </div>
                <div className="submission detail">
                    <h3>DURING THE SUBMISSION YOU WILL NEED THE FOLLOWING</h3>
                    <hr />
                    <ol>
                        <li>An eCitizen pre-filled passport application form and three receipts.</li>
                        <li>Original birth certificate and photocopy.</li>
                        <li>Original National ID Card & copy.</li>
                        <li>Three Current passport size photos.</li>
                        <li>Recommender’s ID Card copy.</li>
                        <li>Consent letter for minors.</li>
                        <li>Old passport for replacement.</li>
                        <li>Parents National ID cards and copy.</li>
                    </ol>
                </div>
                <div className="fees detail">
                    <h3>PASSPORT FEES</h3>
                    <hr />
                    <div className="table"><Table/></div>
                </div>
                <div className="issues">
                <h3>IF YOU HAVE ANY ANY ISSUES OR QUESTIONS, CALL</h3>
                <hr />
                <p>Nairobi Office: +254 772 246 669</p>
                <p>Mombasa Office: +254 708 206 206</p> 
                </div>
                <div className="apply">
                    <p> <i className='bx bxs-error'/> Don’t book travel until you have a valid passport - doing so is at your own risk.</p>
                    <button className='btn'>Apply Now</button>
                </div>
            </section>
            
        </div>
    )
}