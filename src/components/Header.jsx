import { Menu, X, User, BookOpen, Code, Briefcase, Mail, Home } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#education", label: "Education", icon: BookOpen },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.95)" : "transparent",
        backdropFilter: "blur(10px)",
        borderBottom: isScrolled
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
     <nav
  style={{
    width: "100%",
    padding: window.innerWidth < 768 ? "16px 12px" : "16px 48px", 
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }}
>

        {/* Logo / Brand */}
        <span
          style={{
            fontSize: "20px",
            fontWeight: "800",
            background: "linear-gradient(135deg, #00d4ff, #5b21b6, #ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            letterSpacing: "1px",
          }}
        >
          Aravinth.io
        </span>

        {/* Desktop Nav */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "28px",
          }}
          className="d-none d-md-flex"
        >
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => scrollToSection(href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: "500",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#00d4ff";
                  e.target.style.textShadow = "0 0 10px rgba(0,212,255,0.6)";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#ffffff";
                  e.target.style.textShadow = "none";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile) */}
        <button
          className="d-md-none"
          onClick={toggleMenu}
          style={{
            background: "none",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(10,10,10,0.95)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            animation: "slideDown 0.3s ease forwards",
          }}
          className="d-md-none"
        >
          {navItems.map(({ href, label, icon: Icon }) => (
            <button
              key={href}
              onClick={() => scrollToSection(href)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "none",
                border: "none",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: "500",
                padding: "10px 0",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#00d4ff";
                e.target.style.transform = "translateX(5px)";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#ffffff";
                e.target.style.transform = "translateX(0)";
              }}
            >
              <Icon size={18} /> {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

// Animation for mobile menu
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleSheet);

export default Header;
