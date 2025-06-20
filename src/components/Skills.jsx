import { Code, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-primary",
      skills: [
        { name: "Java", level: 85, description: "Core Java, OOP concepts" },
        { name: "Python", level: 80, description: "Data structures, scripting" },
        { name: "JavaScript", level: 75, description: "ES6+, DOM manipulation" },
        { name: "C/C++", level: 70, description: "System programming basics" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Database,
      color: "bg-success",
      skills: [
        { name: "HTML/CSS", level: 90, description: "Responsive design, Flexbox" },
        { name: "React.js", level: 75, description: "Components, hooks, state" },
        { name: "Node.js", level: 65, description: "Basic server development" },
        { name: "MySQL", level: 70, description: "Database design, queries" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "bg-purple",
      skills: [
        { name: "Git/GitHub", level: 80, description: "Version control, collaboration" },
        { name: "VS Code", level: 85, description: "IDE proficiency" },
        { name: "Bootstrap", level: 75, description: "CSS framework" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Skills & Expertise</h2>
          <div className="mx-auto my-3" style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}></div>
          <p className="text-muted">
            Technical and soft skills developed during my BTech journey and through hands-on projects
          </p>
        </div>

        <div className="row">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <div className={`me-3 p-3 text-white rounded ${category.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <h5 className="card-title mb-0">{category.title}</h5>
                    </div>

                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-4">
                        <div className="d-flex justify-content-between">
                          <div>
                            <strong>{skill.name}</strong>
                            <div className="small text-muted">{skill.description}</div>
                          </div>
                          <span className="text-muted fw-bold">{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: '6px' }}>
                          <div
                            className="progress-bar"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
