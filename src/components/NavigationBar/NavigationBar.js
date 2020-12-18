import React from "react";
import classes from "./NavigationBar.module.css";

function NavigationBar(props) {
  return (
    <div className={classes.NavigationBar}>
      <div className={classes.Logo}>PARVA</div>
      <div className={classes.NavigationBar_Tabs}>
        <div className={classes.NavigationBar_Tab}>
          <span>About</span>
          <i class="fas fa-caret-down"></i>
          <div className={classes.NavigationBar_DropDown_content}>
            <div>Why Parva</div>
            <div>Team/Job</div>
            <div>Our Community</div>
          </div>
        </div>
        <div className={classes.NavigationBar_Tab}>
          <span>Community Organizers</span>
          <i class="fas fa-caret-down"></i>
          <div className={classes.NavigationBar_DropDown_content}>
            <div>Why you should monetize?</div>
            <div>Switch to Parva</div>
          </div>
        </div>
        <span className={classes.NavigationBar_Tab}>FAQ</span>
        <span
          className={[classes.NavigationBar_Tab, classes.LoginBtn].join(" ")}
        >
          Login/SignUp
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;
