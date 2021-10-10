import React from "react";
import Sample1 from "./component/sample1";
import ReactDOM from "react-dom";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Sample1 />
      </div>
    );
  }
}

export default App;
