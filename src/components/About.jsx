function About() {
  return (
    <section id="about">
      <div className="main-container about-page">

        <div className="content">
          <h1>
            About <span>Me</span>
          </h1>

          <p>
            Hi, I’m Keerthika, a Computer Science Engineering student who is
            passionate about UI/UX design and frontend development. I enjoy
            creating clean, simple, and user-friendly interfaces using HTML,
            CSS, and Figma.
          </p>

          <p>
            I love learning new technologies, improving my design skills, and
            building projects that combine creativity with logic. My goal is
            to become a professional UI/UX designer and frontend developer and
            work on meaningful digital products.
          </p>

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

export default About;