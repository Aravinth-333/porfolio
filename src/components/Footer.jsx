import { Github, Linkedin, Mail, Heart, Phone, MapPin, User } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-primary" },
    { icon: Github, href: "#", label: "GitHub", color: "text-light" },
    { icon: Mail, href: "mailto:your.email@gmail.com", label: "Email", color: "text-danger" }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Profile Section */}
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40 }}>
                <User size={20} className="text-white" />
              </div>
              <h5 className="mb-0">[Your Name]</h5>
            </div>
            <p className="text-light-50">
              Fresh BTech CSE graduate passionate about software development and eager to contribute to innovative projects.
            </p>
            <ul className="list-unstyled small">
              <li className="d-flex align-items-center mb-1">
                <MapPin size={16} className="me-2" /> Your City, State, India
              </li>
              <li className="d-flex align-items-center mb-1">
                <Phone size={16} className="me-2" /> +91 XXXXX XXXXX
              </li>
              <li className="d-flex align-items-center">
                <Mail size={16} className="me-2" /> your.email@gmail.com
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a href={link.href} className="text-light-50 text-decoration-none">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Status */}
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Let's Connect</h6>
            <div className="mb-3 d-flex gap-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className={`btn btn-outline-light rounded-circle p-2 ${social.color}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="bg-secondary bg-opacity-25 p-3 rounded">
              <h6 className="mb-2 small fw-semibold">Job Status</h6>
              <div className="d-flex align-items-center small text-success">
                <span className="bg-success rounded-circle me-2" style={{ width: 8, height: 8 }}></span>
                Available for Hire
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-secondary my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between small">
          <div className="text-light-50 mb-2 mb-md-0">
            Made with <Heart className="text-danger mx-1" size={16} /> by [Your Name]
          </div>
          <div className="text-light-50">
            © {currentYear} BTech Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
