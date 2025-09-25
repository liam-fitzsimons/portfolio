import './Navbar.css'
function Navbar({ refs }) {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">Liam's Portfolio Site</div>
      <ul className="navbar-links">
        <li><button onClick={() => scrollTo(refs.homeRef)}>Home</button></li>
        <li><button onClick={() => scrollTo(refs.projectsRef)}>Projects</button></li>
        <li><button onClick={() => scrollTo(refs.aboutRef)}>About</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;