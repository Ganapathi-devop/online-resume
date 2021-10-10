import React from "react";
import Skills from "./skills"

class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      email: "",
      skills: false,
      bio: true,
    };
  }
  skillFadeIn = (event) => {
    this.setState ( { skills: true } );
    this.setState ( { bio: false } );
  };
  bioFadeIN = (event) => {
    this.setState ( { skills: false } );
    this.setState ( { bio: true } );
  };
  render() {
    return (
      <div className="about">
        <a className={ ` about-sec-nav ${ (this.state.bio ===  true) ? 'link-active' : 'link-inactive' } ` } name="bio" onClick={this.bioFadeIN} id="bio-link">Bio</a>
        <a className={ ` about-sec-nav ${ (this.state.skills ===  true) ? 'link-active' : 'link-inactive' } ` } name="skills" onClick={this.skillFadeIn} id="skill-link">Skills</a>

        <div className={ `bio-data ${ (this.state.bio === true) ? 'div-active' : 'div-inactive' } ` }>
          <h4 id="about-title">Web Desinger</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="about-ul1">
            <li>Birthday: 18-9-21</li>
            <li>Website: www.example.com</li>
            <li>Phone: +91 9884535751</li>
            <li>City: Chennai, India</li>
          </ul>

          <ul className="about-ul2">
            <li>Age: 18</li>
            <li>Degree: Bachelor</li>
            <li>Email: Ganapathy1red1@gmail.com</li>
            <li>Freelance: Available</li>
          </ul>
        </div>
        <div className={ `about-skill ${ (this.state.skills === true) ? 'div-active' : 'div-inactive' } ` }>
          <Skills />
        </div>

      </div>
    );
  }
}

export default Sample2;
