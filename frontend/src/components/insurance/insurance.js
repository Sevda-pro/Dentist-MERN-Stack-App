// InsurancePaymentInfo.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes,NavLink, Navigate } from 'react-router-dom';

const InsurancePaymentInfo = () => {
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
      <h2>Insurance and Payment Information</h2>
      <div>
        <h3>Accepted Insurance Plans</h3>
        <p>We accept a wide range of insurance plans to make your dental care more accessible. Please contact us to inquire about specific plans.</p>
      </div>
      <div>
        <h3>Payment Options</h3>
        <p>We offer the following payment options for your convenience:</p>
        <ul>
          <li>Cash</li>
          <li>Credit Cards (Visa, MasterCard, American Express)</li>
          <li>Debit Cards</li>
          <li>Insurance Coverage</li>
        </ul>
      </div>
      <div>
        <h3>Financing Options</h3>
        <p>For your convenience, we also offer financing options. Please inquire about our flexible financing plans to help manage your dental expenses.</p>
      </div>
      <div>
        <h3>Special Offers and Discounts</h3>
        <p>Take advantage of our special offers and discounts for new patients, referrals, and more. Contact us to learn about our current promotions.</p>
      </div>
    </section>
    </div>
    
  );
};

export default InsurancePaymentInfo;
