import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Wrench,
  Cpu,
  Globe,
  GitBranch,
  Terminal,
  Layers,
  Server,
  Smartphone,
  Zap,
  Star,
} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [categoryVisibility, setCategoryVisibility] = useState([false, false, false]);
  const [skillVisibility, setSkillVisibility] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // skill icons mapping
  const skillIcons = {
    Java: Cpu,
    JavaScript: Terminal,
    MySQL: Database,
    "HTML/CSS": Globe,
    "React.js": Layers,
    "Node.js": Server,
    MongoDB: Database,
    "Git & GitHub": GitBranch,
    "VS Code": Code,
    Bootstrap: Smartphone,
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "#00d4ff",
      bgColor: "rgba(0, 212, 255, 0.06)",
      borderColor: "rgba(0, 212, 255, 0.18)",
      skills: [
        { name: "Java", level: 85, description: "Object-oriented programming" },
        { name: "JavaScript", level: 80, description: "Modern ES6+ features" },
        { name: "MySQL", level: 75, description: "Database management" },
      ],
    },
    {
      title: "Web Technologies",
      icon: Database,
      color: "#5b21b6",
      bgColor: "rgba(91, 33, 182, 0.06)",
      borderColor: "rgba(91, 33, 182, 0.18)",
      skills: [
        { name: "HTML/CSS", level: 90, description: "Responsive web design" },
        { name: "React.js", level: 85, description: "Component-based development" },
        { name: "Node.js", level: 70, description: "Server-side JavaScript" },
        { name: "MongoDB", level: 65, description: "NoSQL database" },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "#ff6b6b",
      bgColor: "rgba(255, 107, 107, 0.06)",
      borderColor: "rgba(255, 107, 107, 0.18)",
      skills: [
        { name: "Git & GitHub", level: 80, description: "Version control & collaboration" },
        { name: "VS Code", level: 90, description: "Code editing & debugging" },
        { name: "Bootstrap", level: 85, description: "CSS framework" },
      ],
    },
  ];

  // IntersectionObserver + staggered reveal logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    const handleResize = () => checkMobile();
    window.addEventListener("resize", handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            skillCategories.forEach((_, categoryIndex) => {
              setTimeout(() => {
                setCategoryVisibility((prev) => {
                  const copy = [...prev];
                  copy[categoryIndex] = true;
                  return copy;
                });

                skillCategories[categoryIndex].skills.forEach((_, skillIndex) => {
                  setTimeout(() => {
                    setSkillVisibility((prev) => ({
                      ...prev,
                      [`${categoryIndex}-${skillIndex}`]: true,
                    }));
                  }, skillIndex * 120);
                });
              }, 300 + categoryIndex * 250);
            });
          } else {
            setIsVisible(false);
            setCategoryVisibility([false, false, false]);
            setSkillVisibility({});
          }
        });
      },
      { threshold: 0.25, rootMargin: "-30px 0px -30px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" style={styles.section}>
      <div style={styles.container}>
        {/* header */}
        <div
          style={{
            ...styles.headerSection,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div style={styles.titleContainer}>
            <Zap size={28} style={styles.zapIcon} />
            <h2 style={styles.mainTitle}>Skills & Expertise</h2>
          </div>
          <div style={styles.titleUnderline} />
          <p style={styles.subtitle}>
            Technologies and tools I've mastered during my academic and project journey
          </p>
        </div>

        {/* skills grid */}
        <div
          style={{
            ...styles.skillsGrid,
            gridTemplateColumns: isMobile ? "1fr" : styles.skillsGrid.gridTemplateColumns,
            gap: isMobile ? 18 : styles.skillsGrid.gap,
          }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.title}
                style={{
                  ...styles.categoryCard,
                  background: category.bgColor,
                  borderColor: category.borderColor,
                  opacity: categoryVisibility[categoryIndex] ? 1 : 0,
                  transform: categoryVisibility[categoryIndex] ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div
                  style={{
                    ...styles.categoryHeader,
                    gap: isMobile ? 12 : styles.categoryHeader.gap,
                  }}
                >
                  <div
                    style={{
                      ...styles.categoryIcon,
                      backgroundColor: category.color,
                    }}
                  >
                    <CatIcon size={20} style={{ color: category.color === "#ff6b6b" ? "#fff" : "#000" }} />
                  </div>
                  <h3 style={styles.categoryTitle}>{category.title}</h3>
                </div>

                <div style={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skillIcons[skill.name] || Star;
                    const visible = !!skillVisibility[`${categoryIndex}-${skillIndex}`];

                    return (
                      <div
                        key={skill.name + skillIndex}
                        style={{
                          ...styles.skillItem,
                          borderColor: category.color + "22",
                          opacity: visible ? 1 : 0,
                          transform: visible ? "translateX(0)" : "translateX(-12px)",
                        }}
                      >
                        <div
                          style={{
                            ...styles.skillHeader,
                            flexWrap: isMobile ? "wrap" : "nowrap",
                            gap: isMobile ? 10 : styles.skillHeader.gap,
                          }}
                        >
                          <div style={{ ...styles.skillIcon, backgroundColor: category.color + "20" }}>
                            <Icon size={18} style={{ color: category.color }} />
                          </div>

                          {/* left content (name + desc) */}
                          <div style={styles.skillInfo}>
                            <div style={styles.skillTopRow}>
                              <span style={styles.skillName}>{skill.name}</span>
                              <span style={{ ...styles.skillLevel, color: category.color, marginLeft: "auto" }}>
                                {skill.level}%
                              </span>
                            </div>
                            <div style={styles.skillDescription}>{skill.description}</div>
                          </div>
                        </div>

                        {/* progress bar */}
                        <div style={styles.progressContainer}>
                          <div style={styles.progressTrack}>
                            <div
                              style={{
                                ...styles.progressBar,
                                background: category.color,
                                width: visible ? `${skill.level}%` : "0%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div style={styles.categorySummary}>
                  <Star size={14} style={{ color: category.color }} />
                  <span style={styles.summaryText}>{category.skills.length} Skills Mastered</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* stats moved to bottom in box view */}
        <div style={styles.statsCard}>
          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <div style={styles.statNumber}>10+</div>
              <div style={styles.statLabel}>Technologies</div>
            </div>
            <div style={styles.divider} />
            <div style={styles.statBox}>
              <div style={styles.statNumber}>3</div>
              <div style={styles.statLabel}>Specializations</div>
            </div>
            <div style={styles.divider} />
            <div style={styles.statBox}>
              <div style={styles.statNumber}>80%+</div>
              <div style={styles.statLabel}>Avg Proficiency</div>
            </div>
          </div>
          <hr style={styles.hrLine} />
          <p style={styles.bottomNote}>
            <em>Continuously learning and adapting to new technologies</em>
          </p>
        </div>
      </div>
    </section>
  );
};

/* ===================== Styles ===================== */
const styles = {
  section: {
    minHeight: "100vh",
    backgroundColor: "#0c0c0c",
    color: "#fff",
    padding: "100px 0",
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px",
    boxSizing: "border-box",
  },

  headerSection: {
    textAlign: "center",
    marginBottom: 40,
    transition: "all 0.6s ease",
  },
  titleContainer: { display: "flex", alignItems: "center", justifyContent: "center", gap: 12 },
  zapIcon: { color: "#00d4ff" },
  mainTitle: {
    fontSize: 28,
    fontWeight: 800,
    margin: 0,
    background: "linear-gradient(135deg,#00d4ff,#5b21b6,#ff6b6b)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  titleUnderline: {
    width: 120,
    height: 4,
    background: "linear-gradient(90deg,#00d4ff,#5b21b6,#ff6b6b)",
    margin: "14px auto",
    borderRadius: 2,
  },
  subtitle: { color: "rgba(255,255,255,0.8)", fontWeight: 300, marginTop: 6 },

  // stats card at bottom
  statsCard: {
    background: "rgba(255,255,255,0.02)",
    borderRadius: 16,
    padding: "20px 24px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.05)",
    maxWidth: 900,
    margin: "40px auto 0",
  },
  statsGrid: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 20,
  },
  statBox: { textAlign: "center", minWidth: 100 },
  statNumber: { fontSize: 20, fontWeight: 800, color: "#00d4ff" },
  statLabel: { fontSize: 12, color: "rgba(255,255,255,0.7)" },
  divider: {
    width: 1,
    height: 40,
    background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)",
  },
  hrLine: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    margin: "18px 0",
  },
  bottomNote: {
    textAlign: "center",
    color: "#00d4ff",
    fontSize: 14,
    margin: 0,
  },

  // grid
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 24,
    alignItems: "start",
  },

  categoryCard: {
    borderRadius: 16,
    padding: 20,
    border: "1px solid rgba(255,255,255,0.03)",
    transition: "all 0.5s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    backdropFilter: "blur(6px)",
    overflow: "hidden",
  },

  categoryHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 14 },
  categoryIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTitle: { fontSize: 16, fontWeight: 700 },

  skillsList: { display: "flex", flexDirection: "column", gap: 12 },
  skillItem: {
    background: "rgba(255,255,255,0.02)",
    padding: 12,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.03)",
    transition: "all 0.35s ease",
  },

  skillHeader: { display: "flex", alignItems: "center", gap: 12, flexWrap: "nowrap" },
  skillIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  skillInfo: { flex: 1, minWidth: 0 },
  skillTopRow: { display: "flex", alignItems: "center", gap: 10 },
  skillName: { display: "inline-block", fontSize: 14, fontWeight: 600 },
  skillLevel: { fontSize: 13, fontWeight: 700 },

  skillDescription: { fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 6 },

  progressContainer: { marginTop: 10 },
  progressTrack: { width: "100%", height: 8, background: "rgba(255,255,255,0.06)", borderRadius: 8, overflow: "hidden" },
  progressBar: { height: "100%", width: "0%", transition: "width 900ms ease" },

  categorySummary: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 12 },
  summaryText: { color: "rgba(255,255,255,0.8)" },
};

export default Skills;
