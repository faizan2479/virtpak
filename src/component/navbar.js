import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Close navbar when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      expanded={expanded} 
      fixed="top"
      className={`py-2 transition-all ${scrolled ? 'scrolled' : ''}`}
      style={{ 
        background: scrolled 
          ? 'rgba(75, 0, 130, 0.95)' 
          : 'linear-gradient(15deg, #4b0082 0%, #00008b 100%)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
          <div className="logo-container position-relative me-2">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="VirtPak logo"
              style={{
                transition: 'all 0.3s ease',
                transform: scrolled ? 'scale(0.8)' : 'scale(1)'
              }}
            />
            <div className="logo-pulse"></div>
          </div>
          <div className="d-flex flex-column brand-text">
            <span className="fw-bold fs-4" style={{ letterSpacing: '0.5px' }}>VIRTPAK</span>
            <span className="text-light fst-italic small tagline" style={{ opacity: scrolled ? 0 : 1 }}>
              Our Services, Your Success
            </span>
          </div>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(!expanded)}
          className="text-white border-0"
          style={{ background: 'transparent' }}
        >
          <div className={`hamburger ${expanded ? 'active' : ''}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {[
              { path: '/virtpak', label: 'Home' },
              { path: '/experties', label: 'Our Expertise' },
              { path: '/contact', label: 'Contact Us' },
              { path: '/feedback', label: 'Feedback' },
              { path: '/about', label: 'About Us' }
            ].map((item) => (
              <Nav.Link 
                key={item.path}
                as={Link}
                to={item.path}
                className={`nav-link-item mx-lg-2 my-1 my-lg-0 ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Nav.Link>
            ))}

           
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      {/* Custom CSS */}
      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }



        
        .logo-container {
          position: relative;
          display: inline-block;
        }
        
        .logo-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          animation: pulse 2s infinite;
          z-index: -1;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .brand-text {
          transition: all 0.3s ease;
          transform: ${scrolled ? 'translateX(-10px)' : 'none'};
        }
        
        .tagline {
          transition: opacity 0.3s ease;
        }
        
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          cursor: pointer;
        }
        
        .bar {
          height: 3px;
          width: 100%;
          background-color: white;
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .hamburger.active .bar:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        .nav-link-item {
          color: white !important;
          font-weight: 500;
          position: relative;
          padding: 8px 0 !important;
          transition: all 0.3s ease;
        }
        
        .nav-link-item:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #ff7eee, #4cc9f0);
          transition: width 0.3s ease;
        }
        
        .nav-link-item:hover:after,
        .nav-link-item.active:after {
          width: 100%;
        }
        
        .nav-link-item:hover {
          transform: translateY(-2px);
        }
        
        .admin-btn {
          background: rgba(255, 255, 255, 0.15);
          color: #ffd700 !important;
          border-radius: 8px;
          padding: 8px 15px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 215, 0, 0.3);
        }
        
        .admin-btn:hover {
          background: rgba(255, 215, 0, 0.2);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .login-btn {
          background: linear-gradient(to right, #4cc9f0, #4361ee);
          color: white !important;
          border-radius: 8px;
          padding: 8px 15px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(76, 201, 240, 0.3);
        }
        
        .login-btn:hover {
          background: linear-gradient(to right, #3ab9e0, #3550d4);
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(76, 201, 240, 0.4);
        }
        
        @media (max-width: 992px) {
          .navbar-collapse {
            background: rgba(75, 0, 130, 0.95);
            padding: 20px;
            border-radius: 10px;
            margin-top: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          
          .nav-link-item {
            padding: 10px 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          
          .admin-btn, .login-btn {
            margin-top: 10px;
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .logo-container img {
            width: 50px;
            height: 50px;
          }
          
          .brand-text span {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </Navbar>
  );
};

export default CustomNavbar;