import React, { useState } from "react"; 
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import recipe from './assets/recipe.jpg';
import tracker from './assets/tracker.png';
import smartcv from './assets/smartcv.png';
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <h1>Tshenolo Kabikwa</h1><br />
            <p className="subtitle">FullStack Developer</p><br />
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Navigation */}
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* About */}
        <section id="about">
          <h2>About Me</h2>
          <p>
           Full Stack Developer with experience building responsive and scalable web applications using React,
           JavaScript, HTML5, CSS3, Node.js, Express, and MongoDB. I have hands-on experience developing
           real-world projects, including AI-integrated applications and API-based systems. Open to collaborating
           with global teams on impactful digital products.
          </p>
        </section>

{/* Skills */}
<section id="skills">
  <h2>Skills</h2>

  <div className="skills-grid">

    {/* Frontend */}
    <div className="skills-column">
      <h3>Frontend</h3>
      <span className="skill-badge">React.js</span>
      <span className="skill-badge">JavaScript (ES6+)</span>
      <span className="skill-badge">HTML5</span>
      <span className="skill-badge">CSS3</span>
      <span className="skill-badge">Responsive Design</span>
    </div>

    {/* Backend */}
    <div className="skills-column">
      <h3>Backend</h3>
      <span className="skill-badge">Node.js</span>
      <span className="skill-badge">Express.js</span>
      <span className="skill-badge">MongoDB</span>
      <span className="skill-badge">RESTful APIs</span>
    </div>

    {/* AI & Integration */}
    <div className="skills-column">
      <h3>AI Integrations & APIs</h3>
      <span className="skill-badge">Google Gemini API</span>
      <span className="skill-badge">OpenAI API</span>
      <span className="skill-badge">Hugging Face (BioGPT)</span>
    </div>

    {/* Tools */}
    <div className="skills-column">
      <h3>Tools & Development</h3>
      <span className="skill-badge">Git & GitHub</span>
      <span className="skill-badge">VS Code</span>
      <span className="skill-badge">Postman</span>
    </div>

    {/* Deployment */}
    <div className="skills-column">
      <h3>Deployment & Hosting</h3>
      <span className="skill-badge">Netlify</span>
      <span className="skill-badge">Vercel</span>
      <span className="skill-badge">GitHub Pages</span>
      <span className="skill-badge">Railway</span>
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
              <p>A React habit tracker that helps users build daily routines and track their progress with a visual progress bar.</p>
            </div>
            <div className="project-card">
              <img src={recipe} alt="Recipe Finder" className="project-image" />
              <h3>Recipe Finder</h3>
              <a href="https://recipe-finder-tkdev.netlify.app/" target="_blank" rel="noreferrer" className="btn">View</a>
              <p>A React web app that uses a recipe API to help users discover recipes based on ingredients and meal types.</p>
            </div>
            <div className="project-card">
              <img src={smartcv} alt="SmartCV" className="project-image" />
              <h3>SmartCV</h3>
              <a href="https://smart-cv-ashen.vercel.app/" target="_blank" rel="noreferrer" className="btn">View</a>
              <p>A full-stack AI resume analyzer that uses Google Gemini to evaluate CVs and suggest improvements.</p>
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
