import "./index.css";
import { EXPERIENCES } from "./data/experience";
import { PATENTS } from "./data/patents";
import ExperienceItem from "./components/ExperienceItem";
import PatentItem from "./components/PatentItem";

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

      <main className="container grid" id="home">
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
              <img src="/linkedin.png" alt="LinkedIn" className="social-icon" /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/glimapaz" target="_blank" rel="noreferrer">
              <img src="/github.png" alt="GitHub" className="social-icon" /> <span>GitHub</span>
            </a>
            <a href="mailto:gabriel@yourdomain.com">
              <img src="/email.png" alt="Email" className="social-icon" /> <span>Email</span>
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

          <h2 className="h2" id="patents" style={{ marginTop: 28 }}>Patents</h2>
          <div className="patent-list">
            {PATENTS.map((p) => (
              <PatentItem key={p.id} item={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
