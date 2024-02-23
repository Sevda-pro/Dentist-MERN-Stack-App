// OnlineConsultation.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Razorpay from 'razorpay';
const OnlineConsultation = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    // async function paymentProcess(e) {
    //   try {
    //     const token = localStorage.getItem("token");
    
    //     const response = await axios.get(`${process.env.REACT_APP_API_KEY}/purchase/premiummembership`, { headers: { "Authorization": token } });
    
    //     var options = {
    //       key: response.data.key_id,
    //       order_id: response.data.order.id,
    
    //       handler: async function (response) {
    //         const res = await axios.post(
    //           `${process.env.REACT_APP_API_KEY}/purchase/updatetransactionstatus/success`,
    //           {
    //             order_id: options.order_id,
    //             payment_id: response.razorpay_payment_id,
    //           },
    //           { headers: { Authorization: token } }
    //         );
            
    //       },
    //     };
    //     const rzp1 = new Razorpay(options);
    //     rzp1.open();
    //     e.preventDefault();
    //     rzp1.on("payment.failed", async function (response) {
    //       // console.log(error);
    
    //       await axios.post(
    //         `${process.env.REACT_APP_API_KEY}/purchase/updatetransactionstatus/failed`,
    //         {
    //           order_id: response.error.metadata.order_id,
    //           payment_id: response.error.metadata.payment_id,
    //         },
    //         { headers: { Authorization: token } }
    //       );
    //       alert("something went wrong");
    //     });
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    return (
        <div>
            <header>
      <NavLink to="/home" className="navlinkclass">
        Home
      </NavLink>
      <NavLink to="/aboutus" className="navlinkclass">
        About Us
      </NavLink>
      <NavLink to="/services" className="navlinkclass">
        Services
      </NavLink>
      <NavLink to="/appointment" className="navlinkclass">
        Appointment
      </NavLink>
      <NavLink to="/contact" className="navlinkclass">
        Contact
      </NavLink>
      <NavLink to="/team" className="navlinkclass">
        Our Team
      </NavLink>
      <NavLink to="/patientform" className="navlinkclass">
        Patient Forms
      </NavLink>
      <NavLink to="/insurance" className="navlinkclass">
        Insurance & Payment
      </NavLink>
      <NavLink to="/testimonials" className="navlinkclass">
        Testimonials
      </NavLink>
      <NavLink to="/blogs" className="navlinkclass">
        Blogs
      </NavLink>
      <NavLink to="/emergency" className="navlinkclass">
        Emergency
      </NavLink>
      
      <NavLink to="/FAQsection" className="navlinkclass">
        FAQ Section
      </NavLink>
    </header>
            <section>
            <h2>Online Consultation</h2>
            {submitted ? (
                <p>Thank you for submitting your questions. Our team will get back to you shortly.</p>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br /><br />
                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br /><br />
                    <label htmlFor="question">Your Question:</label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    ></textarea>
                    <br /><br />
                    <button onClick={paymentProcess}>Payment</button>
                </form>
            )}
        </section>
        </div>
        
    );
};

export default OnlineConsultation;
