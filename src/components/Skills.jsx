import { Code, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-primary",
      skills: ["Java", "JavaScript", "MySQL"],
    },
    {
      title: "Web Technologies",
      icon: Database,
      color: "bg-success",
      skills: ["HTML/CSS", "React.js", "Node.js", "MongoDB"],
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "bg-warning",
      skills: ["Git & GitHub", "VS Code", "Bootstrap"],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Skills & Expertise</h2>
          <div
            className="mx-auto my-3"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #0d6efd, #6610f2)",
            }}
          ></div>
          <p className="text-muted">
            Technologies and tools I’ve worked with during my academic and project journey
          </p>
        </div>

        <div className="row">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className={`me-3 p-3 text-white rounded-circle ${category.color}`}>
                        <Icon size={24} />
                      </div>
                      <h5 className="card-title mb-0">{category.title}</h5>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="badge bg-light text-dark border border-secondary-subtle px-3 py-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
