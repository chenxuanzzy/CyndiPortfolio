// import { Typewriter } from "react-simple-typewriter";
const Header = ({ data }) => {
  if (data) {
    // var name = data.name;
    // var occupation = data.occupation;
    // var description = data.description;
    // var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#project">
              Project
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {/* <Typewriter typing={0.5}>{name ? `I'm ${name}.` : null}</Typewriter> */}
          </h1>
          {/* <h3>
            Based in {city}. <span>{occupation}</span>. {description}.
          </h3> */}
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
