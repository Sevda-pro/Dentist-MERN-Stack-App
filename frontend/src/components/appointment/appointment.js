// AppointmentScheduler.js
import './appointment.css'
import React, { useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';

const AppointmentScheduler = () => {
    const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [email, setEmail] = useState('')
    let token = localStorage.getItem('token')
    const handleAppointmentSubmit = async () => {
        const obj = {
            email: email,
            timeslot: selectedTimeSlot,
            about: selectedAppointmentType
        }
        let res = await axios.post(`${process.env.REACT_APP_API_KEY}/meet`, obj, { headers: { Authorization: token } })
        if(res.status==200){
            alert(res.data.message)
            setEmail('');
            setSelectedAppointmentType('');
            setSelectedTimeSlot('');
        }
       
    };

    return (
        <div className='appointmentdiv'>
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
                <NavLink to="/consultation" className="navlinkclass">
                    Consultation
                </NavLink>
                <NavLink to="/FAQsection" className="navlinkclass">
                    FAQ Section
                </NavLink>
            </header>
            <section>
                <h2>Appointment Scheduling</h2>
                <div className='a1'>
                    <label>Enter Your Email id:</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='a1'>
                    <label>Select Appointment Type:</label>
                    <select value={selectedAppointmentType} onChange={(e) => setSelectedAppointmentType(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="Check-up">Routine Check-up</option>
                        <option value="Cleaning">Cleaning</option>
                    </select>
                </div>
                {selectedAppointmentType && (
                    <div className='a1'>
                        <label>Select Time Slot:</label>
                        <select value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)} >
                            <option value="">Select...</option>
                            <option value="9AM-10AM">9:00 AM - 10:00 AM</option>
                            <option value="10AM-11AM">10:00 AM - 11:00 AM</option>
                        </select>
                    </div>
                )}
                <button onClick={handleAppointmentSubmit} disabled={!selectedAppointmentType || !selectedTimeSlot || !email}>
                    Schedule Appointment
                </button>
            </section>
        </div>

    );
};

export default AppointmentScheduler;
