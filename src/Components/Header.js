import { Typewriter } from "react-simple-typewriter";
const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var description = data.description;
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
            <Typewriter
              words={[
                "Cindy = Positive + Lovely",
                "Web = JavaScript(Vue || React) + Html + CSS",
                "As well use some SQL、Python",
                "Coding, Writing, Learning, Jogging",
                "Love Hiking & Workout",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h3>{description}.</h3>
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
