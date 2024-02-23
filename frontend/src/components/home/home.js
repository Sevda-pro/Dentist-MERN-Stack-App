import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './home.css'
import { IoIosLogOut } from "react-icons/io";

export default function Home() {
  const navigate=useNavigate();
  const handlelogoutbtn=async(e)=>{
    e.preventDefault();
     localStorage.clear();
     navigate('/login')
  }
    return (<div>
        <header>
      
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
      <NavLink to="/FAQsection" className="navlinkclass">
        FAQ Section
      </NavLink>
      <NavLink onClick={handlelogoutbtn} className='logologoutbtn' >
      <IoIosLogOut size={30}/>
      </NavLink>
    </header>
        <section>
            <h2>Welcome to Our Dental Practice</h2>
            <p>
                We are dedicated to providing high-quality dental care and ensuring
                the best oral health for our patients.
            </p>
        </section>
        <section>
            <h2>Practice Highlights</h2>
            <p>
                    - State-of-the-art facilities with the latest dental technology <br />
                    - Comprehensive range of dental services for individuals and families <br />
                    - Friendly and experienced staff to address all your dental needs <br />
                    - Accepting new patients with a focus on personalized care
                </p>
        </section>
        <footer>
            <div className='footerdiv'>
                <div>
                    <h3>Contact Information</h3>
                    <p>
                        <strong>Address:</strong> 123 Main Street, Cityville
                    </p>
                    <p>
                        <strong>Phone:</strong> (123) 456-7890
                    </p>
                    <p>
                        <strong>Email:</strong> info@dentalpractice.com
                    </p>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a><br/>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a><br/>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
                <div>
                    <p>&copy; 2024 Dental Practice</p>
                    <p>Designed by Sahil Sevda</p>
                </div>
            </div>


        </footer>
    </div>
    )
}