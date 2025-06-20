import {  Github, Calendar, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Efficient On-Duty Request Handling System",
      description:
        "A responsive web solution enabling streamlined, multilevel approval of student on-duty requests with real-time tracking and improved communication.",
      technologies: ["HTML/CSS","Javascript","Mongodb","Node.js"],
      date: "Pre-final Year Project",
      type: "Academic",
      features: [
        "User registration and login system",
        "ON-Duty request registration form",
        "Class-Incharge approval workflow",
        "Head of Department(HoD) approval workflow",
        "Email notification upon successful approval",
      ],
    },
    {
      title: "Organic Grocery Store",
      description:
        "A responsive web application enabling customers to browse, shop organic products, and choose between pickup or home delivery for a seamless shopping experience.",
      technologies: ["React", "Bootstrap"],
      date: "Personal Project",
      type: "Personal",
      features: [
        "Product listing with category-based",
        "Interactive shopping cart",
        "Responsive design for mobile and desktop devices",
        "Option for pickup or home delivery",
        "User-friendly interface for seamless navigation",
      ],
    },
    {
      title: "Plant Disesase Prediction",
      description:
        "A user-friendly mobile-compatible website designed for farmers to identify plant diseases easily, powered by a Python-based backend for accurate disease detection and recommendations.",
      technologies: ["HTML/CSS", "Weather API","Python"],
      date: "Personal Project",
      type: "Personal",
      features: [
        "Mobile-Friendly and easy-to-use interface for farmers",
        "Real time capturing to identify plant diseases",
        "Backend powered by Python for accurate disease prediction",
        "Suggestions for treatment or preventive measures",
        "Multilingual support for better accessibility"
      ],
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">Academic & Personal Projects</h2>
          <div className="mx-auto mb-3" style={{ width: "100px", height: "4px", background: "linear-gradient(to right, #3b82f6, #9333ea)" }}></div>
          <p className="text-muted">Here are some projects I've worked on during my BTech journey and personal learning</p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-light position-relative">
                  <div className="d-flex justify-content-between">
                    <span className={`badge ${project.type === 'Academic' ? 'bg-primary' : 'bg-success'}`}>{project.type}</span>
                    <small className="text-muted d-flex align-items-center">
                      <Calendar size={16} className="me-1" /> {project.date}
                    </small>
                  </div>
                  <div className="position-absolute top-50 start-50 translate-middle opacity-25">
                    <Code size={64} className="text-primary" />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <h6 className="fw-semibold text-secondary mt-3">Key Features:</h6>
                  <ul className="list-unstyled">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-1">
                        <span className="badge bg-primary me-2 mt-1" style={{ width: '8px', height: '8px', borderRadius: '50%' }}></span>
                        <span className="text-muted small">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-light text-primary border border-primary me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
