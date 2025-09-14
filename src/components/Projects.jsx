import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Rocket,
  Code,
  Globe,
  Database,
  Server,
  Smartphone,
  Cpu,
  Cloud,
  Zap,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
  const [projectVisibility, setProjectVisibility] = useState([]);
  const sectionRef = useRef(null);

  const techIcons = {
    "HTML/CSS": Globe,
    Javascript: Code,
    JavaScript: Code,
    MongoDB: Database,
    Mongodb: Database,
    "Node.js": Server,
    React: Zap,
    Bootstrap: Smartphone,
    "Weather API": Cloud,
    Python: Cpu,
  };

  const projects = [
    {
      title: "On-Duty Request Handling System",
      description:
        "A responsive web solution enabling streamlined, multilevel approval of student on-duty requests with real-time tracking and improved communication.",
      technologies: ["HTML/CSS", "Javascript", "MongoDB", "Node.js"],
      type: "Academic Project",
      color: "#00d4ff",
      bgColor: "rgba(0, 212, 255, 0.1)",
      borderColor: "rgba(0, 212, 255, 0.3)",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
      demo: "#", // dummy for now
      github: "#",
    },
    {
      title: "Organic Grocery Store",
      description:
        "A responsive web application enabling customers to browse, shop organic products, and choose between pickup or home delivery for a seamless shopping experience.",
      technologies: ["React", "Bootstrap"],
      type: "Personal Project",
      color: "#5b21b6",
      bgColor: "rgba(91, 33, 182, 0.1)",
      borderColor: "rgba(91, 33, 182, 0.3)",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2074&q=80",
      demo: "#",
      github: "#",
    },
    {
      title: "Plant Disease Prediction",
      description:
        "A user-friendly mobile-compatible website designed for farmers to identify plant diseases easily, powered by a Python-based backend for accurate disease detection.",
      technologies: ["HTML/CSS", "Weather API", "Python"],
      type: "Personal Project",
      color: "#ff6b6b",
      bgColor: "rgba(255, 107, 107, 0.1)",
      borderColor: "rgba(255, 107, 107, 0.3)",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2070&q=80",
      demo: "#",
      github: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setProjectVisibility((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerSection}>
          <div style={styles.titleContainer}>
            <Rocket size={28} style={{ color: "#00d4ff" }} />
            <h2 style={styles.mainTitle}>Projects & Innovations</h2>
          </div>
          <div style={styles.titleUnderline}></div>
          <p style={styles.subtitle}>
            Showcasing my technical skills through academic and personal
            projects
          </p>
        </div>

        {/* Projects */}
        <div style={styles.projectsList}>
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className="project-card"
              style={{
                ...styles.projectCard,
                backgroundColor: project.bgColor,
                borderColor: project.borderColor,
                opacity: projectVisibility[index] ? 1 : 0,
                transform: projectVisibility[index]
                  ? "translateY(0) scale(1)"
                  : "translateY(50px) scale(0.95)",
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.projectImage}
                />
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>
                  {project.description}
                </p>

                <div style={styles.techList}>
                  {project.technologies.map((tech, i) => {
                    const TechIcon = techIcons[tech] || Code;
                    return (
                      <div
                        key={i}
                        style={{
                          ...styles.techBadge,
                          borderColor: project.color,
                          color: project.color,
                        }}
                      >
                        <TechIcon size={14} /> {tech}
                      </div>
                    );
                  })}
                </div>

                {/* Buttons at bottom-left */}
                <div style={styles.linksRow}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.linkButton,
                      borderColor: project.color,
                      color: project.color,
                    }}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.linkButton,
                      borderColor: project.color,
                      color: project.color,
                    }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>

                <span
                  style={{
                    ...styles.projectType,
                    backgroundColor: project.color + "20",
                    borderColor: project.color + "40",
                    color: project.color,
                  }}
                >
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: "100vh",
    background: "#0d0d0d",
    padding: "80px 20px",
  },
  container: { maxWidth: "1100px", margin: "0 auto", color: "#fff" },
  headerSection: { textAlign: "center", marginBottom: "60px" },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  mainTitle: {
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    fontWeight: "800",
    background: "linear-gradient(135deg, #00d4ff, #5b21b6, #ff6b6b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  titleUnderline: {
    width: "100px",
    height: "4px",
    background: "linear-gradient(90deg, #00d4ff, #5b21b6, #ff6b6b)",
    margin: "20px auto",
    borderRadius: "2px",
  },
  subtitle: {
    maxWidth: "600px",
    margin: "0 auto",
    color: "rgba(255,255,255,0.7)",
  },
  projectsList: { display: "flex", flexDirection: "column", gap: "40px" },
  projectCard: {
    border: "2px solid",
    borderRadius: "20px",
    overflow: "hidden",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    position: "relative",
  },
  projectCardHover: {
    transform: "scale(1.03)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
  },
  imageContainer: { height: "220px", overflow: "hidden" },
  projectImage: { width: "100%", height: "100%", objectFit: "cover" },
  cardContent: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    position: "relative",
  },
  projectTitle: { fontSize: "22px", fontWeight: "700", margin: 0 },
  projectDescription: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "rgba(255,255,255,0.8)",
  },
  techList: { display: "flex", flexWrap: "wrap", gap: "10px" },
  techBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "1px solid",
    borderRadius: "12px",
    fontSize: "13px",
  },
  linksRow: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },
  linkButton: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    border: "1px solid",
    borderRadius: "10px",
    fontSize: "13px",
    textDecoration: "none",
    fontWeight: "600",
  },
  projectType: {
    display: "inline-block",
    padding: "6px 14px",
    border: "2px solid",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
    alignSelf: "flex-end",
  },
};

export default Projects;
