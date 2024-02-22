// ContactInformation.js
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';

import React from 'react';

const ContactInformation = () => {
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
                <h2>Contact Information</h2>
                <div>
                    <p>
                        <strong>Address:</strong> 123 Main Street, Cityville
                    </p>
                    <iframe
                        title="Dental Practice Location"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.987654!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEyJzA2LjkiTiA3M8KwMjEnMzUuNCJX!5e0!3m2!1sen!2sus!4v1646971068625!5m2!1sen!2sus"
                        allowFullScreen
                    ></iframe>
                </div>
                <div>
                    <p>
                        <strong>Phone:</strong> (123) 456-7890
                    </p>
                    <p>
                        <strong>Email:</strong> info@dentalpractice.com
                    </p>
                </div>
                <div>
                    <p>
                        <strong>Office Hours:</strong>
                    </p>
                    <ul>
                        <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                        <li>Saturday: 9:00 AM - 1:00 PM</li>
                        {/* Add more days and hours as needed */}
                    </ul>
                </div>
                <div>
                    {/* Include a button or link to get directions */}
                    <a
                        href="https://www.google.com/maps/dir//123+Main+Street,+Cityville"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get Directions
                    </a>
                </div>
            </section>
        </div>

    );
};

export default ContactInformation;
