import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => (
  <div className="vp-about-section" style={{ 
    backgroundColor: "#f0f4ff", 
    padding: "5rem 0",
    fontFamily: "'Poppins', sans-serif"
  }}>
    <div className="vp-about-container container">
      {/* Company Overview */}
      <section className="mb-5">
        <h2 className="vp-about-title position-relative pb-2 mb-4">
          About VirtPak
        </h2>
        <h4 className="vp-primary-text" style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#4a00e0",
          marginBottom: "1rem"
        }}>
          Empowering businesses with cutting-edge digital solutions for unstoppable growth.
        </h4>
        <p style={{ color: "#555", fontSize: "1.1rem" }}>
          VirtPak is a full-service digital solutions provider specializing in web development, 
          cybersecurity, automation, and creative design. We transform ideas into powerful 
          digital experiences.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="mb-5">
        <h3 className="vp-about-title position-relative pb-2 mb-4">
          Why Choose Us?
        </h3>
        <ul className="vp-list-unstyled" style={{ 
          listStyle: "none", 
          paddingLeft: 0,
          fontSize: "1.1rem"
        }}>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>✓</span>
            <span><strong>Expertise:</strong> 5+ years in tech solutions</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>✓</span>
            <span><strong>Client-Centric:</strong> Tailored strategies for every business</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>✓</span>
            <span><strong>Quality Assurance:</strong> Rigorous testing & support</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>✓</span>
            <span><strong>Affordable:</strong> High-end solutions at competitive prices</span>
          </li>
        </ul>
      </section>

      {/* Core Services */}
      <section className="mb-5">
        <h3 className="vp-about-title position-relative pb-2 mb-4">
          Core Services
        </h3>
        <ul className="vp-list-unstyled" style={{ 
          listStyle: "none", 
          paddingLeft: 0,
          fontSize: "1.1rem"
        }}>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>•</span>
            <span><strong>Web Development:</strong> Custom sites, e-commerce, APIs</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>•</span>
            <span><strong>Automation:</strong> Web scraping, bots, workflow automation</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>•</span>
            <span><strong>Cybersecurity:</strong> Penetration testing, secure networks</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>•</span>
            <span><strong>Design:</strong> Logos, banners, presentations</span>
          </li>
          <li className="d-flex align-items-start py-2">
            <span className="me-2" style={{ color: "#4a00e0", fontWeight: "bold" }}>•</span>
            <span><strong>Digital Marketing:</strong> SEO, social media campaigns</span>
          </li>
        </ul>
      </section>

      {/* Founder Spotlight */}
      <section className="mb-5">
        <h3 className="vp-about-title position-relative pb-2 mb-4">
          Founder's Note
        </h3>
        <blockquote className="text-dark fst-italic fs-5" style={{
          borderLeft: "3px solid #4a00e0",
          paddingLeft: "1.5rem",
          marginLeft: 0
        }}>
          "As a tech enthusiast, I founded VirtPak to bridge the gap between innovation and affordability. 
          Our team thrives on solving complex challenges with simplicity."
        </blockquote>
      </section>

      {/* Contact */}
      <section>
        <h3 className="vp-about-title position-relative pb-2 mb-4">
          Contact Us
        </h3>
        <div className="vp-contact-info" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
          <p>
            <strong>Phone:</strong> <a href="tel:923032479703" style={{
              color: "#4a00e0",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => e.target.style.textDecoration = "underline"} 
               onMouseOut={(e) => e.target.style.textDecoration = "none"}>
              923032479703
            </a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:faizantariq2479@gamil.com" style={{
              color: "#4a00e0",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => e.target.style.textDecoration = "underline"} 
               onMouseOut={(e) => e.target.style.textDecoration = "none"}>
              faizantariq2479@gamil.com
            </a>
          </p>
        </div>
      </section>
    </div>
    
    {/* Title underline styling */}
    <style>{`
      .vp-about-title {
        font-size: 1.75rem;
        color: #2c3e50;
      }
      
      .vp-about-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, #4a00e0, #8e2de2);
      }
      
      @media (max-width: 768px) {
        .vp-about-section {
          padding: 3rem 0;
        }
        
        .vp-about-title {
          font-size: 1.5rem;
        }
      }
      
      @media (max-width: 576px) {
        .vp-about-title {
          font-size: 1.4rem;
        }
      }
    `}</style>
  </div>
);

export default About;