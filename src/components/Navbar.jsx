import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <a className="nav-logo" href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="nav-logo-bracket">&lt;</span>
          ABHISHEK
          <span className="nav-logo-bracket">/&gt;</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <button key={l.label} className="nav-link" onClick={() => scrollTo(l.href)}>
              {l.label}
            </button>
          ))}
          <a
            href="/abhishek_s_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume ↗
          </a>
        </div>

        <button className="nav-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
          <span className={menuOpen ? "open" : ""} />
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-mobile">
          {links.map((l) => (
            <button key={l.label} onClick={() => scrollTo(l.href)}>{l.label}</button>
          ))}
          <a href="/abhishek_s_resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            Resume ↗
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
