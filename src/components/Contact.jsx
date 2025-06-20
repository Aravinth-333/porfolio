import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@gmail.com",
      link: "mailto:your.email@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Your City, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Let's Connect</h2>
          <div className="mx-auto mb-3" style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)' }}></div>
          <p className="lead text-muted">
            Ready to start my career journey! Let's discuss opportunities and how I can contribute to your team.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-3 d-flex align-items-center gap-2 text-primary">
                  <MessageCircle size={24} /> Get In Touch
                </h3>
                <p className="text-muted">
                  I'm actively seeking entry-level opportunities in software development. Whether you have a job opening, want to discuss potential collaborations, or just want to connect, I'd love to hear from you!
                </p>
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a href={info.link} key={idx} className="text-decoration-none">
                      <div className="d-flex align-items-center p-3 mb-3 bg-white border rounded shadow-sm">
                        <div className="me-3 bg-primary text-white d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px' }}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <h6 className="mb-0 fw-bold text-dark">{info.title}</h6>
                          <small className="text-muted">{info.value}</small>
                        </div>
                      </div>
                    </a>
                  );
                })}
                <div className="mt-4 p-3 bg-primary text-white rounded">
                  <Clock size={16} className="me-2" />
                  <strong>Response Time:</strong> I typically respond within 24 hours.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-3 d-flex align-items-center gap-2 text-success">
                  <Send size={24} /> Send Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                    <Send size={16} /> Send Message
                  </button>
                </form>

                <div className="alert alert-success mt-4 d-flex align-items-center gap-2">
                  <CheckCircle size={18} className="text-success" />
                  <div>
                    <strong>Quick Response Guaranteed:</strong> I prioritize replying to all messages promptly.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;