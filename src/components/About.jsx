import {
  User,
  Award,
  Calendar,
  Target,
  Heart,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: User,
      title: "Fresh Graduate",
      value: "BTech AI&DS 2026",
      bgColor: "bg-primary-subtle",
      gradient: "bg-primary text-white",
    },
    {
      icon: Award,
      title: "Academic Excellence",
      value: "8.40 CGPA",
      bgColor: "bg-warning-subtle",
      gradient: "bg-warning text-white",
    },
    {
      icon: Calendar,
      title: "Ready to Start",
      value: "Immediate Joining",
      bgColor: "bg-success-subtle",
      gradient: "bg-success text-white",
    },
  ];

  return (
    <section id="about" className="py-5 bg-white position-relative">
      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark mb-3">About Me</h2>
          <div
            className="mx-auto mb-3"
            style={{
              width: "130px",
              height: "5px",
              background:
                "linear-gradient(to right, #3b82f6, #8b5cf6)",
              borderRadius: "99999px",
            }}
          />
          <p className="lead text-muted">
            A passionate B.Tech graduate ready to make an impact in the tech
            world with fresh ideas and dedication
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            {/* Mission Card */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "48px", height: "48px" }}>
                    <Target size={20} />
                  </div>
                  <h5 className="card-title mb-0 fw-bold">My Mission</h5>
                </div>
                <p className="text-muted">
                  To leverage my fresh perspective and technical foundation to
                  contribute meaningfully to innovative projects while
                  continuously learning and growing in the dynamic field of
                  software development.
                </p>
              </div>
            </div>

            {/* Motivation Card */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "48px", height: "48px" }}>
                    <Heart size={20} />
                  </div>
                  <h5 className="card-title mb-0 fw-bold">What Drives Me</h5>
                </div>
                <p className="text-muted">
                  I'm motivated by the endless possibilities in technology and
                  the opportunity to solve real-world problems through code.
                  Every challenge is a chance to learn something new.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6">
            {highlights.map(({ icon: Icon, title, value, bgColor, gradient }, idx) => (
              <div key={idx} className={`card border-0 mb-4 shadow-sm ${bgColor}`}>
                <div className="card-body d-flex align-items-center">
                  <div className={`rounded-4 d-flex align-items-center justify-content-center me-4 ${gradient}`} style={{ width: "59px", height: "59px" }}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <h6 className="fw-bold text-dark mb-1">{title}</h6>
                    <p className="h5 mb-0">{value}</p>
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

export default About;
