import Page1 from "./pag1";
import Profile from "./profile";
import $ from 'jquery';
import Popper from 'popper.js';
import { useState } from "react";
import Page2 from "./page2";
import Page3 from "./page3";
const Nav =()=>{
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
return(
  <div className="nav_container">
  <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Home
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Certifications
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Projects
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        ><Page1/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <Page2/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Page3/>
        </div>
      </div>
</div>
);
};
export default Nav;