import "./index.css";
import { EXPERIENCES } from "./data/experience";
import ExperienceItem from "./components/ExperienceItem";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function App() {
  return (
    <div>
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">Gabriel Paz</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#blog">Blog</a>
          </nav>
        </div>
      </header>

      <main className="container grid">
        {/* LEFT */}
        <section className="left">
          <p className="intro">
            Hi! I'm a machine learning engineer passionate about{" "}
            robotics, computer vision, and gaming 🎮
          </p>

          <img
            className="avatar"
            src="https://placehold.co/600x600?text=Your+Photo"
            alt="Profile"
          />

          <div className="social">
            <a href="https://www.linkedin.com/in/gabrielrlp" target="_blank" rel="noreferrer">
              <FiLinkedin /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/glimapaz" target="_blank" rel="noreferrer">
              <FiGithub /> <span>GitHub</span>
            </a>
            <a href="mailto:gabriel@yourdomain.com">
              <FiMail /> <span>Email</span>
            </a>
          </div>
        </section>

        {/* RIGHT */}
        <section className="right">
          <h2 className="h2">Experience</h2>
          <div className="xp-list">
            {EXPERIENCES.map((e) => (
              <ExperienceItem key={e.id} item={e} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
