// EducationCenter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink,Navigate } from 'react-router-dom';

const EducationCenter = () => {
    const articles = [
        {
            id: 1,
            title: 'The Importance of Regular Dental Check-ups',
            content: 'Regular dental check-ups are crucial for maintaining good oral health. During these appointments, your dentist can identify and address issues early, preventing more significant problems in the future. They will perform a thorough examination, clean your teeth, and provide personalized advice on oral hygiene practices. Don\'t wait until you have a dental problem to see your dentist!',
        },
        {
            id: 2,
            title: 'Tips for Maintaining Healthy Gums',
            content: 'Healthy gums are essential for overall oral health. To keep your gums in top shape, practice good oral hygiene. This includes brushing your teeth twice a day, flossing daily, and using an antiseptic mouthwash. Additionally, a balanced diet rich in vitamins and minerals contributes to gum health. If you notice any signs of gum problems, such as bleeding or swelling, consult your dentist for professional advice.',
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
                <h2>Blog / Education Center</h2>
                <div className="article-list">
                    {articles.map((article) => (
                        <div key={article.id} className="article">
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                            <a href={`/blog/${article.id}`} className="read-more-link">
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
};

export default EducationCenter;
