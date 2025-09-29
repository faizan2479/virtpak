import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setCharCount(message.length);
  }, [message]);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    
    // Show success animation
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setHover(0);
      setMessage('');
      setCharCount(0);
    }, 4000);
  };

  const handleRatingAnimation = (star) => {
    setRating(star);
    
    // Create a ripple effect for the selected star
    const stars = document.querySelectorAll('.star');
    if (stars[star - 1]) {
      stars[star - 1].classList.add('star-pulse');
      setTimeout(() => {
        stars[star - 1].classList.remove('star-pulse');
      }, 300);
    }
  };

  return (
    <Container className="py-5" style={{ minHeight: '80vh', marginTop: '48px' }}>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="feedback-card" style={{ 
            borderRadius: '20px',
            border: 'none',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(75, 0, 130, 0.15)',
            transform: 'translateY(0)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, #4b0082 0%, #2575fc 100%)',
              height: '10px'
            }}></div>
            
            <Card.Body className="p-4 p-md-5">
              <div className="text-center mb-4">
                <div className="feedback-icon mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#4b0082" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                
                <h2 className="mb-3" style={{ 
                  color: '#4b0082',
                  fontWeight: '700',
                  fontSize: '2rem'
                }}>We Value Your Feedback!</h2>
                
                <p style={{ 
                  color: '#666',
                  fontSize: '1.1rem',
                  maxWidth: '500px',
                  margin: '0 auto'
                }}>
                  Your opinion helps us improve. Please rate our services and share your experience.
                </p>
              </div>
              
              {submitted && (
                <div className="feedback-success" style={{
                  background: 'linear-gradient(90deg, #4b0082 0%, #2575fc 100%)',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  marginBottom: '25px',
                  animation: 'fadeInOut 4s forwards'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24" className="mb-2">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <h3 className="mb-0">Thank You!</h3>
                  <p className="mb-0">Your feedback has been submitted successfully.</p>
                </div>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4 text-center">
                  <div className="star-rating" style={{ fontSize: '2.5rem' }}>
                    {[1,2,3,4,5].map(star => (
                      <span
                        key={star}
                        className={`star ${star <= rating ? 'rated' : ''}`}
                        style={{
                          cursor: 'pointer',
                          color: (hover || rating) >= star ? '#ffd700' : '#e0e0e0',
                          margin: '0 5px',
                          position: 'relative',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => handleRatingAnimation(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        aria-label={`Rate ${star} stars`}
                      >★</span>
                    ))}
                  </div>
                  
                  <div className="mt-3" style={{ 
                    color: '#4b0082', 
                    fontWeight: '600',
                    fontSize: '1.2rem'
                  }}>
                    {rating > 0 ? (
                      <>
                        You rated us <span style={{ color: '#ff9800' }}>{rating}</span> star{rating > 1 ? 's' : ''}
                      </>
                    ) : (
                      'Click stars to rate us'
                    )}
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <Form.Label style={{ 
                      color: '#4b0082', 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>Your Feedback</Form.Label>
                    
                    <div className={`char-count ${charCount > 400 ? 'text-warning' : ''} ${charCount > 490 ? 'text-danger' : ''}`} style={{ 
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      {charCount}/500
                    </div>
                  </div>
                  
                  <div className={`feedback-input ${isTyping ? 'typing' : ''}`} style={{
                    position: 'relative',
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    padding: '15px'
                  }}>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Share your experience or suggestions..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      onFocus={() => setIsTyping(true)}
                      onBlur={() => setIsTyping(false)}
                      maxLength={500}
                      style={{
                        border: 'none',
                        boxShadow: 'none',
                        padding: '0',
                        resize: 'none'
                      }}
                      required
                    />
                    
                    <div className="input-highlight" style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      height: '3px',
                      width: '100%',
                      background: 'linear-gradient(90deg, #4b0082 0%, #2575fc 100%)',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease'
                    }}></div>
                  </div>
                </Form.Group>
                
                <div className="text-center mt-4">
                  <Button
                    variant="primary"
                    type="submit"
                    className="feedback-submit-btn"
                    style={{
                      background: 'linear-gradient(90deg, #4b0082 0%, #2575fc 100%)',
                      border: 'none',
                      borderRadius: '50px',
                      padding: '12px 50px',
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}
                    disabled={rating === 0 || message.trim() === ''}
                  >
                    <span className="btn-text">Submit Feedback</span>
                    <span className="btn-icon" style={{
                      position: 'absolute',
                      right: '20px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: '0',
                      transition: 'all 0.3s ease'
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                    </span>
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Custom Styles */}
      <style jsx>{`
        .feedback-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 40px rgba(75, 0, 130, 0.2) !important;
        }
        
        .feedback-icon {
          background-color: rgba(75, 0, 130, 0.1);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: all 0.3s ease;
        }
        
        .feedback-input.typing {
          border-color: #4b0082 !important;
          box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.1);
        }
        
        .feedback-input.typing .input-highlight {
          transform: scaleX(1) !important;
        }
        
        .star-rating .star {
          transition: all 0.3s ease;
        }
        
        .star-rating .star:hover {
          transform: scale(1.3);
        }
        
        .star-rating .rated {
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }
        
        .star-pulse {
          animation: pulse 0.6s ease;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
        
        .feedback-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(75, 0, 130, 0.3) !important;
        }
        
        .feedback-submit-btn:hover:not(:disabled) .btn-text {
          transform: translateX(-10px);
        }
        
        .feedback-submit-btn:hover:not(:disabled) .btn-icon {
          opacity: 1 !important;
          transform: translate(-10px, -50%) !important;
        }
        
        .feedback-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        
        .feedback-success {
          animation: fadeInOut 4s forwards;
        }
        
        @media (max-width: 768px) {
          .feedback-card {
            border-radius: 15px !important;
          }
          
          .star-rating {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .feedback-icon {
            width: 70px;
            height: 70px;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default Feedback;