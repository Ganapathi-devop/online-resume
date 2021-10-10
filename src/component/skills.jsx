import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdata: "",
      postVal: "",
    };
  }

  render() {
    return (
      <div className="skill-container">
        <h4 id="about-title">Skills</h4>

        <div className="skills-left">
          <div className="name-percent">
          <p className="skill-name">html</p> <p className="skill-percent">95%</p>
          </div>
          <div className="container">
            <div className="skills html"></div>
          </div>

          <div className="name-percent">
          <p className="skill-name">css</p> <p className="skill-percent">85%</p>
          </div>
          <div className="container">
            <div className="skills css"></div>
          </div>

          <div className="name-percent">
            <p className="skill-name">javascript</p> <p className="skill-percent">65%</p>
          </div>
          <div className="container">
            <div className="skills javascript"></div>
          </div>
        </div>

        <div className="skills-right">

          <div className="name-percent">
            <p className="skill-name">php</p> <p className="skill-percent">60%</p>
          </div>
          <div className="container">
            <div className="skills php"></div>
          </div>

          <div className="name-percent">
            <p className="skill-name">react</p> <p className="skill-percent">20%</p>
          </div>
          <div className="container">
            <div className="skills react"></div>
          </div>

          <div className="name-percent">
            <p className="skill-name">Photoshop</p> <p className="skill-percent">45%</p>
          </div>
          <div className="container">
            <div className="skills photoshop"></div>
          </div>

        </div>
      </div>
    );
  }
}

export default Skills;
