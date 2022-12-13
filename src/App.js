import React from "react";
import Navbar from "./Layout/Navbar";
import Aboutme from "./page/Aboutme";
import Skill from "./page/Skill";
import Archiving from "./page/Archiving";
import Projects from "./page/Projects";
import Career from "./page/Career";
import "./App.scss";

const App = () => {
  return (
    <div>
      <div className="Layout">
        <div className="LayoutMain">
          <Navbar />
        </div>
        <div className="Layoutcomponents">
          <div id="a">
            <Aboutme />
          </div>
          <div id="b">
            <Skill />
          </div>
          <div id="c">
            <Archiving />
          </div>
          <div id="d">
            <Projects />
          </div>
          <div id="e">
            <Career />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
