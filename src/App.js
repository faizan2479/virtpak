// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Experties from './component/experties'; // Capitalized import
import About from './component/about';
import Contact from './pages/contact';
import Services from './pages/services';
import Feedback from './component/feedback';
import ServiceImage from './component/serviceImage';
import VirtPak from './component/virtpak'; // New import

// // Import admin dashboard components
// import AdminDashboard from './admin/Dashboard';
// import AdminMessages from './admin/Messages';
// import AdminChats from './admin/Chats';
// import AdminAnalytics from './admin/Analytics';
// import AdminSettings from './admin/Settings';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '35px' }}> {/* Add margin to prevent content from hiding behind navbar */}
        <Routes>
          <Route path="/" element={<VirtPak />} /> {/* Show VirtPak on launch */}
          <Route path="/virtpak" element={<VirtPak />} />
          <Route path="/experties" element={<Experties />} /> {/* Capitalized usage */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/services" element={<Services />} /> */} {/* removed */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/services/:serviceKey" element={<ServiceImage />} />
          {/* Admin dashboard routes */}
          {/* <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="/admin/chats" element={<AdminChats />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/settings" element={<AdminSettings />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;

