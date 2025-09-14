import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, Phone, MapPin, User, Heart, ArrowUp, Star, Code } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Aravinth-333", 
      label: "GitHub", 
      color: "#00d4ff",
      hoverColor: "#00a3cc"
    },
    { 
      icon: Mail, 
      href: "mailto:aravinth.engineering@gmail.com", 
      label: "Email", 
      color: "#ff6b6b",
      hoverColor: "#ff5252"
    }
  ];

  const quickLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👨‍💻" },
    { href: "#education", label: "Education", icon: "🎓" },
    { href: "#skills", label: "Skills", icon: "⚡" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#contact", label: "Contact", icon: "📫" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      color: "#00d4ff"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6369850081",
      color: "#5b21b6",
      href: "tel:+916369850081"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aravinth.engineering@gmail.com",
      color: "#ff6b6b",
      href: "mailto:aravinth.engineering@gmail.com"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Scroll to top button logic
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleQuickLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer ref={sectionRef} style={styles.footer}>
        {/* Background Elements */}
        <div style={styles.backgroundLayer}>
          <div style={styles.gradientOverlay}></div>
          
          {/* Floating orb */}
          <div style={{...styles.floatingOrb, ...styles.orb1}}></div>
          
          {/* Static dots */}
          <div style={{...styles.staticDot, top: '20%', left: '10%', animationDelay: '0s'}}></div>
          <div style={{...styles.staticDot, top: '60%', right: '15%', animationDelay: '2s'}}></div>
          <div style={{...styles.staticDot, bottom: '30%', left: '70%', animationDelay: '4s'}}></div>
        </div>

        <div style={styles.container}>
          {/* Main Footer Content */}
          <div style={styles.footerGrid}>
            
            {/* Profile Section */}
            <div style={{
              ...styles.profileSection,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.2s'
            }}>
              <div style={styles.profileHeader}>
                <div style={styles.profileAvatar}>
                  <User size={24} />
                </div>
                <div>
                  <h3 style={styles.profileName}>Aravinth S</h3>
                  <div style={styles.statusBadge}>
                    <Star size={12} style={styles.statusIcon} />
                    <span>Available for Hire</span>
                  </div>
                </div>
              </div>
              
              <p style={styles.profileDescription}>
                Fresh B.Tech AI&DS graduate passionate about software development and eager to contribute to innovative projects with cutting-edge solutions.
              </p>

              {/* Contact Info */}
              <div style={styles.contactList}>
                {contactInfo.map((contact, idx) => {
                  const Icon = contact.icon;
                  const content = (
                    <div 
                      key={idx}
                      style={styles.contactItem}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = contact.color + '20';
                        e.currentTarget.style.borderColor = contact.color + '60';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <Icon size={18} style={{...styles.contactIcon, color: contact.color}} />
                      <div style={styles.contactText}>
                        <span style={styles.contactLabel}>{contact.label}</span>
                        <span style={styles.contactValue}>{contact.value}</span>
                      </div>
                    </div>
                  );

                  return contact.href ? (
                    <a key={idx} href={contact.href} style={styles.contactLink}>
                      {content}
                    </a>
                  ) : content;
                })}
              </div>
            </div>

            {/* Quick Links Section */}
            <div style={{
              ...styles.linksSection,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.4s'
            }}>
              <h4 style={styles.sectionTitle}>Quick Navigation</h4>
              <div style={styles.quickLinksGrid}>
                {quickLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickLinkClick(link.href)}
                    style={styles.quickLink}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                      e.target.style.borderColor = '#00d4ff';
                      e.target.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={styles.linkIcon}>{link.icon}</span>
                    <span style={styles.linkText}>{link.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div style={{
              ...styles.connectSection,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '0.6s'
            }}>
              <h4 style={styles.sectionTitle}>Let's Connect</h4>
              
              {/* Social Links */}
              <div style={styles.socialContainer}>
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialLink}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = social.color + '20';
                        e.currentTarget.style.borderColor = social.color;
                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                        e.currentTarget.style.boxShadow = `0 10px 25px ${social.color}40`;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      <Icon size={24} style={{color: social.color}} />
                    </a>
                  );
                })}
              </div>

              {/* Professional Status Card */}
              <div style={styles.statusCard}>
                <div style={styles.statusHeader}>
                  <Code size={20} style={styles.statusCodeIcon} />
                  <span style={styles.statusTitle}>Professional Status</span>
                </div>
                <div style={styles.statusContent}>
                  <div style={styles.statusIndicator}>
                    <div style={styles.statusDot}></div>
                    <span style={styles.statusText}>Open to Opportunities</span>
                  </div>
                  <div style={styles.statusDetails}>
                    <span style={styles.statusDetail}>Full-time • Remote • On-site</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{
            ...styles.footerBottom,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.8s'
          }}>
            <div style={styles.bottomDivider}></div>
            <div style={styles.bottomContent}>
              <div style={styles.copyright}>
                <span>© {currentYear} Aravinth S</span>
                <span className="mobile-break"><br /></span>
                <span>Crafted with </span>
                <Heart size={14} style={styles.heartIcon} />
                <span> for innovation</span>
                <span className="mobile-break"><br /></span>
                <span style={styles.noteText}>Ready to build the future together</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            ...styles.scrollTopButton,
            opacity: showScrollTop ? 1 : 0,
            transform: showScrollTop ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#00d4ff';
            e.target.style.transform = 'translateY(-5px) scale(1.1)';
            e.target.style.boxShadow = '0 15px 30px rgba(0, 212, 255, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 212, 255, 0.9)';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Enhanced CSS animations */}
      <style>
        {`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes gentlePulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.5); }
          }
          
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.1); }
            50% { transform: scale(1); }
            75% { transform: scale(1.05); }
          }
          
          /* Mobile Responsive Design */
          @media (max-width: 768px) {
            .footerGrid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
              margin-bottom: 40px !important;
            }
            
            .container {
              padding: 0 15px !important;
            }
            
            .footer {
              padding: 60px 0 20px !important;
            }
            
            .socialContainer {
              justify-content: center !important;
            }
            
            .bottomContent {
              flex-direction: column !important;
              text-align: center !important;
            }
            
            .scrollTopButton {
              bottom: 20px !important;
              right: 20px !important;
              width: 45px !important;
              height: 45px !important;
            }
            
            .copyright {
              flex-direction: column;
              gap: 8px;
              text-align: center;
            }
            
            .mobile-break {
              display: block;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-break {
              display: none;
            }
          }
          
          @media (max-width: 480px) {
            .container {
              padding: 0 10px !important;
            }
            
            .footerGrid {
              gap: 25px !important;
            }
            
            .profileHeader {
              flex-direction: column !important;
              text-align: center !important;
              gap: 10px !important;
            }
            
            .quickLinksGrid {
              grid-template-columns: 1fr !important;
            }
            
            .copyright {
              font-size: 14px;
              line-height: 1.6;
            }
          }
        `}
      </style>
    </>
  );
};

