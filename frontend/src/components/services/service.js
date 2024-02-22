import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
const Services = () => {
    return (
        <div className='servicediv'>
            <header>
      <NavLink to="/home" className="navlinkclass">
        Home
      </NavLink>
      <NavLink to="/aboutus" className="navlinkclass">
        About Us
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
      <NavLink to="/consultation" className="navlinkclass">
      Consultation
      </NavLink>
      <NavLink to="/FAQsection" className="navlinkclass">
        FAQ Section
      </NavLink>
    </header>
            <section>
                <h2>Our Services</h2>
                <p>
                    At DentalCare, we offer a comprehensive range of dental services to meet the
                    needs of our patients. Our experienced team is dedicated to providing
                    high-quality care in a comfortable environment.
                </p>

                <p>
                    Whether you require a simple check-up or more specialized treatments,
                    we are here to ensure your dental health and provide personalized care.
                </p>
            </section>
            <section>
                <h2> Our Services include:</h2>
                <ul>
                    <li>Routine Check-ups</li>
                    <li>Cleanings</li>
                    <li>Fillings</li>
                    <li>Root Canals</li>
                    <li>Extractions</li>
                    <li>Cosmetic Dentistry</li>
                    <li>Specialized Treatments</li>
                </ul>
            </section>
        </div>

    );
};

export default Services;
