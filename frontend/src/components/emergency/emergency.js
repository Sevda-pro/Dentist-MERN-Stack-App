import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink,Navigate } from 'react-router-dom';

const EmergencyContactInfo = () => {
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
      
      <NavLink to="/consultation" className="navlinkclass">
      Consultation
      </NavLink>
      <NavLink to="/FAQsection" className="navlinkclass">
        FAQ Section
      </NavLink>
    </header>
            <section>
      <h2>Emergency Contact Information</h2>
      <div>
        <p>
          In case of a dental emergency outside of regular office hours, please contact our emergency line at<br/> <strong>(123) 456-7890</strong>.
        </p>
        <p>
          If you are experiencing severe pain, swelling, or trauma, it is important to seek prompt dental care. In the meantime, you can take the following steps:
        </p>
        <ul>
          <li>Rinse your mouth with warm water to clean the area.</li>
          <li>Gently floss around the affected tooth to remove any debris.</li>
          <li>If there is swelling, apply a cold compress to the outside of your cheek.</li>
          <li>Take over-the-counter pain relievers as directed.</li>
          <li>Contact our emergency line for further assistance.</li>
        </ul>
      </div>
    </section>
    </div>
    
  );
};

export default EmergencyContactInfo;
