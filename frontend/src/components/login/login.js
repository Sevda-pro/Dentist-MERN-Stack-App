import { useState, useEffect } from 'react';
import '../signup/signup.css'
import { useNavigate } from 'react-router-dom';
import {FloatingLabel,Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
export default function Login() {
const navigate = useNavigate(); 
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    async function signin(e) {
        e.preventDefault();
    
        try {
            let obj = {
                email: email,
                password: password
            };
    
            let res = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, obj);
    
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token);
                console.log('here')
                navigate('/home');
            }
        } catch (error) {
            console.error('Error during sign in:', error);
            alert('Sign in failed. Please check your credentials and try again.');
        }
    }
    
    function signup(){
     navigate('/');
    }
    return (
        
        <div className="signup">
           <div className='frame'>
                <div className='shape'>
                    <div className='formdiv'>
                        <label>Email:</label>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.currentTarget.value)}></input>
                        <label>Password:</label>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.currentTarget.value)}></input>
                        <button className='signupbtn' onClick={signin}>Signin</button>
                        <button className='loginbtn' onClick={signup}>Signup</button>

                    </div>

                </div>
            </div>
            
        </div>

    )
}