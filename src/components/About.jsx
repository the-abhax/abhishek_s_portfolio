function About() {
  const skills = [
    { title: "AI & ML", tags: ["Python", "TensorFlow", "PyTorch"], icon: "🧠" },
    { title: "Frontend", tags: ["React", "Three.js", "Tailwind"], icon: "🎨" },
    { title: "Backend", tags: ["Node.js", "Express", "MongoDB"], icon: "⚙️" },
    { title: "Tools", tags: ["Git", "Linux", "Docker"], icon: "🛠️" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-image">
          <div className="about-img-wrap">
            <img src="/img1.jpeg" alt="Abhishek S" />
            <div className="about-img-glow" />
          </div>
        </div>

        <div className="about-info">
          <span className="about-tag">ABOUT ME</span>

          <h2>
            Building intelligent software, AI-powered applications,
            and modern digital experiences.
          </h2>

          <p>
            I am Abhishek S, a Computer Science Engineering student passionate
            about Artificial Intelligence, Machine Learning, Full Stack Development,
            and modern software engineering.
          </p>

          <p>
            My focus is on building intelligent systems, scalable web applications,
            and innovative digital products that solve real-world problems through
            technology and thoughtful design.
          </p>

          <div className="skills-grid">
            {skills.map((s) => (
              <div className="skill-card" key={s.title}>
                <span className="skill-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
