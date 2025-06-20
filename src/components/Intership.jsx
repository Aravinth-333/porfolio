import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Internships = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Tech Solutions Pvt. Ltd.",
      location: "City, State",
      duration: "Jun 2023 - Aug 2023",
      type: "Summer Internship",
      description:
        "Worked on front-end development using React.js and contributed to responsive web design projects.",
      achievements: [
        "Developed 3 responsive web pages using React.js and CSS",
        "Collaborated with senior developers on code reviews",
        "Learned agile development methodologies",
        "Improved website loading speed by 20%",
      ],
      skills: ["React.js", "HTML/CSS", "JavaScript", "Git", "Teamwork"],
    },
    {
      title: "Software Development Trainee",
      company: "StartUp Inc.",
      location: "City, State",
      duration: "Dec 2022 - Feb 2023",
      type: "Winter Internship",
      description:
        "Participated in software development lifecycle and gained hands-on experience with full-stack development.",
      achievements: [
        "Built a complete CRUD application using Node.js",
        "Learned database design principles",
        "Participated in daily standup meetings",
        "Documented technical specifications",
      ],
      skills: ["Node.js", "MongoDB", "Express.js", "API Development"],
    },
  ];

  const certifications = [
    {
      name: "React.js Fundamentals",
      issuer: "FreeCodeCamp",
      date: "2023",
      type: "Online Course",
    },
    {
      name: "Java Programming",
      issuer: "Coursera",
      date: "2022",
      type: "Certification",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Experience & Learning</h2>
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
                    <Calendar className="me-1" size={16} /> {exp.duration} | <MapPin className="mx-1" size={16} />
                    {exp.location}
                  </p>

                  <p>{exp.description}</p>

                  <h6 className="fw-bold d-flex align-items-center">
                    <Award className="me-2 text-success" /> Key Achievements
                  </h6>
                  <ul className="list-unstyled">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-1">
                        <span className="badge bg-primary me-2 mt-1" style={{ width: "6px", height: "6px" }}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

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
              <Award className="me-2 text-success" /> Certifications
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