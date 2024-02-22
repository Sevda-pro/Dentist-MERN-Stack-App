// MeetTheTeam.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
const TeamMember = ({ name, role, description }) => (
    <div className="team-member">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p>{description}</p>
    </div>
);

const MeetTheTeam = () => {
    const teamMembers = [
      {
        name: 'Dr. John Smith',
        role: 'Lead Dentist',
        description:
          'Dr. John Smith is our dedicated lead dentist with a passion for providing excellent dental care. With over 15 years of experience, he has a strong commitment to staying current with the latest advancements in dentistry to ensure the best possible care for our patients.',
      },
      {
        name: 'Jane Doe, RDH',
        role: 'Registered Dental Hygienist',
        description:
          'Jane Doe is our registered dental hygienist, committed to promoting optimal oral health. With a gentle and caring approach, she educates patients on preventive dental care and provides thorough cleanings to ensure healthy smiles.',
      },
      {
        name: 'Chris Johnson',
        role: 'Office Manager',
        description:
          'Chris Johnson is our friendly and efficient office manager. With a focus on ensuring smooth operations, Chris manages appointments, handles administrative tasks, and ensures a positive experience for our patients from the moment they walk in.',
      },
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
                <h2>Meet the Team</h2>
                <div className="team-container">
                    {teamMembers.map((member) => (
                        <TeamMember {...member} />
                    ))}
                </div>
            </section>
        </div>

    );
};

export default MeetTheTeam;
