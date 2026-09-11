function Skills() {
  return (
    <section id="skills">
      <div className="main-container skills-page">

        <div className="content">
          <h1>
            My <span>Skills</span>
          </h1>

          <div className="skills-grid">

            <div className="skills-group">
              <h2>Technical Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Basic JavaScript</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>

            <div className="skills-group">
              <h2>UI/UX & Design</h2>
              <ul>
                <li>Figma (UI design & wireframing)</li>
                <li>Wireframing & basic prototyping</li>
                <li>Layout design & color selection</li>
                <li>User-friendly design principles</li>
              </ul>
            </div>

            <div className="skills-group">
              <h2>Tools</h2>
              <ul>
                <li>Figma</li>
                <li>VS Code</li>
                <li>GitHub</li>
              </ul>
            </div>

            <div className="skills-group">
              <h2>Soft Skills</h2>
              <ul>
                <li>Quick learner</li>
                <li>Attention to detail</li>
                <li>Team collaboration</li>
                <li>Willingness to learn</li>
              </ul>
            </div>

          </div>

          <div className="social-links">
            <a
              href="https://github.com/keerthi0201"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/keerthika0201"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>

        </div>

        <div className="image">
          <img src="/profile_photo.png" alt="Keerthika" />
        </div>

      </div>
    </section>
  );
}

export default Skills;