import { ArrowDown, Download, Github, Linkedin, Mail, Code } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center justify-content-center bg-light position-relative text-center">
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient" style={{ zIndex: 0, opacity: 0.1 }}></div>

      <div className="container position-relative z-1 py-5 px-3">

        <h1 className="display-4 fw-bold text-dark mb-3">
          Hello, I'm
          <div className="text-gradient fw-bold d-block">
            ARAVINTH S
          </div>
        </h1>

        <p className="lead text-secondary mb-2">Bachelor of Technology Graduate in Artificial Inteligence and Data Science</p>
        <div className="d-flex justify-content-center align-items-center gap-2 text-primary mb-3">
          <Code size={20} />
          <span className="fw-semibold">Ready to Code the Future</span>
        </div>

        <p className="text-muted mx-auto mb-4" style={{ maxWidth: "600px" }}>
          Passionate about creating innovative solutions and turning ideas into reality.
          Ready to contribute fresh perspectives and technical skills to your team.
        </p>

        <div className="d-flex justify-content-center gap-3 mb-4 flex-column flex-sm-row">
        <a href="https://drive.google.com/file/d/1jixUWW2UYxLgC23BR3kphGg2in618KfC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> 
          <button className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2">
            <Download size={18} />
            Download Resume
          </button>
          </a>

          <button onClick={scrollToAbout} className="btn btn-outline-primary btn-lg">
            Learn More About Me
          </button>
        </div>

        <div className="d-flex justify-content-center gap-3 mb-4">
          {[ 
            { icon: Github, label: "GitHub", href:"https://github.com/Aravinth-333" },
            // { icon: Linkedin, label: "LinkedIn" },
            { icon: Mail, label: "Email",href:"mailto:aravinth.engineering@gmail.com" }
          ].map(({ icon: Icon, label,href }, index) => (
            <a 
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center"
              style={{ width: '56px', height: '56px' }}
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <button onClick={scrollToAbout} className="btn btn-link text-muted animate__animated animate__bounce">
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
