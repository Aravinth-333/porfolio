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
    <header className={`fixed-top ${isScrolled ? 'shadow-sm bg-white' : 'bg-transparent'}`}>
      <nav className="navbar container py-3">
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="navbar-brand fw-bold text-primary">Portfolio</span>

          {/* Hamburger button */}
          <button
            className="d-md-none btn"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Nav */}
          <ul className="navbar-nav d-none d-md-flex flex-row ms-auto gap-4">
            {navItems.map(({ href, label }) => (
              <li key={href} className="nav-item">
                <button
                  className="btn nav-link text-dark fw-medium"
                  onClick={() => scrollToSection(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="bg-white border-top py-3 d-md-none position-absolute w-100 z-3">
          <ul className="list-unstyled px-3">
            {navItems.map(({ href, label, icon: Icon }) => (
              <li key={href} className="mb-2">
                <button
                  className="btn w-100 text-start d-flex align-items-center text-dark"
                  onClick={() => scrollToSection(href)}
                >
                  <Icon size={18} className="me-2" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
