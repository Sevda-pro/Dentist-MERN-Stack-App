import { useState, useEffect } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom'
import { FloatingLabel, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    async function signup(e) {
        e.preventDefault();
        let obj = {
            name: name,
            email: email,
            password: password
        }
        let res = await axios.post(`${process.env.REACT_APP_API_KEY}`, obj)
        alert(res.data.message);
        setName('');
        setEmail('');
        setPassword('');
        signin();
    }
    function signin() {
        navigate('/login')
    }
    return (

        <div className="signup">
            <div className='frame'>
                <div className='shape'>
                    <div className='formdiv'>
                        <label>Name:</label>
                        <input type='text' value={name} onChange={(e)=>setName(e.currentTarget.value)}></input>
                        <label>Email:</label>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.currentTarget.value)}></input>
                        <label>Password:</label>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.currentTarget.value)}></input>
                        <button className='signupbtn' onClick={signup}>Signup</button>
                        <button className='loginbtn' onClick={signin}>Signin</button>

                    </div>

                </div>
            </div>
        </div>

    )
}