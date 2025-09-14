import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Award,
  Calendar,
  Target,
  Heart,
  Code,
  Sparkles
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [highlightVisibility, setHighlightVisibility] = useState([false, false, false]);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: User,
      title: "Fresh Graduate",
      value: "BTech AI&DS 2026",
      color: "#00d4ff",
      bgColor: "rgba(0, 212, 255, 0.1)",
      borderColor: "rgba(0, 212, 255, 0.3)"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      value: "8.40 CGPA",
      color: "#ff6b6b",
      bgColor: "rgba(255, 107, 107, 0.1)",
      borderColor: "rgba(255, 107, 107, 0.3)"
    },
    {
      icon: Calendar,
      title: "Ready to Start",
      value: "Immediate Joining",
      color: "#5b21b6",
      bgColor: "rgba(91, 33, 182, 0.1)",
      borderColor: "rgba(91, 33, 182, 0.3)"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Show content when scrolling down
            setIsVisible(true);
            
            // Stagger highlight animations
            highlights.forEach((_, index) => {
              setTimeout(() => {
                setHighlightVisibility(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 600 + (index * 200));
            });
          } else {
            // Hide content when scrolling away
            setIsVisible(false);
            setHighlightVisibility([false, false, false]);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={styles.section}>
      {/* Background Elements */}
      <div style={styles.backgroundLayer}>
        <div style={styles.gradientOverlay}></div>
        
        {/* Subtle floating orb */}
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        
        {/* Static cyan dots */}
        <div style={{...styles.staticDot, top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div style={{...styles.staticDot, top: '80%', right: '20%', animationDelay: '2s'}}></div>
        <div style={{...styles.staticDot, bottom: '30%', left: '10%', animationDelay: '4s'}}></div>
      </div>

      <div style={styles.container}>
        {/* Header Section */}
        <div style={{
          ...styles.headerSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}>
          <div style={styles.titleContainer}>
            <Sparkles size={24} style={styles.sparkleIcon} />
            <h2 style={styles.mainTitle}>About Me</h2>
          </div>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            A passionate B.Tech graduate ready to make an impact in the tech world with fresh ideas and dedication
          </p>
        </div>

        {/* Content Grid */}
        <div style={styles.contentGrid}>
          
          {/* Left Column - Mission & Motivation */}
          <div style={styles.leftColumn}>
            
            {/* Mission Card */}
            <div style={{
              ...styles.card,
              ...styles.missionCard,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.95)',
              transitionDelay: '0.4s'
            }}>
              <div style={styles.cardHeader}>
                <div style={{...styles.iconContainer, backgroundColor: '#00d4ff'}}>
                  <Target size={22} style={{color: '#000000'}} />
                </div>
                <h3 style={styles.cardTitle}>My Mission</h3>
              </div>
              <p style={styles.cardContent}>
                To leverage my fresh perspective and technical foundation to contribute meaningfully to 
                <strong style={styles.highlight}> innovative projects</strong> while continuously learning and 
                growing in the dynamic field of <strong style={styles.highlight2}>software development</strong>.
              </p>
            </div>

            {/* Motivation Card */}
            <div style={{
              ...styles.card,
              ...styles.motivationCard,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(-40px) scale(0.95)',
              transitionDelay: '0.6s'
            }}>
              <div style={styles.cardHeader}>
                <div style={{...styles.iconContainer, backgroundColor: '#ff6b6b'}}>
                  <Heart size={22} style={{color: '#ffffff'}} />
                </div>
                <h3 style={styles.cardTitle}>What Drives Me</h3>
              </div>
              <p style={styles.cardContent}>
                I'm motivated by the endless possibilities in technology and the opportunity to solve 
                <strong style={styles.highlight3}> real-world problems</strong> through code. 
                Every challenge is a chance to learn something new and make a meaningful impact.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div style={styles.rightColumn}>
            {highlights.map(({ icon: Icon, title, value, color, bgColor, borderColor }, idx) => (
              <div 
                key={idx} 
                style={{
                  ...styles.highlightCard,
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  opacity: highlightVisibility[idx] ? 1 : 0,
                  transform: highlightVisibility[idx] ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = bgColor.replace('0.1', '0.15');
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = bgColor;
                  e.currentTarget.style.borderColor = borderColor;
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <div style={styles.highlightContent}>
                  <div style={{
                    ...styles.highlightIcon,
                    backgroundColor: color,
                    color: color === '#5b21b6' ? '#ffffff' : '#000000'
                  }}>
                    <Icon size={32} />
                  </div>
                  <div style={styles.highlightText}>
                    <h4 style={styles.highlightTitle}>{title}</h4>
                    <p style={{...styles.highlightValue, color: color}}>{value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Professional Badge */}
            <div style={{
              ...styles.professionalBadge,
              opacity: highlightVisibility[2] ? 1 : 0,
              transform: highlightVisibility[2] ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '1.4s'
            }}>
              <Code size={20} style={styles.badgeIcon} />
              <span style={styles.badgeText}>Ready to Code & Create</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#0f0f0f',
    position: 'relative',
    overflow: 'hidden',
    padding: '100px 0',
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
    background: 'radial-gradient(circle at 70% 30%, rgba(0, 212, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(91, 33, 182, 0.03) 0%, transparent 50%)',
  },
  
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.2,
    animation: 'gentleFloat 10s ease-in-out infinite'
  },
  
  orb1: {
    width: '400px',
    height: '400px',
    background: 'linear-gradient(45deg, #00d4ff, #5b21b6)',
    top: '20%',
    right: '10%',
    animationDelay: '0s'
  },
  
  staticDot: {
    position: 'absolute',
    width: '6px',
    height: '6px',
    backgroundColor: '#00d4ff',
    borderRadius: '50%',
    opacity: 0.6,
    animation: 'gentlePulse 4s ease-in-out infinite'
  },
  
  container: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    color: '#ffffff',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  headerSection: {
    textAlign: 'center',
    marginBottom: '80px',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  
  sparkleIcon: {
    color: '#00d4ff',
    animation: 'sparkle 3s ease-in-out infinite'
  },
  
  mainTitle: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #00d4ff 0%, #5b21b6 50%, #ff6b6b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
    letterSpacing: '2px',
    textAlign: 'center'
  },
  
  titleUnderline: {
    width: '120px',
    height: '4px',
    background: 'linear-gradient(90deg, #00d4ff, #5b21b6, #ff6b6b)',
    margin: '20px auto 30px',
    borderRadius: '2px',
    animation: 'expandLine 2s ease-out forwards'
  },
  
  subtitle: {
    fontSize: 'clamp(14px, 4vw, 20px)',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '700px',
    margin: '0 auto',
    fontWeight: '300',
    padding: '0 10px'
  },
  
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    width: '100%'
  },
  
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '100%'
  },
  
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%'
  },
  
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '25px',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  missionCard: {
    borderLeft: '4px solid #00d4ff'
  },
  
  motivationCard: {
    borderLeft: '4px solid #ff6b6b'
  },
  
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    flexShrink: 0
  },
  
  cardTitle: {
    fontSize: 'clamp(18px, 4vw, 22px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
    flex: 1
  },
  
  cardContent: {
    fontSize: 'clamp(14px, 3.5vw, 17px)',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '300',
    margin: 0
  },
  
  highlight: {
    color: '#00d4ff',
    fontWeight: '600'
  },
  
  highlight2: {
    color: '#5b21b6',
    fontWeight: '600'
  },
  
  highlight3: {
    color: '#ff6b6b',
    fontWeight: '600'
  },
  
  highlightCard: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    border: '2px solid rgba(0, 212, 255, 0.3)',
    borderRadius: '18px',
    padding: '20px',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  highlightContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    width: '100%'
  },
  
  highlightIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
    flexShrink: 0
  },
  
  highlightText: {
    flex: 1,
    minWidth: 0
  },
  
  highlightTitle: {
    fontSize: 'clamp(14px, 3.5vw, 18px)',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 5px 0'
  },
  
  highlightValue: {
    fontSize: 'clamp(18px, 4vw, 24px)',
    fontWeight: '700',
    margin: 0
  },
  
  professionalBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: 'rgba(91, 33, 182, 0.15)',
    border: '1px solid rgba(91, 33, 182, 0.4)',
    borderRadius: '30px',
    padding: '16px 20px',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  badgeIcon: {
    color: '#5b21b6',
    flexShrink: 0
  },
  
  badgeText: {
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    fontWeight: '600',
    color: '#ffffff'
  }
};

// Enhanced CSS animations with proper responsive design
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes gentleFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes gentlePulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }
  
  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: rotate(0deg) scale(1); }
    50% { opacity: 0.7; transform: rotate(180deg) scale(1.1); }
  }
  
  @keyframes expandLine {
    0% { width: 0; }
    100% { width: 120px; }
  }
  
  /* Responsive Design */
  @media (min-width: 768px) {
    .contentGrid {
      grid-template-columns: 1fr 1fr !important;
      gap: 50px !important;
    }
  }
  
  @media (min-width: 1024px) {
    .container {
      padding: 0 40px !important;
    }
    
    .contentGrid {
      gap: 60px !important;
    }
    
    .card {
      padding: 30px !important;
    }
    
    .highlightCard {
      padding: 25px !important;
    }
  }
  
  @media (max-width: 767px) {
    .section {
      padding: 60px 0 !important;
    }
    
    .container {
      padding: 0 15px !important;
    }
    
    .headerSection {
      margin-bottom: 50px !important;
    }
    
    .card {
      padding: 20px !important;
    }
    
    .highlightCard {
      padding: 18px !important;
    }
    
    .cardHeader {
      gap: 12px !important;
      margin-bottom: 15px !important;
    }
    
    .iconContainer {
      width: 45px !important;
      height: 45px !important;
    }
    
    .highlightIcon {
      width: 50px !important;
      height: 50px !important;
    }
    
    .highlightContent {
      gap: 12px !important;
    }
    
    .professionalBadge {
      padding: 12px 16px !important;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 0 10px !important;
    }
    
    .card {
      padding: 18px !important;
    }
    
    .highlightCard {
      padding: 15px !important;
    }
    
    .iconContainer {
      width: 40px !important;
      height: 40px !important;
    }
    
    .highlightIcon {
      width: 45px !important;
      height: 45px !important;
    }
  }
  
  /* Ensure all elements are properly contained */
  * {
    box-sizing: border-box;
  }
    
`;
document.head.appendChild(styleSheet);

export default About;