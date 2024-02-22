// FAQSection.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes,NavLink, Navigate } from 'react-router-dom';

const FAQSection = () => {
    const faqs = [
        {
            id: 1,
            question: 'What dental procedures do you offer?',
            answer: 'We offer a wide range of dental procedures, including routine check-ups, cleanings, fillings, root canals, extractions, cosmetic dentistry, and specialized treatments. Please visit our Services page for more details.',
        },
        {
            id: 2,
            question: 'Do you accept insurance?',
            answer: 'Yes, we accept a variety of insurance plans. Please contact our office to inquire about specific plans and coverage details.',
        },
        {
            id: 3,
            question: 'What payment options do you offer?',
            answer: 'We offer several payment options, including cash, credit cards (Visa, MasterCard, American Express), debit cards, and insurance coverage. Additionally, we provide financing options for your convenience.',
        },
        {
            id: 4,
            question: 'How can I schedule an appointment?',
            answer: 'You can schedule an appointment by using our online appointment scheduling system on our website. Alternatively, you can call our office during regular business hours to speak with our staff and schedule your visit.',
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
      <NavLink to="/blogs" className="navlinkclass">
        Blogs
      </NavLink>
      <NavLink to="/emergency" className="navlinkclass">
        Emergency
      </NavLink>
      <NavLink to="/consultation" className="navlinkclass">
      Consultation
      </NavLink>
      
    </header>
            <section>
                <h2>FAQ Section</h2>
                <div className="faq-list">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="faq">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    );
};

export default FAQSection;
