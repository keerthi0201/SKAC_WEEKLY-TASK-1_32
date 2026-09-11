function Navbar() {
  return (
    <nav>
      <div className="nav-container">

        <div className="logo">
          <span>Keerthika</span>
        </div>

        <div className="links">
          <div><a href="#home">Home</a></div>
          <div><a href="#about">About</a></div>
          <div><a href="#skills">Skills</a></div>
          <div><a href="#projects">Projects</a></div>

          <div className="contact-btn">
            <a href="#contact">Contact Me</a>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;