const styles = {
  footer: {
    backgroundColor: '#050505',
    position: 'relative',
    overflow: 'hidden',
    padding: '80px 0 30px',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },
  
  backgroundLayer: {
    position: 'absolute',
    inset: 0,
    zIndex: 0
  },
  
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(91, 33, 182, 0.04) 0%, transparent 50%)',
  },
  
  floatingOrb: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.15,
    animation: 'gentleFloat 15s ease-in-out infinite'
  },
  
  orb1: {
    width: '400px',
    height: '400px',
    background: 'linear-gradient(45deg, #00d4ff, #5b21b6)',
    top: '20%',
    right: '5%',
    animationDelay: '0s'
  },
  
  staticDot: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    backgroundColor: '#00d4ff',
    borderRadius: '50%',
    opacity: 0.5,
    animation: 'gentlePulse 5s ease-in-out infinite'
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
  
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '50px',
    marginBottom: '50px'
  },
  
  profileSection: {
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px'
  },
  
  profileAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #00d4ff, #5b21b6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)'
  },
  
  profileName: {
    fontSize: 'clamp(20px, 4vw, 28px)',
    fontWeight: '700',
    margin: '0 0 8px 0',
    background: 'linear-gradient(135deg, #00d4ff, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    border: '1px solid rgba(34, 197, 94, 0.4)',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '12px',
    color: '#22c55e',
    fontWeight: '600'
  },
  
  statusIcon: {
    animation: 'twinkle 2s ease-in-out infinite'
  },
  
  profileDescription: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    lineHeight: '1.7',
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: '30px',
    fontWeight: '300'
  },
  
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  
  contactLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer'
  },
  
  contactIcon: {
    flexShrink: 0
  },
  
  contactText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px'
  },
  
  contactLabel: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500'
  },
  
  contactValue: {
    fontSize: '14px',
    color: '#ffffff',
    fontWeight: '400'
  },
  
  linksSection: {
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  connectSection: {
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  sectionTitle: {
    fontSize: 'clamp(18px, 4vw, 22px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '25px',
    position: 'relative'
  },
  
  quickLinksGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  
  quickLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'left'
  },
  
  linkIcon: {
    fontSize: '16px',
    flexShrink: 0
  },
  
  linkText: {
    flex: 1
  },
  
  socialContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '25px'
  },
  
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '55px',
    height: '55px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
  },
  
  statusCard: {
    backgroundColor: 'rgba(91, 33, 182, 0.1)',
    border: '1px solid rgba(91, 33, 182, 0.3)',
    borderRadius: '16px',
    padding: '20px',
    backdropFilter: 'blur(10px)'
  },
  
  statusHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px'
  },
  
  statusCodeIcon: {
    color: '#5b21b6'
  },
  
  statusTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff'
  },
  
  statusContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    animation: 'pulse 2s ease-in-out infinite'
  },
  
  statusText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#22c55e'
  },
  
  statusDetails: {
    paddingLeft: '18px'
  },
  
  statusDetail: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  
  footerBottom: {
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  bottomDivider: {
    width: '100%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    marginBottom: '25px'
  },
  
  bottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px'
  },
  
  copyright: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5px',
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    width: '100%'
  },
  
  heartIcon: {
    color: '#ff6b6b',
    animation: 'heartbeat 2s ease-in-out infinite'
  },
  
  noteText: {
    color: '#00d4ff',
    fontWeight: '500'
  },
  
  scrollTopButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(0, 212, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    color: '#000000',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    backdropFilter: 'blur(10px)'
  }
};

export default Footer;