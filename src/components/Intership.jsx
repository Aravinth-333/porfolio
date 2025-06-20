import { Briefcase, Calendar, Award } from "lucide-react";

const Internships = () => {
  const experiences = [
    {
      title: "Frontend Web devlopment",
      company: "Cybernaut",
      duration: "June 2024 - August 2024",
      type: "Summer Internship",
      description:
        "Participated in frontend web development  and gained hands-on experience",
      skills: ["HTML/CSS","Javascript","React"],
    },
    {
      title: "Full Stack web Development Intern",
      company: "Edunet Foundation",
      duration: "October 2024 - March 2025",
      type: "Winter Internship",
      description:
        "Worked on front-end development using React.js and contributed to responsive web design projects.",
      skills: ["React.js", "HTML/CSS", "JavaScript","MongoDB", "Softskills"],
    },
  ];

  const certifications = [
    {
      name: "IPC WINNER",
      issuer: "Rajalakshmi Engineering College",
      date: "2025",
      type: "Hackathon",
    },
    {
      name: "Fundamentals of CyberSecurity",
      issuer: "Cisco",
      date: "2024",
      type: "Certification",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Experience & Learning</h2>
          <hr className="w-25 mx-auto text-primary" />
          <p className="lead text-muted">
            Internships, training programs, and certifications that have shaped my practical knowledge
          </p>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <h3 className="h4 fw-semibold mb-4 d-flex align-items-center">
              <Briefcase className="me-2 text-primary" /> Internships & Training
            </h3>

            {experiences.map((exp, index) => (
              <div key={index} className="card mb-4 border border-primary-subtle">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <h5 className="card-title mb-1">{exp.title}</h5>
                      <h6 className="text-primary">{exp.company}</h6>
                    </div>
                    <span className="badge bg-success align-self-start">{exp.type}</span>
                  </div>

                  <p className="text-muted mb-2">
                    <Calendar className="me-1" size={16} /> {exp.duration}
                  </p>

                  <p>{exp.description}</p>

                  

                  <div className="mt-3">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="badge bg-light text-primary border border-primary-subtle me-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <h3 className="h4 fw-semibold mb-4 d-flex align-items-center">
              <Award className="me-2 text-success" /> Achievements
            </h3>

            {certifications.map((cert, index) => (
              <div key={index} className="card border mb-3 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                      <Award className="text-success" size={20} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{cert.name}</h6>
                      <small className="text-muted d-block mb-2">{cert.issuer}</small>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted small">{cert.date}</span>
                        <span className="badge bg-primary-subtle text-primary fw-medium small">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;