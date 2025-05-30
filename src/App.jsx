import React, { useState } from "react";
import "./App.css";
import ProjectGallery from "./ProjectGallery";
import ContactForm from "./ContactForm";
import FooterLinks from "./FooterLinks";

const keycapChars = [
  "A", "S", "D", "F", "J", "K", "L", ";",
  "Q", "W", "E", "R", "T", "Y", "U", "I",
  "Z", "X", "C", "V", "B", "N", "M", "⌘",
  "⇧", "⎇", "⎋", "⏎", "⌫", "␣"
];

function App() {
  // Dark mode is enabled by default!
  const [darkMode, setDarkMode] = useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 30) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const shuffledKeys = React.useMemo(() => {
    const arr = [...keycapChars];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Animated background keycaps */}
      <div className="bg-bubbles">
        {shuffledKeys.slice(0, 16).map((char, i) => (
          <div className={`keycap keycap-${i + 1}`} key={i}>{char}</div>
        ))}
      </div>

      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <span>&lt;Harith_D_Rajapaksha/&gt;</span>
        </div>
        <ul className="nav-links">
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode((v) => !v)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </nav>

      <header className="hero-section" id="home">
        <div className="hero-glass">
          <img
            className="hero-photo"
            src="1.jpg"
            alt="Devinda Rajapaksha"
          />
          <div className="hero-intro">
            <h1>
              Hi, I'm <span className="accent">Devinda</span>
            </h1>
            <p className="hero-role">Web Developer & UI Enthusiast</p>
            <p className="hero-desc">
              Building <span className="accent">delightful</span>, <span className="accent">interactive</span> web experiences.
            </p>
            <button
              className="hero-cta"
              onClick={() => scrollToSection("projects")}
            >
              🚀 See My Work
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="about-section glass-section" id="about">
          <h2>About Me</h2>
          <p>
            I'm <b>Devinda Rajapaksha</b>, a web developer with a flair for visually stunning interfaces and smooth user experiences. I love working with React, animations, and creative CSS to bring ideas to life.
          </p>
          <br></br>
          <p>
            As a forward-thinking web developer and researcher, I thrive at the intersection of innovation and execution. With a passion for clean code, elegant design, and impactful digital experiences, I specialize in crafting responsive, performance-driven web applications that solve real-world problems. Whether I'm architecting scalable backend systems or fine-tuning interactive user interfaces, I bring a detail-oriented mindset and a relentless drive for excellence. I'm not just building websites—I'm engineering digital ecosystems that empower users, inspire engagement, and push boundaries. Let's build the future, one line of code at a time.
          </p>
          <br></br>
          <p>
            When I'm not coding, I enjoy photography and exploring new tech. Let's make something <span className="accent">amazing</span> together!
          </p>
        </section>

        <section className="projects-section glass-section" id="projects">
          <h2>Projects</h2>
          <ProjectGallery />
        </section>

        <div>
        <section className="contact-section glass-section" id="contact">
          <ContactForm />
        </section>
        </div>
      </main>

      <footer>
        <FooterLinks />
        <p>
          &copy; {new Date().getFullYear()} Devinda Rajapaksha
        </p>
      </footer>
    </div>
  );
}

export default App;