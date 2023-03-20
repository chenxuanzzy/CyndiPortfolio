const Experience = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div>
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.period}</em>
            </p>
            <p>{education.description}</p>
          </div>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div className="work-area">
          <div key={work.company}>
            <div className="work-logo">
              <h3>{work.company}</h3>
              <img
                className="work-img"
                src={
                  "https://raw.githubusercontent.com/chenxuanzzy/CyndiPortfolio/main/public/" +
                  work.logo
                }
                alt={work.logo}
                width={100}
              />
            </div>

            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <ul className="work-description">
              <li>{work.description[0]}</li>
              <li>{work.description[1]}</li>
              <li>{work.description[2]}</li>
              <li>{work.description[3]}</li>
              <li>{work.description[4]}</li>
              <li>{work.description[5]}</li>
              <li>{work.description[6]}</li>
              <li>{work.description[7]}</li>
            </ul>
          </div>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }
  return (
    <section id="experience">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
