import './visa.css'

export default function Visa(){
    return (
        <div className='visa'>
            <section className="others">
                <h3>KENYA VISA APPLICATION</h3>
                <li><a href="#">How do I Apply</a></li>
                <hr />
                <li><a href="#">Who requires a Visa</a></li>
                <hr />
                <li><a href="#">Types of Visa and Fees</a></li>
                <hr />
                <li><a href="#">Requirements</a></li>
                <hr />
                <li><a href="#">Photo requirements and guidelines</a></li>
                <hr />
            </section>
            <section className="how">
                <div className="how-to">
                    <h2>How do I Apply</h2>
                    <p>You need to:</p>
                    <ol>
                        <li>Click register on www.ecitizen.go.ke.</li>
                        <li>Select Register as a Visitor.</li>
                        <li>Once Logged in, Select Deparment of Immigration services.</li>
                        <li>Select submit Appplication.</li>
                        <li>Select Kenyan Visa.</li>
                        <li>Select the type of Visa and read the Instructions Carefully.</li>
                        <li>Fill in the application form.</li>
                        <li>Pay Using visa card, Mastercard and other debit cards.</li>
                        <li>Await approval via email, then download and print the eVisa from your eCitizen account.</li>
                        <li>Present your printed eVisa to the immigration officer at the port of entry.</li>
                    </ol>
                </div>
                <div className="disclaimer">
                    <h2>DISCLAIMER</h2>
                    <ol>
                        <li>Visa processing fee is non refundable.</li>
                        <li>Incomplete applications will be rejected.</li>
                        <li>The possesion of an eVisa is not the final Authority to enter The Republic of Kenya.</li>
                        <li>Engaging in any form of business or employment without a requisite permit or pass is an offence.</li>
                        <li>A visa is required prior to entry into The Republic of Kenya.</li>
                        <li>The e-Visa printout must be presented at the port of entry.</li>
                        <li>It should take atleast 2 working days to get your eVisa.</li>
                        <li>Each adult visitor to the Republic of Kenya is required to submit evisa applications in their personal ecitizen <br />
                        account. Parents can apply for their children in the parents account.</li>
                    </ol>
                </div>
                <button className='btn'>Apply Now</button>
            </section>
        </div>
    )
}