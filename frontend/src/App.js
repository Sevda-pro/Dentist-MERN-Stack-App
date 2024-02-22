import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import AboutUs from './components/aboutus/aboutus';
import AppointmentScheduler from './components/appointment/appointment';
import ContactInformation from './components/contact/contact';
import MeetTheTeam from './components/team/team';
import PatientForms from './components/patientform/patientform';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Services from './components/services/service';
import InsurancePaymentInfo from './components/insurance/insurance';
import Testimonials from './components/testimonial/testimonial';
import EducationCenter from './components/blogs/blogs';
import EmergencyContactInfo from './components/emergency/emergency';
import OnlineConsultation from './components/consultation/consultation';
import FAQSection from './components/faqsection/faqsection';
import Login from './components/login/login';
import Signup from './components/signup/signup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<AppointmentScheduler />} />
        <Route path="/contact" element={<ContactInformation />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/patientform" element={<PatientForms />} />
        <Route path="/insurance" element={<InsurancePaymentInfo />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blogs" element={<EducationCenter />} />
        <Route path="/emergency" element={<EmergencyContactInfo />} />
        <Route path="/consultation" element={< OnlineConsultation />} />
        <Route path="/FAQsection" element={< FAQSection />} />
      </Routes>
    </Router>
  );
}

export default App;
