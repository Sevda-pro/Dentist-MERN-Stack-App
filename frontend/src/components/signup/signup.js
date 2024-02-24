import { useState, useEffect } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom'
import { FloatingLabel, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { BiColor, BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signupalert, setAlert] = useState(false)
    const [hidebtnkey, setHidebtnkey] = useState(true)
    const [showbtnkey, setShowbtnkey] = useState(false)
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
    function hidebtn(){
        const passwordInput = document.getElementById('passwordid');
            passwordInput.type = 'text';
        setHidebtnkey(false);
        setShowbtnkey(true);
    }
    function showbtn(){
        const passwordInput = document.getElementById('passwordid');
            passwordInput.type = 'password';
        setHidebtnkey(true);
        setShowbtnkey(false);
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
                        <input type='password' value={password} id='passwordid' onChange={(e) => setPassword(e.currentTarget.value)} required></input>
                     {hidebtnkey && <BiHide size={20} onClick={hidebtn} className='hidebtn'/>}  
                     {showbtnkey && <BiShow size={20} onClick={showbtn} className='hidebtn'/>}   
                        <button className='signupbtn' onClick={signup}>Signup</button>
                        <button className='loginbtn' onClick={signin}>Signin</button>

                    </div>

                </div>
            </div>
        </div>

    )
}