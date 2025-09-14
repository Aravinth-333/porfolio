import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, User, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aravinth.engineering@gmail.com",
      link: "mailto:aravinth.engineering@gmail.com",
      color: "#00d4ff",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6369850081",
      link: "tel:+916369850081",
      color: "#5b21b6",
      description: "Let's have a conversation"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#",
      color: "#ff6b6b",
      description: "Available for opportunities"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Stagger contact card animations
            contactInfo.forEach((_, index) => {
              setTimeout(() => {
                setCardVisibility(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, 500 + (index * 200));
            });
          } else {
            setIsVisible(false);
            setCardVisibility([false, false, false]);
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
    <section ref={sectionRef} id="contact" style={styles.section}>
      {/* Background Elements */}
      <div style={styles.backgroundLayer}>
        <div style={styles.gradientOverlay}></div>
        
        {/* Floating orbs */}
        <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
        <div style={{...styles.floatingOrb, ...styles.orb2}}></div>
        
        {/* Static dots */}
        <div style={{...styles.staticDot, top: '20%', left: '10%', animationDelay: '0s'}}></div>
        <div style={{...styles.staticDot, top: '60%', right: '15%', animationDelay: '2s'}}></div>
        <div style={{...styles.staticDot, bottom: '30%', left: '80%', animationDelay: '4s'}}></div>
      </div>

      <div style={styles.container}>
        {/* Header */}
        <div style={{
          ...styles.header,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
        }}>
          <div style={styles.titleContainer}>
            <MessageCircle size={28} style={styles.messageIcon} />
            <h2 style={styles.title}>Let's Connect</h2>
          </div>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Ready to start my career journey! Let's discuss opportunities and how I can contribute to your team.
          </p>
        </div>

        <div style={styles.grid} className="contactGrid">
          {/* Left: Contact Info */}
          <div style={styles.infoColumn}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  style={{
                    ...styles.infoCard,
                    backgroundColor: info.color + '15',
                    borderLeftColor: info.color,
                    opacity: cardVisibility[index] ? 1 : 0,
                    transform: cardVisibility[index] 
                      ? 'translateX(0) scale(1)' 
                      : 'translateX(-30px) scale(0.95)',
                    transitionDelay: `${index * 0.15}s`
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = info.color + '25';
                    e.currentTarget.style.borderLeftColor = info.color;
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${info.color}40`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = info.color + '15';
                    e.currentTarget.style.borderLeftColor = info.color;
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <div style={{
                    ...styles.iconCircle,
                    backgroundColor: info.color + '30',
                    color: info.color
                  }}>
                    <Icon size={24} />
                  </div>
                  <div style={styles.infoContent}>
                    <h5 style={styles.infoTitle}>{info.title}</h5>
                    <p style={{...styles.infoValue, wordBreak: 'break-word'}}>{info.value}</p>
                    <p style={styles.infoDescription}>{info.description}</p>
                  </div>
                </a>
              );
            })}

            {/* Additional Status Card */}
            <div style={{
              ...styles.statusCard,
              opacity: cardVisibility[2] ? 1 : 0,
              transform: cardVisibility[2] ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '1.1s',
              marginTop: '20px' // Added margin to separate from form
            }}>
              <User size={20} style={styles.userIcon} />
              <div style={styles.statusText}>
                <span style={styles.statusTitle}>Open to Work</span>
                <span style={styles.statusDesc}>Available for full-time opportunities</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={styles.formColumn}>
            <div style={{
              ...styles.formCard,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.95)',
              transitionDelay: '0.8s',
              marginTop: '30px' // Added margin to separate from contact info
            }}>
              {!isSubmitted ? (
                <>
                  <div style={styles.formHeader}>
                    <Send size={24} style={styles.sendIcon} />
                    <h3 style={styles.formTitle}>Send a Message</h3>
                  </div>

                  <div style={styles.formContainer}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00d4ff';
                        e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00d4ff';
                        e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00d4ff';
                        e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />

                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={styles.textarea}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#00d4ff';
                        e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />

                    <button 
                      type="submit" 
                      onClick={handleSubmit}
                      style={styles.submitButton}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.9)';
                        e.target.style.transform = 'translateY(-2px) scale(1.02)';
                        e.target.style.boxShadow = '0 15px 35px rgba(0, 212, 255, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#00d4ff';
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 10px 25px rgba(0, 212, 255, 0.3)';
                      }}
                    >
                      <Send size={18} />
                      <span>Send Message</span>
                    </button>
                  </div>
                </>
              ) : (
                <div style={styles.successMessage}>
                  <CheckCircle size={48} style={styles.successIcon} />
                  <h3 style={styles.successTitle}>Message Sent!</h3>
                  <p style={styles.successText}>
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Strong Mobile Override - Critical CSS */}
      <style>
        {`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(180deg); }
          }
          
          @keyframes gentlePulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }
          
          @keyframes messagePulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
          
          @keyframes expandLine {
            0% { width: 0; }
            100% { width: 120px; }
          }
          
          /* Mobile-first responsive design */
          @media (max-width: 1024px) {
            .contactGrid {
              display: flex !important;
              flex-direction: column !important;
              gap: 40px !important;
              grid-template-columns: none !important;
            }
            
            #contact .infoColumn {
              order: 1 !important;
              width: 100% !important;
            }
            
            #contact .formColumn {
              order: 2 !important;
              width: 100% !important;
            }
          }
          
          @media (max-width: 768px) {
            .contactGrid {
              display: flex !important;
              flex-direction: column !important;
              gap: 30px !important;
            }
            
            #contact {
              padding: 60px 0 !important;
            }
            
            #contact .container {
              padding: 0 15px !important;
            }
            
            #contact .header {
              margin-bottom: 50px !important;
            }
            
            #contact .infoColumn {
              order: 1 !important;
              width: 100% !important;
              margin-bottom: 0 !important;
            }
            
            #contact .formColumn {
              order: 2 !important;
              width: 100% !important;
            }
            
            #contact .infoCard {
              padding: 20px !important;
              gap: 15px !important;
            }
            
            #contact .iconCircle {
              width: 50px !important;
              height: 50px !important;
            }
            
            #contact .formCard {
              padding: 25px !important;
            }
            
            #contact .statusCard {
              padding: 15px !important;
              margin-top: 25px !important;
            }
            
            /* Fix for email text overflow */
            #contact .infoValue {
              word-break: break-word !important;
              overflow-wrap: break-word !important;
            }
          }
          
          @media (max-width: 480px) {
            .contactGrid {
              display: block !important;
            }
            
            #contact .container {
              padding: 0 10px !important;
            }
            
            #contact .infoColumn {
              width: 100% !important;
              margin-bottom: 25px !important;
            }
            
            #contact .formColumn {
              width: 100% !important;
            }
            
            #contact .infoCard {
              padding: 18px !important;
              flex-direction: column !important;
              text-align: center !important;
            }
            
            #contact .formCard {
              padding: 20px !important;
              margin-top: 20px !important;
            }
            
            #contact .input, #contact .textarea {
              padding: 12px 15px !important;
            }
            
            #contact .submitButton {
              padding: 14px 20px !important;
            }
            
            /* Ensure email text wraps properly */
            #contact .infoValue {
              font-size: 14px !important;
              line-height: 1.4 !important;
            }
          }
          
          /* Landscape orientation for mobile */
          @media (max-width: 768px) and (orientation: landscape) {
            .contactGrid {
              display: flex !important;
              flex-direction: column !important;
            }
            
            #contact .infoColumn {
              order: 1 !important;
            }
            
            #contact .formColumn {
              order: 2 !important;
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
    backgroundColor: '#080808',
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
    background: 'radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(91, 33, 182, 0.05) 0%, transparent 50%)',
  },
  
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    opacity: 0.2,
    animation: 'gentleFloat 16s ease-in-out infinite'
  },
  
  orb1: {
    width: '400px',
    height: '400px',
    background: 'linear-gradient(45deg, #00d4ff, #5b21b6)',
    top: '10%',
    left: '5%',
    animationDelay: '0s'
  },
  
  orb2: {
    width: '300px',
    height: '300px',
    background: 'linear-gradient(45deg, #ff6b6b, #00d4ff)',
    bottom: '20%',
    right: '10%',
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
  
  header: {
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
  
  messageIcon: {
    color: '#00d4ff',
    animation: 'messagePulse 3s ease-in-out infinite'
  },
  
  title: {
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
    width: '120px',
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
  
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'start'
  },
  
  infoColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  
  infoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '25px',
    borderLeft: '4px solid',
    borderRadius: '20px',
    textDecoration: 'none',
    color: '#ffffff',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer'
  },
  
  iconCircle: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  
  infoContent: {
    flex: 1
  },
  
  infoTitle: {
    fontSize: 'clamp(16px, 3.5vw, 18px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 5px 0'
  },
  
  infoValue: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    color: '#ffffff',
    fontWeight: '600',
    margin: '0 0 5px 0',
    wordBreak: 'break-word'
  },
  
  infoDescription: {
    fontSize: 'clamp(12px, 3vw, 13px)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400',
    margin: 0
  },
  
  statusCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px',
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    border: '2px solid rgba(34, 197, 94, 0.3)',
    borderRadius: '16px',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  userIcon: {
    color: '#22c55e'
  },
  
  statusText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  
  statusTitle: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '600',
    color: '#22c55e'
  },
  
  statusDesc: {
    fontSize: 'clamp(12px, 3vw, 13px)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '400'
  },
  
  formColumn: {
    display: 'flex'
  },
  
  formCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '35px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '30px'
  },
  
  sendIcon: {
    color: '#00d4ff'
  },
  
  formTitle: {
    fontSize: 'clamp(18px, 4vw, 24px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0
  },
  
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  
  input: {
    padding: '15px 18px',
    borderRadius: '12px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '400',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    fontFamily: 'inherit'
  },
  
  textarea: {
    padding: '15px 18px',
    borderRadius: '12px',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '400',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'vertical',
    minHeight: '120px'
  },
  
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '16px 24px',
    marginTop: '10px',
    backgroundColor: '#00d4ff',
    color: '#000000',
    border: 'none',
    borderRadius: '12px',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 10px 25px rgba(0, 212, 255, 0.3)',
    fontFamily: 'inherit'
  },
  
  successMessage: {
    textAlign: 'center',
    padding: '40px 20px'
  },
  
  successIcon: {
    color: '#22c55e',
    marginBottom: '20px'
  },
  
  successTitle: {
    fontSize: 'clamp(20px, 4vw, 28px)',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 15px 0'
  },
  
  successText: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '400',
    margin: 0
  }
};

export default Contact;