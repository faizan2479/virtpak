// styles.js
export const styles = {
  // Global styles
  container: {
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    background: '#f3f0ff',
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    position: 'relative'
  },

  // Modal styles
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    cursor: 'pointer'
  },
  modalContent: {
    maxWidth: '90%',
    maxHeight: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '8px'
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer'
  },

  // Hero section
  hero: {
    width: '100%',
    position: 'relative',
    aspectRatio: '16/9'
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block'
  },
  heroText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontWeight: '700',
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    textAlign: 'center',
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
    width: '90%',
    padding: '1rem',
    backgroundColor: 'rgba(74, 0, 224, 0.7)',
    borderRadius: '8px'
  },

  // Products section
  productsSection: {
    width: '100%',
    padding: 'clamp(3rem, 5vw, 5rem) 0',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    overflow: 'hidden',
    borderTop: '1px solid #eee'
  },
  productsContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 clamp(1rem, 5vw, 2rem)'
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    color: '#4a00e0',
    textAlign: 'center',
    marginBottom: '2.5rem'
  },
  
  // Products Slider styles
  productsSlider: {
    position: 'relative',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
  },
  sliderContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    height: '400px',
    '@media (max-width: 768px)': {
      height: '350px'
    }
  },
  slide: {
    minWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    boxSizing: 'border-box'
  },
  sliderControls: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px'
  },
  sliderDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'rgba(74, 0, 224, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  activeDot: {
    backgroundColor: '#4a00e0',
    transform: 'scale(1.2)'
  },
  sliderNav: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#4a00e0',
      color: 'white'
    }
  },
  prevButton: {
    left: '20px'
  },
  nextButton: {
    right: '20px'
  },
  productLogo: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#e0e0ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    overflow: 'hidden'
  },
  productLogoImage: {
    width: '80%',
    height: '80%',
    objectFit: 'contain'
  },
  productName: {
    fontSize: '1.2rem',
    color: '#4a00e0',
    margin: '0 0 0.5rem 0',
    textAlign: 'center'
  },
  productDescription: {
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
    margin: 0,
    lineHeight: '1.5'
  },

  // Projects section
  projectsSection: {
    width: '100%',
    padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)',
    backgroundColor: '#fff',
    boxSizing: 'border-box'
  },
  projectsTabs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    flexWrap: 'wrap',
    gap: '10px'
  },
  projectTab: {
    padding: '10px 20px',
    borderRadius: '30px',
    backgroundColor: '#e0e0ff',
    color: '#4a00e0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: '600',
    border: 'none',
    fontSize: '1rem',
    ':hover': {
      backgroundColor: '#4a00e0',
      color: 'white'
    }
  },
  activeTab: {
    backgroundColor: '#4a00e0',
    color: 'white'
  },
  projectContent: {
    display: 'none'
  },
  activeProject: {
    display: 'block'
  },
  projectContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto 3rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  projectHeader: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  projectTitle: {
    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
    color: '#4a00e0',
    margin: '0 auto 1rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #e0e0ff'
  },
  projectSubtitle: {
    color: '#666',
    fontStyle: 'italic',
    marginBottom: '1.5rem'
  },
  videoContainer: {
    width: '100%',
    margin: '0 auto 2rem',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  },
  video: {
    width: '100%',
    height: 'auto',
    display: 'block',
    maxHeight: '70vh'
  },
  imageGallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
    gap: '1rem',
    margin: '0 auto 2rem'
  },
  imageItem: {
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    aspectRatio: '16/9',
    cursor: 'pointer'
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.03)'
    }
  },
  projectDescription: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: 'clamp(1rem, 3vw, 1.5rem)',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  },
  descriptionTitle: {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    color: '#4a00e0',
    marginBottom: '0.8rem'
  },
  descriptionText: {
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    lineHeight: '1.6',
    color: '#555',
    margin: 0
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
    justifyContent: 'center'
  },
  techItem: {
    backgroundColor: '#e0e0ff',
    padding: '0.4rem 1rem',
    borderRadius: '20px',
    fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
    fontWeight: '600',
    color: '#4a00e0',
    whiteSpace: 'nowrap'
  },

  // Services section
  servicesSection: {
    width: '100%',
    padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)',
    backgroundColor: '#f8f9fa',
    boxSizing: 'border-box'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
    gap: '2rem'
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
    }
  },
  serviceTitle: {
    color: '#4a00e0',
    fontSize: '1.3rem',
    marginTop: 0,
    borderBottom: '2px solid #e0e0ff',
    paddingBottom: '0.5rem'
  },
  serviceList: {
    paddingLeft: '1.2rem',
    marginBottom: 0
  },
  serviceItem: {
    marginBottom: '0.5rem',
    color: '#555',
    position: 'relative',
    paddingLeft: '1.2rem',
    ':before': {
      content: '"•"',
      color: '#4a00e0',
      position: 'absolute',
      left: 0,
      fontWeight: 'bold'
    }
  },

  // Why Choose section
  whyChooseSection: {
    width: '100%',
    padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 5vw, 2rem)',
    backgroundColor: '#4a00e0',
    color: 'white',
    boxSizing: 'border-box'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
    gap: '2rem'
  },
  featureCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '2rem',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)'
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginTop: 0
  },

  // About section
  aboutSection: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: "2rem"
  },
  aboutTitle: {
    color: "#fff"
  },
  primaryText: {
    color: "#007bff"
  },
  lightText: {
    color: "#f8f9fa"
  },
  listUnstyled: {
    listStyle: 'none',
    paddingLeft: 0
  }
};