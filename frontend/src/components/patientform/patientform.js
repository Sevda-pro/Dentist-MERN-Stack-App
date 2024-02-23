// PatientForms.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';

const PatientForms = () => {
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
                <h2>Patient Forms</h2>
                <p>
                    To streamline your check-in process and save time during office visits, you can download and
                    fill out the necessary forms below before your appointment.
                </p>
                <div className="form-links">
                    <a href="https://drive.google.com/file/d/17cRSDbQwrup2wqlLTO846-5XnvBS_k9l/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Intake Form
                    </a><br /><br />
                    <a href="https://drive.google.com/file/d/17cRSDbQwrup2wqlLTO846-5XnvBS_k9l/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Medical History Form
                    </a><br /><br />
                    <a href="https://drive.google.com/file/d/17cRSDbQwrup2wqlLTO846-5XnvBS_k9l/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Consent Form
                    </a><br /><br />
                </div>
            </section>
        </div>

    );
};

export default PatientForms;
