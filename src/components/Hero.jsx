import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Mail, Code, Star } from "lucide-react";
import profileImage from '../Images/Aravinth1.jpg'
const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [nameText, setNameText] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  
  const roles = [
    "AI & Data Science Graduate",
    "Full Stack Developer", 
    "Innovation Creator",
    "Tech Problem Solver"
  ];

  const fullName = "ARAVINTH S";

  useEffect(() => {
    // Initial welcome animation
    setTimeout(() => setShowWelcome(true), 800);
    setTimeout(() => setIsVisible(true), 1200);
    setTimeout(() => setShowContent(true), 2000);
  }, []);

  useEffect(() => {
    // Name typing animation
    let timeout;
    if (nameText.length < fullName.length) {
      timeout = setTimeout(() => {
        setNameText(fullName.slice(0, nameText.length + 1));
      }, 150);
    }
    return () => clearTimeout(timeout);
  }, [nameText, fullName]);

  useEffect(() => {
    // Role typewriter effect
    let timeout;
    const currentRole = roles[textIndex];
    
    if (isTyping) {
      if (typedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2500);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 60);
      } else {
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, textIndex, roles]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Professional profile image placeholder - REPLACE THIS WITH YOUR ACTUAL IMAGE
  return (
    <div style={styles.container} id='home'>
      {/* Clean Background with Static Dots */}
      <div style={styles.backgroundLayer}>
        <div style={styles.gradientOverlay}></div>
        
        {/* Floating Orbs */}
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb2}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb3}}></div>
        
        {/* Static Cyan Dots */}
        {/* Binary Digits Background */}
{Array.from({ length: 40 }).map((_, i) => (
  <span
    key={i}
    style={{
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 14 + 10}px`,
      color: Math.random() > 0.5 ? '#00d4ff' : '#5b21b6',
      opacity: 0.2 + Math.random() * 0.8,
      animation: `floatBinary 25s linear infinite`, // slow and steady
      animationDelay: `${Math.random() * 10}s` // small delay for natural stagger
    }}
  >
    {Math.random() > 0.5 ? '0' : '1'}
  </span>
))}


      </div>

      <div style={styles.content}>
        
        {/* Welcome Message */}
        <div style={{
          ...styles.welcomeMessage,
          opacity: showWelcome ? 1 : 0,
          transform: showWelcome ? 'translateY(0)' : 'translateY(-20px)'
        }}>
          <Star size={18} style={styles.starIcon} />
          <span>Welcome to my portfolio</span>
        </div>

        {/* Professional Profile Section */}
        <div style={{
          ...styles.profileSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)'
        }}>
          <div style={styles.photoContainer}>
            {/* REPLACE THE SRC BELOW WITH YOUR ACTUAL PHOTO PATH */}
            <img
              src={profileImage} // Replace with: src="/path/to/your/photo.jpg" or import your image
              alt="Aravinth S - Professional Profile"
              style={styles.professionalPhoto}
            />
            
            {/* Professional Badge */}
          </div>
        </div>

        {/* Animated Name with useEffect */}
        <div style={{
          ...styles.nameSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
        }}>
          <h1 style={styles.greeting}>Hello, I'm</h1>
          <h1 style={styles.animatedName}>
            {nameText}
            <span style={styles.nameCursor}>|</span>
          </h1>
          <div style={styles.nameUnderline}></div>
        </div>

        {/* Professional Title with Typewriter */}
        <div style={{
          ...styles.roleSection,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(30px)'
        }}>
          <div style={styles.roleContainer}>
            <span style={styles.roleText}>{typedText}</span>
            <span style={styles.cursor}>|</span>
          </div>
        </div>

        {/* Professional Status */}
        <div style={{
          ...styles.statusSection,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(30px)'
        }}>
          <div style={styles.professionalStatus}>
            <Code size={18} style={styles.codeIcon} />
            <span>Let's build something extraordinary together</span>
          </div>
        </div>
        {/* Action Buttons */}
        <div style={{
          ...styles.buttonSection,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(30px)'
        }}>
          <a 
            href="https://drive.google.com/file/d/1jixUWW2UYxLgC23BR3kphGg2in618KfC/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.primaryButton}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 212, 255, 0.3)';
            }}
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Enhanced Social Links */}
        <div style={{
          ...styles.socialSection,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(30px)'
        }}>
          <div style={styles.socialLabel}>Let's Connect</div>
          <div style={styles.socialLinks}>
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/Aravinth-333", color: '#00d4ff' },
              { icon: Mail, label: "Email", href: "mailto:aravinth.engineering@gmail.com", color: '#ff6b6b' }
            ].map(({ icon: Icon, label, href, color }, index) => (
              <a 
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = color + '20';
                  e.target.style.borderColor = color;
                  e.target.style.transform = 'translateY(-4px) scale(1.15)';
                  e.target.children[0].style.color = color;
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.children[0].style.color = '#ffffff';
                }}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div style={{
          ...styles.scrollSection,
          opacity: showContent ? 1 : 0,
          transform: showContent ? 'translateY(0)' : 'translateY(30px)'
        }}>
          <button 
            onClick={scrollToAbout}
            style={styles.scrollButton}
            onMouseOver={(e) => {
              e.target.style.color = '#00d4ff';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.color = 'rgba(255, 255, 255, 0.6)';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <span style={styles.scrollText}>Discover My Journey</span>
            <ArrowDown size={24} style={styles.scrollIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  
  backgroundLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0
  },
  
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 30% 20%, rgba(0, 212, 255, 0.06) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(91, 33, 182, 0.04) 0%, transparent 50%)',
  },
  
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.3,
    animation: 'floatOrb 8s ease-in-out infinite'
  },
  
  orb1: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(45deg, #00d4ff, #5b21b6)',
    top: '15%',
    left: '8%',
    animationDelay: '0s'
  },
  
  orb2: {
    width: '220px',
    height: '220px',
    background: 'linear-gradient(45deg, #5b21b6, #ff6b6b)',
    top: '65%',
    right: '12%',
    animationDelay: '4s'
  },
  
  orb3: {
    width: '160px',
    height: '160px',
    background: 'linear-gradient(45deg, #ff6b6b, #00d4ff)',
    bottom: '25%',
    left: '70%',
    animationDelay: '6s'
  },
  
  staticDot: {
    position: 'absolute',
    width: '6px',
    height: '6px',
    backgroundColor: '#00d4ff',
    borderRadius: '50%',
    opacity: 0.7,
    animation: 'gentlePulse 4s ease-in-out infinite'
  },
  
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    color: '#ffffff',
    maxWidth: '900px',
    padding: '90px 20px',
    width: '100%'
  },
  
  welcomeMessage: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    border: '1px solid rgba(0, 212, 255, 0.3)',
    borderRadius: '25px',
    padding: '10px 24px',
    fontSize: '15px',
    color: '#00d4ff',
    fontWeight: '500',
    marginBottom: '35px',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  starIcon: {
    animation: 'gentleTwinkle 3s ease-in-out infinite'
  },
  
  profileSection: {
    marginBottom: '45px',
    transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0.3s'
  },
  
  photoContainer: {
    position: 'relative',
    display: 'inline-block',
    marginBottom: '25px'
  },
  
  professionalPhoto: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(0, 212, 255, 0.3)',
    transition: 'all 0.5s ease',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
  },
  
  photoBadge: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    backgroundColor: 'rgba(34, 197, 94, 0.9)',
    border: '2px solid rgba(34, 197, 94, 1)',
    borderRadius: '15px',
    padding: '6px 12px',
    fontSize: '12px',
    color: '#ffffff',
    fontWeight: '600'
  },
  
  nameSection: {
    marginBottom: '35px',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0.6s'
  },
  
  greeting: {
    fontSize: '28px',
    fontWeight: '300',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: '0 0 15px 0',
    letterSpacing: '1px'
  },
  
  animatedName: {
    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #00d4ff 0%, #5b21b6 50%, #ff6b6b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0',
    letterSpacing: '3px',
    textShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
    position: 'relative',

  lineHeight: '1.0',          // keeps text compact
  display: 'inline-block',    // prevents weird descender offsets
  textAlign: 'center',
  },
  
  nameCursor: {
    color: '#00d4ff',
    animation: 'blink 1s infinite',
    fontWeight: '300'
  },
  
  nameUnderline: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, #00d4ff, #5b21b6, #ff6b6b)',
    margin: '25px auto',
    borderRadius: '2px',
    animation: 'expandLine 2s ease-out forwards'
  },
  
  roleSection: {
    marginBottom: '40px',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0.8s'
  },
  
  roleContainer: {
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3px'
  },
  
  roleText: {
    fontSize: 'clamp(20px, 5vw, 30px)',
    fontWeight: '400',
    color: '#00d4ff',
    letterSpacing: '1px'
  },
  
  cursor: {
    fontSize: 'clamp(20px, 5vw, 30px)',
    color: '#00d4ff',
    animation: 'blink 1s infinite'
  },
  
  statusSection: {
    marginBottom: '40px',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '1s'
  },
  
  professionalStatus: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: 'rgba(91, 33, 182, 0.15)',
    border: '1px solid rgba(91, 33, 182, 0.4)',
    borderRadius: '30px',
    padding: '14px 30px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#ffffff'
  },
  
  codeIcon: {
    color: '#5b21b6'
  },
  highlight: {
    color: '#00d4ff',
    fontWeight: '600'
  },
  
  highlight2: {
    color: '#ff6b6b',
    fontWeight: '600'
  },
  
  invitation: {
    color: '#5b21b6',
    fontWeight: '500',
    fontSize: 'clamp(17px, 3vw, 20px)',
    display: 'block',
    marginTop: '12px'
  },
  
  buttonSection: {
    marginBottom: '50px',
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '1.4s'
  },
  
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#00d4ff',
    color: '#000000',
    border: 'none',
    borderRadius: '14px',
    padding: '18px 36px',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '700',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)'
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '14px',
    padding: '16px 36px',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '600',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  },
  
  socialSection: {
    marginBottom: '50px',
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '1.6s'
  },
  
  socialLabel: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '20px',
    fontWeight: '400'
  },
  
  socialLinks: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65px',
    height: '65px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '18px',
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)'
  },
  
  scrollSection: {
    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '1.8s'
  },
  
  scrollButton: {
    background: 'none',
    border: 'none',
    color: 'rgba(255, 255, 255, 0.6)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.3s ease',
    margin: '0 auto'
  },
  
  scrollText: {
    fontSize: '15px',
    fontWeight: '400'
  },
  
  scrollIcon: {
    animation: 'bounce 2s infinite'
  }
  
};

// Clean, professional CSS animations
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes floatOrb {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(180deg); }
  }
  
  @keyframes gentlePulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
  
  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
    40%, 43% { transform: translateY(-10px); }
    70% { transform: translateY(-5px); }
  }
  
  @keyframes gentleTwinkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  
  @keyframes expandLine {
    0% { width: 0; }
    100% { width: 120px; }
  }

  @keyframes floatBinary {
  0% { transform: translateY(-10vh); opacity: 0; }
  10% { opacity: 0.5; }
  90% { opacity: 0.5; }
  100% { transform: translateY(110vh); opacity: 0; }
}


  
  /* Responsive Design */
  @media (max-width: 768px) {
    .container { 
      padding: 20px 15px; 
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 15px 10px;
    }
  }
  
  @media (min-width: 1200px) {
    .container {
      padding: 40px;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Hero;