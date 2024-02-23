// AboutUs.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='aboutdiv'>
      <header>
        <NavLink to="/home" className="navlinkclass">
          Home
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
        <NavLink to="/consultation" className="navlinkclass">
          Consultation
        </NavLink>
        <NavLink to="/FAQsection" className="navlinkclass">
          FAQ Section
        </NavLink>
      </header>
      <section>
        <h2>About Us</h2>
        <p>
          Welcome to our dental practice! At DentalCare, we take pride in providing
          exceptional dental services to our community. Dr. John Smith, our lead dentist,
          brings a wealth of experience and expertise to ensure the best possible care
          for our patients.
        </p>
        <p>
          <strong>Qualifications:</strong> Dr. Smith holds a Doctor of Dental Medicine (DMD)
          degree from XYZ University and is a licensed practitioner. He continues to
          expand his knowledge through ongoing education and training.
        </p>
        <p>
          <strong>Experience:</strong> With over 15 years of experience, Dr. Smith has
          successfully treated a diverse range of dental cases. From routine check-ups
          to complex procedures, our practice is equipped to handle all your dental needs.
        </p>
        <p>
          <strong>Philosophy of Care:</strong> We believe in a patient-centered approach,
          focusing on individualized care tailored to your unique needs. Our goal is to
          create a comfortable and welcoming environment, ensuring a positive experience
          for every patient who walks through our doors.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
