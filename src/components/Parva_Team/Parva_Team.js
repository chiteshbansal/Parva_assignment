import classes from "./Parva_Team.module.css";
import React from "react";

function Parva_Team(props) {
  return (
    <div className={classes.Team}>
      <div className={classes.Team_TextBox}>
        <div className={classes.Team_TextBox_heading_main}>PARVA</div>
        <div className={classes.Team_TextBox_content}>
          <div>
            We at Parva are going to build the biggest Indian media-tech company
            which <br></br>caters to empowering community entrepreneurs.
          </div>
          <div>
            Team Parva is a cacophony of diverse humans with vibrant
            personalities, who are<br/> based all across the globe.
          </div>
        </div>
      </div>
      <div>
          <div>Our Team</div>
          <div>Our Advisors </div>
      </div>
    </div>
  );
}

export default Parva_Team;
