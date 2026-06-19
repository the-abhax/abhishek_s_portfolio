import { useEffect, useRef } from "react";

const NAV_ITEMS = [
  { icon: "👤", label: "About", href: "#about" },
  { icon: "🚀", label: "Projects", href: "#projects" },
  { icon: "📬", label: "Contact", href: "#contact" },
  { icon: "📄", label: "Resume", href: "./abhishek_s_resume.pdf", external: true },
];

function DesktopOS({ isOpen, onClose }) {
  const overlayRef = useRef();

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const handleNav = (item) => {
    onClose();
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      setTimeout(() => {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  };

  return (
    <div
      className="os-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="os-window">
        {/* Title bar */}
        <div className="os-titlebar">
          <div className="os-dots">
            <span className="dot red" onClick={onClose} />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="os-title">ABHI OS — v1.0</span>
          <span />
        </div>

        {/* Boot text */}
        <div className="os-body">
          <p className="os-boot-text">
            <span className="os-cyan">&gt;</span> Welcome, visitor. Select a destination.
          </p>

          <div className="os-icon-grid">
            {NAV_ITEMS.map((item) => (
              <button key={item.label} className="os-icon-btn" onClick={() => handleNav(item)}>
                <div className="os-icon-emoji">{item.icon}</div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <p className="os-hint">Press ESC or click outside to close</p>
        </div>
      </div>
    </div>
  );
}

export default DesktopOS;
