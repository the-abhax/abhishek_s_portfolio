function Projects() {
  const gridProjects = [
    {
      img: "/img2.jpeg",
      title: "Notes App",
      desc: "Full-stack notes application with modern UI, authentication and productivity-focused workflow.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/the-abhax/notes_app",
      live: "https://notes-app-peach-beta.vercel.app/",
    },
    {
      img: "/img3.jpeg",
      title: "YouTube Clone",
      desc: "Responsive YouTube-inspired platform built with modern frontend technologies and clean UX.",
      tags: ["React", "API", "CSS"],
      github: "https://github.com/the-abhax/ytclone",
      live: "https://the-abhax.github.io/ytclone/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <span className="projects-tag">PROJECTS</span>
      <h2>Featured Projects</h2>

      {/* FEATURED */}
      <div className="featured-project">
        <span className="featured-label">★ FEATURED PROJECT</span>
        <h3>AI Video Assistant</h3>
        <p>
          AI-powered meeting intelligence platform capable of transcribing,
          summarizing and interacting with video content using intelligent AI workflows.
        </p>
        <div className="featured-tags">
          {["Python", "LangChain", "Whisper", "FastAPI"].map((t) => (
            <span key={t} className="feat-tag">{t}</span>
          ))}
        </div>
        <video
          src="/vid1.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="featured-video"
        />
        <div className="project-links">
          <a href="https://github.com/the-abhax/ai_video_assistant" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>

      {/* GRID */}
      <div className="projects-grid">
        {gridProjects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-img-wrap">
              <img src={p.img} alt={p.title} />
              <div className="project-img-overlay">
                <div className="project-links overlay-links">
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live Demo</a>}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
