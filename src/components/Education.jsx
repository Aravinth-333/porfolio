import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin, TrendingUp } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timelineVisibility, setTimelineVisibility] = useState([false, false]);
  const sectionRef = useRef(null);

  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "Rajalakshmi Engineering College",
      location: "Thandalam, Chennai",
      duration: "2022 - 2026",
      cgpa: "8.4 CGPA",
      note: "Specializing in AI/ML and Data Science",
      color: "#00d4ff",
      bgColor: "rgba(0, 212, 255, 0.1)",
      borderColor: "rgba(0, 212, 255, 0.3)"
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science with BioMaths",
      institution: "P.A.K Palanisamy Higher Secondary School",
      location: "Washermenpet, Chennai",
      duration: "2020 - 2022",
      cgpa: "90%",
      note: "Mathematics, Physics, Chemistry, Biology",
      color: "#ff6b6b",
      bgColor: "rgba(255, 107, 107, 0.1)",
      borderColor: "rgba(255, 107, 107, 0.3)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            educationData.forEach((_, index) => {
              setTimeout(() => {
                setTimelineVisibility(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 600 + (index * 400));
            });
          } else {
            setIsVisible(false);
            setTimelineVisibility([false, false]);
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
    <section ref={sectionRef} id="education" style={styles.section}>
      {/* Background Elements */}
      <div style={styles.backgroundLayer}>
        <div style={styles.gradientOverlay}></div>
        
        {/* Floating orb */}
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        
        {/* Static dots */}
        <div style={{...styles.staticDot, top: '15%', right: '10%', animationDelay: '0s'}}></div>
        <div style={{...styles.staticDot, top: '70%', left: '15%', animationDelay: '2s'}}></div>
        <div style={{...styles.staticDot, bottom: '20%', right: '20%', animationDelay: '4s'}}></div>
      </div>

      <div style={styles.container}>
        {/* Header Section */}
        <div style={{
          ...styles.headerSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}>
          <div style={styles.titleContainer}>
            <BookOpen size={28} style={styles.bookIcon} />
            <h2 style={styles.mainTitle}>Education</h2>
          </div>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            My academic journey and educational milestones
          </p>
        </div>

        {/* Timeline Container */}
        <div style={styles.timelineContainer}>
          
          {/* Timeline Line */}
          <div style={{
            ...styles.timelineLine,
            height: isVisible ? '100%' : '0%'
          }} />

          {/* Timeline Items */}
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              style={styles.timelineItem}
            >
              {/* Timeline Dot */}
              <div style={{
                ...styles.timelineDot,
                backgroundColor: edu.color,
                opacity: timelineVisibility[index] ? 1 : 0,
                transform: timelineVisibility[index] ? 'scale(1)' : 'scale(0)',
                transitionDelay: `${index * 0.3}s`
              }}>
                <GraduationCap size={20} style={{
                  color: edu.color === '#ff6b6b' ? '#ffffff' : '#000000'
                }} />
              </div>

              {/* Content Card */}
              <div 
                style={{
                  ...styles.timelineCard,
                  backgroundColor: edu.bgColor,
                  borderColor: edu.borderColor,
                  opacity: timelineVisibility[index] ? 1 : 0,
                  transform: timelineVisibility[index] 
                    ? 'translateX(0) scale(1)' 
                    : 'translateX(-20px) scale(0.95)',
                  transitionDelay: `${index * 0.3 + 0.2}s`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = edu.bgColor.replace('0.1', '0.15');
                  e.currentTarget.style.borderColor = edu.color;
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${edu.color}40`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = edu.bgColor;
                  e.currentTarget.style.borderColor = edu.borderColor;
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                }}
              >
                {/* Institution Name */}
                <h3 style={styles.institutionName}>{edu.institution}</h3>
                
                {/* Degree */}
                <h4 style={{...styles.degreeName, color: edu.color}}>{edu.degree}</h4>
                
                {/* Field */}
                <p style={styles.fieldName}>{edu.field}</p>
                
                {/* Location */}
                <div style={styles.infoRow}>
                  <MapPin size={16} style={{...styles.infoIcon, color: edu.color}} />
                  <span style={styles.infoText}>{edu.location}</span>
                </div>
                
                {/* Duration */}
                <div style={styles.infoRow}>
                  <Calendar size={16} style={{...styles.infoIcon, color: edu.color}} />
                  <span style={styles.infoText}>{edu.duration}</span>
                </div>
                
                {/* Note */}
                <p style={styles.noteText}>{edu.note}</p>
                
                {/* CGPA Badge */}
                <div style={{
                  ...styles.gradeBadge,
                  backgroundColor: edu.color + '20',
                  borderColor: edu.color
                }}>
                  <Award size={16} style={{color: edu.color}} />
                  <span style={{...styles.gradeText, color: edu.color}}>
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End */}
          <div style={{
            ...styles.timelineEnd,
            opacity: timelineVisibility[1] ? 1 : 0,
            transform: timelineVisibility[1] ? 'scale(1)' : 'scale(0)',
            transitionDelay: '1.2s'
          }}>
            <TrendingUp size={24} style={styles.endIcon} />
            <span style={styles.endText}>Continuous Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
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
    background: 'radial-gradient(circle at 40% 20%, rgba(255, 107, 107, 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)',
  },
  
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.25,
    animation: 'gentleFloat 12s ease-in-out infinite'
  },
  
  orb1: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(45deg, #ff6b6b, #00d4ff)',
    top: '30%',
    left: '5%',
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
    maxWidth: '800px',
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
    marginBottom: '25px',
    flexWrap: 'wrap'
  },
  
  bookIcon: {
    color: '#00d4ff',
    animation: 'gentleRotate 4s ease-in-out infinite'
  },
  
  mainTitle: {
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #00d4ff 0%, #5b21b6 50%, #ff6b6b 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: 0,
    letterSpacing: '2px'
  },
  
  titleUnderline: {
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, #00d4ff, #ff6b6b)',
    margin: '20px auto 30px',
    borderRadius: '2px',
    animation: 'expandLine 2s ease-out forwards'
  },
  
  subtitle: {
    fontSize: 'clamp(14px, 4vw, 18px)',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    fontWeight: '300'
  },
  
  timelineContainer: {
    position: 'relative',
    paddingBottom: '80px'
  },
  
  timelineLine: {
    position: 'absolute',
    left: '30px',
    top: '0',
    width: '3px',
    backgroundColor: 'rgba(0, 212, 255, 0.4)',
    transition: 'height 2s cubic-bezier(0.4, 0, 0.2, 1)',
    borderRadius: '2px',
    zIndex: 1
  },
  
  timelineItem: {
    position: 'relative',
    marginBottom: '50px',
    paddingLeft: '80px'
  },
  
  timelineDot: {
    position: 'absolute',
    left: '6px',
    top: '20px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '3px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 2
  },
  
  timelineCard: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    border: '2px solid rgba(0, 212, 255, 0.3)',
    borderRadius: '16px',
    padding: '25px',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box'
  },
  
  institutionName: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 10px 0',
    lineHeight: '1.3'
  },
  
  degreeName: {
    fontSize: 'clamp(14px, 3.5vw, 18px)',
    fontWeight: '600',
    margin: '0 0 8px 0',
    lineHeight: '1.3'
  },
  
  fieldName: {
    fontSize: 'clamp(13px, 3vw, 15px)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
    margin: '0 0 15px 0',
    lineHeight: '1.4'
  },
  
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px'
  },
  
  infoIcon: {
    flexShrink: 0
  },
  
  infoText: {
    fontSize: 'clamp(12px, 3vw, 14px)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500'
  },
  
  noteText: {
    fontSize: 'clamp(12px, 3vw, 14px)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
    margin: '15px 0',
    lineHeight: '1.4',
    fontStyle: 'italic'
  },
  
  gradeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    border: '2px solid',
    borderRadius: '20px',
    fontSize: 'clamp(12px, 3vw, 14px)',
    fontWeight: '600',
    marginTop: '10px'
  },
  
  gradeText: {
    fontWeight: '700'
  },
  
  timelineEnd: {
    position: 'absolute',
    left: '6px',
    bottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    border: '3px solid rgba(0, 212, 255, 0.4)',
    borderRadius: '50%',
    justifyContent: 'center',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  endIcon: {
    color: '#00d4ff'
  },
  
  endText: {
    position: 'absolute',
    left: '60px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '14px',
    color: '#00d4ff',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  }
};

// Enhanced CSS animations with mobile-first responsive design
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes gentleFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(180deg); }
  }
  
  @keyframes gentlePulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }
  
  @keyframes gentleRotate {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
  }
  
  @keyframes expandLine {
    0% { width: 0; }
    100% { width: 100px; }
  }
  
  /* Mobile First - Default styles are for mobile */
  @media (max-width: 480px) {
    .section {
      padding: 60px 0 !important;
    }
    
    .container {
      padding: 0 15px !important;
    }
    
    .headerSection {
      margin-bottom: 50px !important;
    }
    
    .timelineItem {
      padding-left: 70px !important;
      margin-bottom: 40px !important;
    }
    
    .timelineDot {
      width: 40px !important;
      height: 40px !important;
    }
    
    .timelineCard {
      padding: 20px !important;
    }
    
    .endText {
      left: 50px !important;
      font-size: 12px !important;
    }
  }
  
  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    .section {
      padding: 80px 0 !important;
    }
    
    .container {
      padding: 0 25px !important;
    }
    
    .timelineItem {
      padding-left: 75px !important;
    }
    
    .timelineCard {
      padding: 22px !important;
    }
  }
  
  /* Desktop */
  @media (min-width: 769px) {
    .container {
      padding: 0 30px !important;
    }
    
    .timelineCard {
      max-width: 500px !important;
    }
  }
  
  /* Ensure all elements are properly contained */
  * {
    box-sizing: border-box;
  }
`;
document.head.appendChild(styleSheet);

export default Education;