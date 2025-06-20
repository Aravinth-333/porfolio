import { ExternalLink, Github, Calendar, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description:
        "A full-stack e-commerce platform built during final year project. Features include user authentication, product catalog, shopping cart, and order management system.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
      date: "Final Year Project",
      type: "Academic",
      features: [
        "User registration and login system",
        "Product search and filtering",
        "Shopping cart functionality",
        "Responsive design",
      ],
    },
    {
      title: "Student Management System",
      description:
        "A desktop application for managing student records, attendance, and grades. Built using Java Swing with MySQL database integration.",
      technologies: ["Java", "Swing", "MySQL", "JDBC"],
      date: "3rd Year Project",
      type: "Academic",
      features: [
        "Student record management",
        "Attendance tracking",
        "Grade calculation",
        "Report generation",
      ],
    },
    {
      title: "Weather App",
      description:
        "A responsive web application that displays current weather information and forecasts using OpenWeatherMap API.",
      technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
      date: "Personal Project",
      type: "Personal",
      features: [
        "Current weather display",
        "5-day forecast",
        "Location-based search",
        "Responsive design",
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
                <div className="card-footer bg-white border-top d-flex gap-2">
                  <button className="btn btn-outline-primary btn-sm d-flex align-items-center">
                    <ExternalLink size={16} className="me-2" /> View Demo
                  </button>
                  <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
                    <Github size={16} className="me-2" /> Source Code
                  </button>
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
