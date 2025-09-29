import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('email');

  const openWhatsApp = () => {
    const message = `Hello VirtPak team! I'm interested in your services.`;
    const phoneNumber = '923032479703';
    
    // Check if we're on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices - try to open WhatsApp app with fallback to web
      const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      // Try to open the app first
      window.location.href = appUrl;
      
      // Fallback to web if app doesn't open
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = webUrl;
        }
      }, 2000);
    } else {
      // For desktop devices - open WhatsApp Web directly
      const webUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(webUrl, '_blank');
    }
  };

  const openEmail = () => {
    const subject = "Inquiry about VirtPak Services";
    const body = "Hello VirtPak team,\n\nI'm interested in your services. Please contact me with more information.\n\nThank you.";
    
    // Check if we're on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices - open default email app
      window.location.href = `mailto:virtpak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // For desktop devices - open Gmail compose window
      const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=virtpak@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    }
  };

  return (
    <Container fluid className="px-0 contact-container" style={{ 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Gradient Header Section */}
      <div style={{
        background: 'linear-gradient(90deg, #4b0082 0%, #00008b 100%)',
        padding: '3rem 0',
        marginBottom: '3rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <Container>
          <div className="text-center">
            <h1 className="fw-bold mb-3" style={{ color: '#fff' }}>Contact VirtPak</h1>
            <p className="lead mb-0" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Professional solutions for your digital needs
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="mb-5" style={{ marginTop: '48px' }}>
        {/* Tab Navigation */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group contact-tabs" role="group">
            <Button
              variant={activeTab === 'email' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveTab('email')}
              className="tab-button"
            >
              <img 
                src={require('../component/images/email.png')}
                alt="Email" 
                style={{ width: '20px', height: '20px', marginRight: '8px' }} 
              />
              Email Us
            </Button>
            <Button
              variant={activeTab === 'whatsapp' ? 'primary' : 'outline-primary'}
              onClick={() => setActiveTab('whatsapp')}
              className="tab-button"
            >
              <img 
                src={require('../component/images/wp.png')}
                alt="WhatsApp" 
                style={{ width: '20px', height: '20px', marginRight: '8px' }} 
              />
              WhatsApp
            </Button>
          </div>
        </div>

        {activeTab === 'email' ? (
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow-lg border-0 email-card" style={{ 
                borderRadius: '20px',
                overflow: 'hidden',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  background: 'linear-gradient(90deg, #ea4335 0%, #4285f4 100%)',
                  height: '8px'
                }}></div>
                
                <Card.Body className="p-4 p-md-5 text-center">
                  <div className="email-icon mb-4">
                    <img 
                      src={require('../component/images/email.png')}
                      alt="Email" 
                      style={{ width: '80px', height: '80px' }} 
                    />
                  </div>
                  
                  <h2 className="mb-3" style={{ color: '#ea4335' }}>
                    Email Us Directly
                  </h2>
                  
                  <p className="text-muted mb-4">
                    Send us an email directly from your email client. We typically respond within 24 hours
                    during business days.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2">Our Email Address</h5>
                    <p className="mb-1 fs-5">
                      <a href="mailto:virtpak@gmail.com" className="text-decoration-none contact-link">
                        virtpak@gmail.com
                      </a>
                    </p>
                    <p className="text-muted small">
                      Click to email directly
                    </p>
                  </div>
                  
                  <Button
                    variant="primary"
                    size="lg"
                    className="email-btn mb-3"
                    onClick={openEmail}
                    style={{
                      background: 'linear-gradient(90deg, #ea4335 0%, #4285f4 100%)',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '0.75rem 2.5rem',
                      fontWeight: '600'
                    }}
                  >
                    <img 
                      src={require('../component/images/email.png')}
                      alt="Email" 
                      style={{ width: '20px', height: '20px', marginRight: '8px' }} 
                    />
                    Compose Email
                  </Button>
                  
                  <div className="mt-4">
                    <p className="text-muted small">
                      <i className="bi bi-info-circle me-1"></i>
                      {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) 
                        ? "Will open your default email app with a pre-filled message"
                        : "Will open Gmail in a new tab with a pre-filled message"
                      }
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="shadow-lg border-0 whatsapp-card" style={{ 
                borderRadius: '20px',
                overflow: 'hidden',
                transform: 'translateY(0)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
                  height: '8px'
                }}></div>
                
                <Card.Body className="p-4 p-md-5 text-center">
                  <div className="whatsapp-icon mb-4">
                    <img 
                      src={require('../component/images/wp.png')}
                      alt="WhatsApp" 
                      style={{ width: '80px', height: '80px' }} 
                    />
                  </div>
                  
                  <h2 className="mb-3" style={{ color: '#128C7E' }}>
                    Chat with us on WhatsApp
                  </h2>
                  
                  <p className="text-muted mb-4">
                    Get instant responses and quick support from our team directly through WhatsApp.
                    We're available during business hours and typically respond immediately.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2">Our WhatsApp Number</h5>
                    <p className="mb-1 fs-5">
                      <a href="tel:+923032479703" className="text-decoration-none contact-link">
                        +92 303 2479703
                      </a>
                    </p>
                    <p className="text-muted small">
                      Tap to call directly
                    </p>
                  </div>
                  
                  <Button
                    variant="success"
                    size="lg"
                    className="whatsapp-btn mb-3"
                    onClick={openWhatsApp}
                    style={{
                      background: 'linear-gradient(90deg, #25D366 0%, #128C7E 100%)',
                      border: 'none',
                      borderRadius: '30px',
                      padding: '0.75rem 2.5rem',
                      fontWeight: '600'
                    }}
                  >
                    <img 
                      src={require('../component/images/wp.png')}
                      alt="WhatsApp" 
                      style={{ width: '20px', height: '20px', marginRight: '8px' }} 
                    />
                    Start WhatsApp Chat
                  </Button>
                  
                  <div className="mt-4">
                    <p className="text-muted small">
                      <i className="bi bi-info-circle me-1"></i>
                      {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) 
                        ? "Will open WhatsApp app if installed, or WhatsApp Web otherwise"
                        : "Will open WhatsApp Web in a new tab"
                      }
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {/* Support Information */}
        <Row className="mt-5 support-info">
          <Col md={4} className="mb-4 mb-md-0">
            <Card className="h-100 border-0 shadow-sm support-card">
              <Card.Body className="text-center p-4">
                <div className="support-icon mb-3">
                  <img 
                    src={require('../component/images/email.png')}
                    alt="Email Support" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                </div>
                <h5 className="fw-bold mb-2">Email Support</h5>
                <p className="mb-0">
                  <a href="mailto:virtpak@gmail.com" className="text-decoration-none contact-link">
                    virtpak@gmail.com
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <Card className="h-100 border-0 shadow-sm support-card">
              <Card.Body className="text-center p-4">
                <div className="support-icon mb-3">
                  <img 
                    src={require('../component/images/phone.png')}
                    alt="Phone Support" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                </div>
                <h5 className="fw-bold mb-2">Phone Support</h5>
                <p className="mb-0">
                  <a href="tel:+923032479703" className="text-decoration-none contact-link">
                    +92 303 2479703
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm support-card">
              <Card.Body className="text-center p-4">
                <div className="support-icon mb-3">
                  <img 
                    src={require('../component/images/work.png')}
                    alt="Working Hours" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                </div>
                <h5 className="fw-bold mb-2">Working Hours</h5>
                <p className="mb-1">Monday - Saturday</p>
                <p className="mb-1">9:00 AM - 7:00 PM PST</p>
                <p className="mb-0 fw-medium text-primary">Customer Support: 24/7</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="py-4 mt-5" style={{
        background: 'linear-gradient(90deg, #4b0082 0%, #00008b 100%)',
        color: 'white'
      }}>
        <Container>
          <Row>
            <Col className="text-center">
              <div className="d-flex align-items-center justify-content-center">
                <div className="logo-pulse me-2"></div>
                <span style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: 1 }}>
                  Our Services, Your Success
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      
      {/* Custom Styles */}
      <style jsx>{`
        .contact-container {
          font-family: 'Poppins', sans-serif;
        }
        
        .contact-tabs .tab-button {
          min-width: 180px;
          border-radius: 30px !important;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .email-card, .whatsapp-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(75, 0, 130, 0.1);
        }
        
        .email-card:hover, .whatsapp-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 40px rgba(75, 0, 130, 0.15) !important;
        }
        
        .email-icon, .whatsapp-icon {
          background-color: rgba(234, 67, 53, 0.1);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: all 0.3s ease;
        }
        
        .whatsapp-icon {
          background-color: rgba(37, 211, 102, 0.1);
        }
        
        .email-btn, .whatsapp-btn {
          border: none;
          border-radius: 30px;
          padding: 0.75rem 2.5rem;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .email-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(234, 67, 53, 0.3);
        }
        
        .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
        }
        
        .support-card {
          border-radius: 15px;
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .support-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .support-icon {
          width: 60px;
          height: 60px;
          background: rgba(75, 0, 130, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .contact-link {
          color: #4b0082;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .contact-link:hover {
          color: #2575fc;
        }
        
        .logo-pulse {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        
        @media (max-width: 768px) {
          .contact-tabs .tab-button {
            min-width: 140px;
            padding: 0.5rem 1rem;
          }
          
          .email-card, .whatsapp-card {
            border-radius: 15px !important;
          }
          
          .support-card {
            margin-bottom: 20px;
          }
        }
        
        @media (max-width: 576px) {
          .email-icon, .whatsapp-icon {
            width: 70px;
            height: 70px;
          }
          
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </Container>
  );
};

export default Contact;