import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import recipe from './assets/recipe.jpg';
import tracker from './assets/tracker.png';
import property from './assets/property.jpg';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Tshenolo Kabikwa</h1>
        <p className="subtitle">FullStack Developer</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">

        {/* About */}
        <section id="about">
          <h2>About Me</h2>
          <p>
            Full Stack Developer skilled in React • JavaScript • HTML5 • CSS3 • Node.js • Express • MongoDB, with
            hands-on experience building functional web applications and structured development projects. I am committed 
            to writing clean, reliable code while strengthening backend and cloud capabilities. Open to collaborating with 
            global teams and contributing to impactful digital products.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skills-column">
              <h3>Frontend</h3>
              <span className="skill-badge">React</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">HTML5</span>
              <span className="skill-badge">CSS3</span>
              <span className="skill-badge">Responsive Design</span>
            </div>
            <div className="skills-column">
              <h3>Backend & DB</h3>
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express</span>
              <span className="skill-badge">MongoDB</span>
            </div>
            <div className="skills-column">
              <h3>Tools & APIs</h3>
              <span className="skill-badge">Vs Code</span>
              <span className="skill-badge">GitHub</span>
              <span className="skill-badge">RestAPIs</span>
            </div>
            <div className="skills-column">
              <h3>Deployment</h3>
              <span className="skill-badge">Netlify</span>
              <span className="skill-badge">GitHub Pages</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <img src={tracker} alt="TrackiFy App" className="project-image" />
              <h3>TrackiFy App</h3>
              <a href="https://trackifyapp.netlify.app/" target="_blank" rel="noreferrer" className="btn">View</a>
            </div>
            <div className="project-card">
              <img src={recipe} alt="Recipe Finder" className="project-image" />
              <h3>Recipe Finder</h3>
              <a href="https://recipe-finder-tkdev.netlify.app/" target="_blank" rel="noreferrer" className="btn">View</a>
            </div>
            <div className="project-card">
              <img src={property} alt="Property Rental Finder" className="project-image" />
              <h3>Property Rental Finder</h3>
              <a href="https://coming-soon-tk.netlify.app/" target="_blank" rel="noreferrer" className="btn">View</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Have a role or project in mind? Reach out - I'd love to hear from you!</p>
          <div className="social-icons">
            <a href="https://github.com/tshenoloKab" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tshenolo-kabikwa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Tshenolo Kabikwa</p>
      </footer>
    </div>
  );
}

export default App;
