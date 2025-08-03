import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import recipe from './assets/recipe.jpg';
import tracker from './assets/tracker.png';
import property from './assets/property.jpg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Tshenolo Kabikwa</h1>
        <p className="subtitle">Frontend Developer</p>
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
        <section id="about">
          <h2>About Me</h2>
          <p>I am a Frontend Developer passionate about building clean, responsive, user-friendly websites and web apps. I have worked with React • JavaScript • HTML5 • CSS3 on personal and internship projects, and I am always learning
            new tools to improve my skills. I enjoy creating clean, modern web designs that work well accross devices.</p>
        </section>

        <section id="skills">
  <h2>Skills</h2>
  <div class="skills-grid">
    <div class="skills-category">
      <h3>Frontend</h3>
      <div class="skills-list">
        <span class="skill-badge">React</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">HTML5</span>
        <span class="skill-badge">CSS3</span>
        <span class="skill-badge">Responsive Design</span>
      </div>
    </div>

    <div class="skills-category">
      <h3>Tools</h3>
      <div class="skills-list">
        <span class="skill-badge">VS Code</span>
        <span class="skill-badge">Git</span>
        <span class="skill-badge">GitHub</span>
        <span class="skill-badge">Vite</span>
      </div>
    </div>

    <div class="skills-category">
      <h3>APIs</h3>
      <div class="skills-list">
        <span class="skill-badge">REST APIs</span>
        <span class="skill-badge">JSON</span>
      </div>
    </div>

    <div class="skills-category">
      <h3>Deployment</h3>
      <div class="skills-list">
        <span class="skill-badge">Netlify</span>
        <span class="skill-badge">GitHub Pages</span>
      </div>
    </div>
  </div>
</section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <img src={tracker} alt="Tracker Screenshot" className="project-image" />
              <h3>TrackiFy App</h3>
              <p>A responsive habit tracker built with React for adding, completing, and deleting daily habits. Features localStorage, a progress bar and a clean,
              mobile-friendly UI.</p>
              <a href="https://trackifyapp.netlify.app/" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <img src={recipe} alt="Recipe App Screenshot" className="project-image" />
              <h3>Recipe Finder</h3>
              <p>A recipe discovery app where users will browse, search, and save favorite recipes with a
                clean React UI.</p>
              <a href="https://recipe-finder-tkdev.netlify.app/" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <img src={property} alt="Property Screenshot" className="project-image" />
              <h3>Property Rental Finder</h3>
              <p>A rental finder app where users will search, filter, and explore rentals globally with responsive layouts and real-time listings. (Coming Soon...)</p>
              <a href="https://coming-soon-tk.netlify.app/" target="_blank" rel="noreferrer" className="btn">View Project</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact Me</h2>
          <p>Have a role or project in mind? Reach out - I'd love to hear from you!</p>
          <div className="social-icons">
            <a href="https://github.com/tshenoloKab" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/tshenolo-kabikwa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i></a>
          </div>
        </section>
</main>

      <footer className="footer">
        <p>© 2025 Tshenolo Kabikwa</p>
      </footer>
    </div>
  );
}

export default App;
