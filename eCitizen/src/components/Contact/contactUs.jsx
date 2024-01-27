import { useState } from 'react'
import './contactUs.css'

export default function ContactUs(){
    const [title, setName] = useState('')
    const [mail, setMail] = useState('')
    const [text, setText] = useState('')
    const [reason, setReason] = useState('complaint')

    const handleSubmit = (e)=>{
        e.preventDefault()
    }
        
    return(
        <div className="create">
            <h2>Leave Us a Message</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Your Email:</label>
                <input 
                    type="text" 
                    required
                    value={mail}
                    onChange={(e)=>setMail(e.target.value)}
                />
                <label>Your message:</label>
                <textarea 
                    required
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                ></textarea>
                <label>Reason:</label>
                <select
                    value={reason}
                    onChange={(e)=>setReason(e.target.value)}
                >
                    <option value="complaint">Complaint</option>
                    <option value="follow">Follow Up</option>
                    <option value="inquiry">Inquiry</option>
                </select>
                <button>Submit</button>
                <p>{title}</p>
                <p>{mail}</p>
                <p>{text}</p>
                <p>{reason}</p>
            </form>
        </div>
    )
}