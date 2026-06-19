import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/the-abhax" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-s-abhax180" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/abhishekkh.s?igsh=MTUzcGxqc3pjb2MzcQ==" },
  { icon: <FaEnvelope />, label: "Email", href: "mailto:theabhax@gmail.com" },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <span className="contact-tag">CONTACT</span>
      <h2>Let's Connect</h2>
      <p className="contact-subtitle">
        Have an idea, project, or opportunity? Feel free to reach out.
      </p>

      <div className="social-grid">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-card">
            {s.icon}
            <span>{s.label}</span>
          </a>
        ))}
      </div>

      <form
        className="contact-form"
        action="mailto:theabhax@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <textarea rows="6" placeholder="Your Message" required />
        <button type="submit">Send Message →</button>
      </form>

      <div className="copyright">© 2026 Abhishek S. All Rights Reserved.</div>
    </section>
  );
}

export default Contact;
