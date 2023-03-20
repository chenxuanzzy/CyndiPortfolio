const Project = ({}) => {
  return (
    <section id="project">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Project.</h1>
          <div className="card-area">
            <div className="card">
              <div className="card__copy">
                <div>
                  <span className="card-title">ASUS</span>
                  <h1>C payment</h1>
                </div>
                <div>
                  <ul className="card-detail">
                    <li className="card-li">
                      Every component needs a cost report, we call this payment.
                      Other teams will give our team that price and can maintain
                      the component's price and number in the warehouse. Our
                      team developed an internal system for another team can
                      usefully upload the report, and fast know the contract.
                      <br />
                    </li>
                    <li>Skill : Vue2, BoostrapVue, Element UI.</li>
                  </ul>
                </div>
              </div>
              <div className="view-btn-area">
                <a
                  href="https://codepen.io/chenxuanzzy/full/VwWGVmK"
                  target="_blank"
                  className="view-btn-y"
                ></a>
              </div>
            </div>
            <div className="card">
              <div className="card__copy">
                <span className="card-title">IDEA INTERNET INFORMATION</span>
                <h1>NCS - Monitor Dashboard</h1>
                <ul className="card-detail">
                  <li className="card-li">
                    According to company's Figma, make a data monitor. Some of
                    the single numbers will be updated every minute when the
                    page reloads and shows up a new number. Every card can click
                    and go to the dashboard page. You can check the warning time
                    and watch the data graph.
                    <br />
                  </li>
                  <li>Skill : Vue2, Element UI, Boostrap. </li>
                  <span className="card-warning">
                    The demo is imitating page, the data is NOT REAL.
                  </span>
                </ul>
              </div>
              <div className="view-btn-area">
                <a
                  href="https://chenxuanzzy.github.io/ncs-dashboard/#/"
                  target="_blank"
                  className="view-btn-y"
                >
                  &#062;&#062; view
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card__copy">
                <span className="card-title">IDEA INTERNET INFORMATION</span>
                <h1>Login Record Data Table</h1>
                <ul className="card-detail">
                  <li className="card-li">
                    Connecting internal DB, every account log in the internal
                    system will record on the table. If you log in too many
                    times that will alert a warning to you. <br />
                  </li>
                  <li>Skill : Vue2, Element UI, Boostrap. </li>
                  <span className="card-warning">
                    The demo is imitating page, the data is NOT REAL.
                  </span>
                </ul>
              </div>
              <div className="view-btn-area">
                <a
                  href="https://codepen.io/chenxuanzzy/full/VwWGVmK"
                  target="_blank"
                  className="view-btn-y"
                >
                  &#062;&#062; view
                </a>
              </div>
            </div>
          </div>
          <div className="card-area">
            <div className="card">
              <div className="card__copy">
                <span className="card-title">Side project</span>
                <h1>Vue covid tracker dashboard</h1>
                <ul className="card-detail">
                  <li>
                    To create a dashboard using Vue.js 2 and Highcharts. Using
                    open API about Covid-19.
                  </li>
                  <li>Skill : Vue2, HighchVue</li>
                </ul>
              </div>
              <div className="view-btn-area">
                {/* <a
                  href="https://github.com/chenxuanzzy/vue-covid-tracker-dashboard"
                  target="_blank"
                  className="view-btn-y"
                >
                  &#062;&#062; view
                </a> */}
              </div>
            </div>
            <div className="card">
              <div className="card__copy">
                <span className="card-title">Side project</span>
                <h1>React Project</h1>
                <ul className="card-detail">
                  <li className="card-li">
                    I am building a variety of side projects to help me solidify
                    my knowledge. Some of the projects I am currently working on
                    include a tic tac toe game, a task tracker app, and a music
                    app. These projects allow me to practice using React's core
                    concepts, such as components and state, as well as explore
                    additional features like React Router and component
                    lifecycle methods.
                    <br />
                  </li>
                  <li>Skill : React </li>
                  <span className="card-warning"></span>
                </ul>
              </div>
              <div className="view-btn-area">
                <a
                  href="https://github.com/chenxuanzzy/React_side_project"
                  target="_blank"
                  className="view-btn-y"
                >
                  &#062;&#062; view
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card__copy">
                <span className="card-title">Side project</span>
                <h1>JavaScript 30 Day</h1>
                <ul className="card-detail">
                  <li className="card-li">
                    "JavaScript 30" is a free 30-day online coding challenge
                    created by Wes Bos, a web developer and teacher. The
                    challenge is designed to help people improve their
                    JavaScript coding skills by building 30 small projects over
                    the course of 30 days. <br />
                  </li>
                  <li>Skill : JavaScript, CSS </li>
                </ul>
              </div>
              <div className="view-btn-area">
                <a
                  href="https://github.com/chenxuanzzy/JavaScript-30"
                  target="_blank"
                  className="view-btn-y"
                >
                  &#062;&#062; view
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
