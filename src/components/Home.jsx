function Home() {
  return (
    <section id="home">
      <div className="main-container home-page">

        <div className="image">
          <img src="/profile_photo.png" alt="Keerthika" />
        </div>

        <div className="content">

          <h1>
            Hi, I'm
            <br />
            <span>Keerthika</span>
          </h1>

          <h2 className="role-title">
            Future UI/UX Designer &bull;
            <br className="mobile-break" />
            Frontend Developer
          </h2>

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

      </div>
    </section>
  );
}

export default Home;