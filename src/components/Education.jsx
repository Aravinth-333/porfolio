import { GraduationCap, Calendar, Award, Book } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Your University/College Name",
      location: "City, State",
      duration: "2020 - 2024",
      cgpa: "8.5",
      maxCgpa: "10.0",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, DBMS, Web Development",
        "Final Year Project: [Your Project Name]",
        "Active member of coding club/technical society"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM)",
      institution: "Your School Name",
      location: "City, State",
      duration: "2018 - 2020",
      cgpa: "85%",
      maxCgpa: "100%",
      highlights: [
        "Mathematics, Physics, Chemistry",
        "Strong foundation in analytical thinking"
      ]
    }
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Education</h2>
          <hr className="w-25 mx-auto border-primary" />
          <p className="lead text-muted">
            My academic journey and educational background that shaped my technical foundation
          </p>
        </div>

        <div className="row justify-content-center">
          {educationData.map((edu, index) => (
            <div key={index} className="col-md-10 mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3">
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                        <GraduationCap size={30} />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{edu.degree}</h5>
                      <p className="text-primary mb-2 fw-semibold">{edu.field}</p>
                      <div className="d-flex flex-wrap gap-3 text-muted small">
                        <div className="d-flex align-items-center">
                          <Calendar size={16} className="me-1" />
                          {edu.duration}
                        </div>
                        <div className="d-flex align-items-center text-success">
                          <Award size={16} className="me-1" />
                          {edu.cgpa}/{edu.maxCgpa}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mb-1 fw-medium">{edu.institution}</p>
                  <p className="text-muted small mb-3">{edu.location}</p>

                  <ul className="list-unstyled">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="d-flex align-items-start mb-2">
                        <Book size={16} className="text-primary me-2 mt-1" />
                        <span className="text-muted small">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
