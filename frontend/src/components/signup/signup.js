import { useState, useEffect } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom'
import { FloatingLabel, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signupalert, setAlert] = useState(false)
    const navigate = useNavigate();
    async function signup(e) {
        e.preventDefault();
        if (name == '' || email == '' || password == '') {
            setAlert(true);
            setTimeout(() => {
                setAlert(false)
            }, 2000);
        }
        else {
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

    }
    function signin() {
        navigate('/login')
    }
    return (

        <div className="signup">
            {signupalert && (
                <div className='alertclass'>
                        Please fill all the details!
                </div>


            )}
            <div className='frame'>
                <div className='shape'>
                    <div className='formdiv'>
                        <label>Name:</label>
                        <input type='text' value={name} onChange={(e) => setName(e.currentTarget.value)} required></input>
                        <label>Email:</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} required></input>
                        <label>Password:</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} required></input>
                        <button className='signupbtn' onClick={signup}>Signup</button>
                        <button className='loginbtn' onClick={signin}>Signin</button>

                    </div>

                </div>
            </div>
        </div>

    )
}