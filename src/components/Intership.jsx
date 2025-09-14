import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  Calendar, 
  Award, 
  Trophy,
  Building,
  Code,
  Globe,
  Database,
  Zap,
  Server,
  Shield,
  Brain,
  Star,
  Medal
} from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [experienceVisibility, setExperienceVisibility] = useState([false, false]);
  const [certVisibility, setCertVisibility] = useState([false, false, false]);
  const sectionRef = useRef(null);

  // Tech icons mapping
  const techIcons = {
    "HTML/CSS": Globe,
    "Javascript": Code,
    "JavaScript": Code,
    "React": Zap,
    "React.js": Zap,
    "MongoDB": Database,
    "Softskills": Star
  };

  const experiences = [
    {
      title: "Frontend Web Development",
      company: "Cybernaut",
      duration: "June 2024 - August 2024",
      type: "Summer Internship",
      description: "Participated in frontend web development and gained hands-on experience",
      skills: ["HTML/CSS", "Javascript", "React"],
      color: "#00d4ff",
      bgColor: "rgba(0, 212, 255, 0.1)",
      borderColor: "rgba(0, 212, 255, 0.3)"
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Edunet Foundation",
      duration: "October 2024 - March 2025",
      type: "Winter Internship",
      description: "Worked on front-end development using React.js and contributed to responsive web design projects.",
      skills: ["React.js", "HTML/CSS", "JavaScript", "MongoDB", "Softskills"],
      color: "#5b21b6",
      bgColor: "rgba(91, 33, 182, 0.1)",
      borderColor: "rgba(91, 33, 182, 0.3)"
    }
  ];

  const certifications = [
    {
      name: "IPC WINNER",
      issuer: "Rajalakshmi Engineering College",
      date: "2025",
      type: "Hackathon",
      color: "#ff6b6b",
      icon: Trophy
    },
    {
      name: "OCI 2025 Certified AI Foundations",
      issuer: "Oracle",
      date: "2025",
      type: "Certification",
      color: "#00d4ff",
      icon: Brain
    },
    {
      name: "Fundamentals of CyberSecurity",
      issuer: "Cisco",
      date: "2024",
      type: "Certification",
      color: "#5b21b6",
      icon: Shield
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Stagger experience animations
            experiences.forEach((_, index) => {
              setTimeout(() => {
                setExperienceVisibility(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 500 + (index * 300));
            });

            // Stagger certification animations
            certifications.forEach((_, index) => {
              setTimeout(() => {
                setCertVisibility(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 1000 + (index * 200));
            });
          } else {
            setIsVisible(false);
            setExperienceVisibility([false, false]);
            setCertVisibility([false, false, false]);
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
    <section ref={sectionRef} id="experience" style={styles.section}>
      {/* Background Elements */}
      <div style={styles.backgroundLayer}>
        <div style={styles.gradientOverlay}></div>
        
        {/* Floating orbs */}
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb2}}></div>
        
        {/* Static dots */}
        <div style={{...styles.staticDot, top: '15%', left: '8%', animationDelay: '0s'}}></div>
        <div style={{...styles.staticDot, top: '60%', right: '10%', animationDelay: '2s'}}></div>
        <div style={{...styles.staticDot, bottom: '25%', left: '75%', animationDelay: '4s'}}></div>
      </div>

      <div style={styles.container}>
        {/* Header Section */}
        <div style={{
          ...styles.headerSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}>
          <div style={styles.titleContainer}>
            <Building size={28} style={styles.buildingIcon} />
            <h2 style={styles.mainTitle}>Experience & Learning</h2>
          </div>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Practical experience and certifications that enhanced my technical expertise
          </p>
        </div>

        {/* Content Grid */}
        <div style={styles.contentGrid} className="experienceGrid">
          
          {/* Left Column - Internships */}
          <div style={styles.leftColumn}>
            <div style={styles.sectionHeader}>
              <Briefcase size={24} style={styles.sectionIcon} />
              <h3 style={styles.sectionTitle}>Internships & Training</h3>
            </div>

            <div style={styles.experienceList}>
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.experienceCard,
                    backgroundColor: exp.bgColor,
                    borderColor: exp.borderColor,
                    opacity: experienceVisibility[index] ? 1 : 0,
                    transform: experienceVisibility[index] 
                      ? 'translateX(0) scale(1)' 
                      : 'translateX(-30px) scale(0.95)',
                    transitionDelay: `${index * 0.2}s`
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = exp.bgColor.replace('0.1', '0.15');
                    e.currentTarget.style.borderColor = exp.color;
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${exp.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = exp.bgColor;
                    e.currentTarget.style.borderColor = exp.borderColor;
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  {/* Card Header */}
                  <div style={styles.expHeader}>
                    <div style={styles.expTitleSection}>
                      <h4 style={styles.expTitle}>{exp.title}</h4>
                      <h5 style={{...styles.expCompany, color: exp.color}}>{exp.company}</h5>
                    </div>
                    <div style={{
                      ...styles.typeBadge,
                      backgroundColor: exp.color + '30',
                      borderColor: exp.color,
                      color: exp.color
                    }}>
                      {exp.type}
                    </div>
                  </div>

                  {/* Duration */}
                  <div style={styles.durationSection}>
                    <Calendar size={16} style={{color: exp.color}} />
                    <span style={styles.durationText}>{exp.duration}</span>
                  </div>

                  {/* Description */}
                  <p style={styles.expDescription}>{exp.description}</p>

                  {/* Skills */}
                  <div style={styles.skillsSection}>
                    <h6 style={styles.skillsTitle}>Technologies Used</h6>
                    <div style={styles.skillsList}>
                      {exp.skills.map((skill, skillIndex) => {
                        const SkillIcon = techIcons[skill] || Star;
                        return (
                          <div 
                            key={skillIndex}
                            style={{
                              ...styles.skillBadge,
                              borderColor: exp.color + '60'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = exp.color + '20';
                              e.currentTarget.style.borderColor = exp.color;
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                              e.currentTarget.style.borderColor = exp.color + '60';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <SkillIcon size={14} style={{color: exp.color}} />
                            <span style={styles.skillName}>{skill}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div style={styles.rightColumn}>
            <div style={styles.sectionHeader}>
              <Award size={24} style={{color: '#ff6b6b'}} />
              <h3 style={styles.sectionTitle}>Achievements</h3>
            </div>

            <div style={styles.certificationsList}>
              {certifications.map((cert, index) => {
                const CertIcon = cert.icon;
                return (
                  <div 
                    key={index}
                    style={{
                      ...styles.certCard,
                      backgroundColor: cert.color + '15',
                      borderColor: cert.color + '40',
                      opacity: certVisibility[index] ? 1 : 0,
                      transform: certVisibility[index] 
                        ? 'translateX(0) scale(1)' 
                        : 'translateX(30px) scale(0.95)',
                      transitionDelay: `${index * 0.15}s`
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = cert.color + '25';
                      e.currentTarget.style.borderColor = cert.color;
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px ${cert.color}40`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = cert.color + '15';
                      e.currentTarget.style.borderColor = cert.color + '40';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    <div style={styles.certHeader}>
                      <div style={{
                        ...styles.certIcon,
                        backgroundColor: cert.color + '30'
                      }}>
                        <CertIcon size={24} style={{color: cert.color}} />
                      </div>
                      <div style={styles.certInfo}>
                        <h5 style={styles.certName}>{cert.name}</h5>
                        <p style={styles.certIssuer}>{cert.issuer}</p>
                      </div>
                    </div>

                    <div style={styles.certFooter}>
                      <span style={styles.certDate}>{cert.date}</span>
                      <div style={{
                        ...styles.certTypeBadge,
                        backgroundColor: cert.color + '30',
                        color: cert.color
                      }}>
                        {cert.type === 'Hackathon' ? (
                          <Medal size={12} style={{color: cert.color}} />
                        ) : (
                          <Award size={12} style={{color: cert.color}} />
                        )}
                        <span>{cert.type}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div style={{
          ...styles.summaryStats,
          opacity: certVisibility[2] ? 1 : 0,
          transform: certVisibility[2] ? 'translateY(0)' : 'translateY(30px)',
          transitionDelay: '1.8s'
        }}>
          <div style={styles.statCard}>
            <div style={styles.statNumber}>2</div>
            <div style={styles.statLabel}>Internships</div>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.statCard}>
            <div style={styles.statNumber}>3</div>
            <div style={styles.statLabel}>Certifications</div>
          </div>
          <div style={styles.statDivider} />
          <div style={styles.statCard}>
            <div style={styles.statNumber}>6+</div>
            <div style={styles.statLabel}>Months Experience</div>
          </div>
        </div>
      </div>

      {/* Strong Mobile Override - Critical CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .experienceGrid {
              display: flex !important;
              flex-direction: column !important;
              gap: 30px !important;
              grid-template-columns: none !important;
            }
            
            #experience .leftColumn {
              width: 100% !important;
              order: 1 !important;
            }
            
            #experience .rightColumn {
              width: 100% !important;
              order: 2 !important;
              margin-top: 0 !important;
            }
          }
          
          @media (max-width: 480px) {
            .experienceGrid {
              display: block !important;
            }
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#0b0b0b',
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
    background: 'radial-gradient(circle at 30% 40%, rgba(0, 212, 255, 0.04) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 107, 107, 0.04) 0%, transparent 50%)',
  },
  
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.2,
    animation: 'gentleFloat 15s ease-in-out infinite'
  },
  
  orb1: {
    width: '350px',
    height: '350px',
    background: 'linear-gradient(45deg, #00d4ff, #5b21b6)',
    top: '25%',
    left: '5%',
    animationDelay: '0s'
  },
  
  orb2: {
    width: '280px',
    height: '280px',
    background: 'linear-gradient(45deg, #ff6b6b, #00d4ff)',
    bottom: '30%',
    right: '8%',
    animationDelay: '8s'
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
    marginBottom: '25px',
    flexWrap: 'wrap'
  },
  
  buildingIcon: {
    color: '#00d4ff',
    animation: 'buildingPulse 4s ease-in-out infinite'
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
    width: '140px',
    height: '4px',
    background: 'linear-gradient(90deg, #00d4ff, #5b21b6, #ff6b6b)',
    margin: '20px auto 30px',
    borderRadius: '2px',
    animation: 'expandLine 2s ease-out forwards'
  },
  
  subtitle: {
    fontSize: 'clamp(14px, 4vw, 18px)',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '700px',
    margin: '0 auto',
    fontWeight: '300'
  },
  
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '50px',
    marginBottom: '60px',
    width: '100%'
  },
  
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginTop: '40px'
  },
  
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '10px'
  },
  
  sectionIcon: {
    color: '#00d4ff'
  },
  
  sectionTitle: {
    fontSize: 'clamp(18px, 4vw, 24px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0
  },
  
  experienceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  
  experienceCard: {
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    border: '2px solid rgba(0, 212, 255, 0.3)',
    borderRadius: '20px',
    padding: '30px',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer'
  },
  
  expHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
    gap: '15px'
  },
  
  expTitleSection: {
    flex: 1
  },
  
  expTitle: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 5px 0',
    lineHeight: '1.3'
  },
  
  expCompany: {
    fontSize: 'clamp(14px, 3.5vw, 16px)',
    fontWeight: '600',
    margin: 0
  },
  
  typeBadge: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    border: '2px solid',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    flexShrink: 0
  },
  
  durationSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '15px'
  },
  
  durationText: {
    fontSize: 'clamp(12px, 3vw, 14px)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500'
  },
  
  expDescription: {
    fontSize: 'clamp(13px, 3vw, 15px)',
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.6',
    margin: '0 0 20px 0',
    fontWeight: '400'
  },
  
  skillsSection: {
    marginTop: '20px'
  },
  
  skillsTitle: {
    fontSize: 'clamp(13px, 3vw, 15px)',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 10px 0'
  },
  
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  
  skillBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 10px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid',
    borderRadius: '10px',
    fontSize: 'clamp(11px, 3vw, 12px)',
    fontWeight: '500',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  },
  
  skillName: {
    color: '#ffffff'
  },
  
  certificationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  
  certCard: {
    backgroundColor: 'rgba(255, 107, 107, 0.15)',
    border: '2px solid rgba(255, 107, 107, 0.4)',
    borderRadius: '16px',
    padding: '20px',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer'
  },
  
  certHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '15px'
  },
  
  certIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  
  certInfo: {
    flex: 1
  },
  
  certName: {
    fontSize: 'clamp(13px, 3.5vw, 15px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 5px 0',
    lineHeight: '1.3'
  },
  
  certIssuer: {
    fontSize: 'clamp(11px, 3vw, 12px)',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 0,
    fontWeight: '500'
  },
  
  certFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  certDate: {
    fontSize: 'clamp(11px, 3vw, 12px)',
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500'
  },
  
  certTypeBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '10px',
    fontWeight: '600'
  },
  
  summaryStats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    marginTop: '60px',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    flexWrap: 'wrap'
  },
  
  statCard: {
    textAlign: 'center'
  },
  
  statNumber: {
    fontSize: 'clamp(24px, 5vw, 32px)',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #00d4ff, #ff6b6b)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: '1.2'
  },
  
  statLabel: {
    fontSize: 'clamp(12px, 3vw, 14px)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500'
  },
  
  statDivider: {
    width: '2px',
    height: '40px',
    background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
  }
};

// Complete CSS animations
if (typeof document !== 'undefined') {
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
    
    @keyframes buildingPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.1); }
    }
    
    @keyframes expandLine {
      0% { width: 0; }
      100% { width: 140px; }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Experience;