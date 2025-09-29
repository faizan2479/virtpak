import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all 12 images
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';

// Import About component
import About from './about';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const Experties = () => {
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setSidebarIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleGetServices = () => {
    navigate('/contact');
  };

  return (
    <div className="experties-container" style={{ 
      width: '100%', 
      marginTop: '100px',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Header Section */}
      <div className="text-center mb-5" style={{ padding: '0 15px' }}>
        <h1 className="display-5 fw-bold mb-3" style={{ 
          color: '#2c3e50',
          position: 'relative',
          display: 'inline-block'
        }}>
          Our Expertise
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
            borderRadius: '2px'
          }}></span>
        </h1>
        <p className="lead mx-auto" style={{ 
          maxWidth: '700px', 
          color: '#555',
          fontSize: '1.1rem'
        }}>
          Discover our diverse range of specialized services tailored to meet your business needs and drive success.
        </p>
      </div>

      {/* Top full-width cycling image */}
      <div className="d-flex flex-column align-items-center mb-5" style={{ padding: '0 15px' }}>
        <div 
          className="position-relative"
          style={{
            width: '100%',
            maxWidth: '1200px',
            aspectRatio: '16/6',
            border: '1px solid rgba(75, 0, 130, 0.2)',
            borderRadius: '12px',
            background: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={images[sidebarIndex]}
            alt={`Featured Service ${sidebarIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.5s ease',
            }}
          />
          <div className="position-absolute bottom-0 start-0 end-0 p-3 text-center" style={{
            background: 'linear-gradient(to top, rgba(75, 0, 130, 0.8), transparent)',
            color: 'white'
          }}>
            <h3 className="mb-0">Service {sidebarIndex + 1}</h3>
          </div>
        </div>
        
        {/* Dots indicator */}
        <div className="d-flex gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSidebarIndex(idx)}
              className="border-0 bg-transparent p-0"
              aria-label={`Go to service ${idx + 1}`}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: sidebarIndex === idx ? '#4a00e0' : '#d0d0d0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid of all services */}
      <Container className="mb-5 px-3 px-md-0">
        <Row className="g-4 justify-content-center">
          {images.map((img, idx) => (
            <Col key={idx} xs={12} md={6} lg={4} xl={3}>
              <div
                className="h-100 d-flex flex-column"
                style={{
                  border: '1px solid rgba(75, 0, 130, 0.1)',
                  borderRadius: '12px',
                  background: '#fff',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-7px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                onClick={() => setSidebarIndex(idx)}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
                  overflow: 'hidden'
                }}>
                  <img
                    src={img}
                    alt={`Service ${idx + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="p-3 d-flex flex-column flex-grow-1">
                  <h5 className="mb-2" style={{ color: '#2c3e50' }}>Service {idx + 1}</h5>
                  <p className="mb-3 flex-grow-1" style={{ 
                    color: '#7f8c8d',
                    fontSize: '0.9rem'
                  }}>
                    Professional solution tailored to meet specific business requirements and challenges.
                  </p>
                  <Button 
                    variant="primary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGetServices();
                    }}
                    className="w-100"
                    style={{
                      padding: '10px 15px',
                      fontWeight: '600',
                      color: '#fff',
                      background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
                      border: 'none',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(to right, #3a00c0, #6e1dc2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(to right, #4a00e0, #8e2de2)'}
                  >
                    Get Service
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="text-center py-5 mb-5" style={{ 
        background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
        color: 'white',
        borderRadius: '15px',
        margin: '0 15px'
      }}>
        <Container>
          <h2 className="mb-3">Ready to Transform Your Business?</h2>
          <p className="lead mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Our experts are ready to help you leverage cutting-edge solutions for your success.
          </p>
          <Button 
            variant="light" 
            size="lg"
            onClick={handleGetServices}
            style={{
              padding: '12px 40px',
              fontWeight: '600',
              color: '#4a00e0',
              borderRadius: '50px',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            }}
          >
            Contact Us Today
          </Button>
        </Container>
      </div>

      {/* Render About page at the end */}
      <About />
      
      {/* Custom Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .experties-container {
            margin-top: 15px;
          }
          
          .display-5 {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .display-5 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Experties;