// Testimonials.js
import { BrowserRouter as Router, Route, Routes,NavLink, Navigate } from 'react-router-dom';
import React from 'react';
import './testimonial.css'
const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            comment: 'I had a fantastic experience at this dental practice. The staff was friendly, and the service was excellent. I highly recommend it!',
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment: 'The dentists and hygienists here are top-notch. They make you feel comfortable and provide personalized care. I wouldn\'t go anywhere else!',
        },
        // Add more testimonials as needed
    ];

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
                <h2>Testimonials</h2>
                <div className="testimonial-container">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial">
                            <p>{testimonial.comment}</p>
                            <p className="testimonial-author">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
};

export default Testimonials;
