import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import img3 from './assets/3.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img10 from './assets/10.png';
import img11 from './assets/11.png';
import img12 from './assets/12.png';

const serviceImageMap = {
  'web-scraping': img3,
  'web-automation': img3,
  'web-development': img3,
  'cyber-security': img7,
  'network-config': img6,
  'logo-design': img8,
  'banner-design': img8,
  'presentation': img12,
  'app-development': img5,
  'seo': img11,
  'social-media': img10,
};

const serviceTitleMap = {
  'web-scraping': 'Web Scraping',
  'web-automation': 'Web Automation',
  'web-development': 'Web Development',
  'cyber-security': 'Cyber Security',
  'network-config': 'Network Configuration',
  'logo-design': 'Logo Design',
  'banner-design': 'Banner Designs',
  'presentation': 'Presentation PPT',
  'app-development': 'App Development',
  'seo': 'SEO Services',
  'social-media': 'Social Media Marketing',
};

const ServiceImage = () => {
  const { serviceKey } = useParams();
  const navigate = useNavigate();
  const img = serviceImageMap[serviceKey];
  const title = serviceTitleMap[serviceKey] || 'Service';

  if (!img) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '1.5rem' }}>
        Service not found.
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#fff', position: 'relative', paddingBottom: '0' }}>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ marginBottom: '30px', color: '#4b0082' }}>{title}</h2>
        <img src={img} alt={title} style={{ maxWidth: '90%', maxHeight: '500px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }} />
        <div style={{ marginTop: '32px' }}>
          <Button
            variant="primary"
            size="lg"
            style={{
              background: '#4b0082',
              border: 'none',
              borderRadius: '30px',
              padding: '10px 40px',
              fontWeight: 600
            }}
            onClick={() => navigate('/contact')}
          >
            Get Services
          </Button>
        </div>
      </div>
      <footer style={{
        width: '100%',
        marginTop: '40px',
        background: 'linear-gradient(15deg, #4b0082 0%, #00008b 100%)',
        color: '#fff',
        padding: '16px 0',
        textAlign: 'center',
        borderRadius: 0
      }}>
        <span style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: 1 }}>
          Our Services, Your Success
        </span>
      </footer>
    </div>
  );
};

export default ServiceImage;
