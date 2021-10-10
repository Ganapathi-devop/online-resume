import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sample2 from "./sample2";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showdata: "",
      postVal: "",
      about: false,
      resume: false,
    };
  }

  fadeInSample2 = (event) => {
    
    let name = event.target.name;
    this.setState( { [name] : true} );

  };

  render() {
    return (
      <div className="bg-div">
        <div className="whitish">
          <div className="left-div">
            <h1>Ganapathi.A.S</h1>
            <p>
              I'm a passionate <strong id="profession">Web designer</strong>{" "}
              from Chennai!!
            </p>
            <ul className="list-btn">
              <li>
                <a className="links">Home</a>
              </li>
              <li>
                <a id="about-link" className="links" name="about" onClick={this.fadeInSample2}>
                  About
                </a>
              </li>
              <li>
                <a name="resume" id="resume-link" className="links" onClick={this.fadeInSample2}>Resume</a>
              </li>
              <li>
                <a className="links" >Services</a>
              </li>
              <li>
                <a className="links">Portfolio</a>
              </li>
              <li>
                <a className="links">Contact</a>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <a href="#">Instagram</a>
                <a href="#">Tweeter</a>
                <a href="#">Facebook</a>
                <a href="#">Linkedin</a>
              </li>
            </ul>
          </div>
          <div
            className="right-div">

              <div className="content">

                <div className={ `content-about ${ (this.state.about === true) ? 'div-active' : 'div-inactive' }` }>
                  <Sample2 />
                </div>
              
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
