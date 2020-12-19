import React from "react";
import classes from "./NavigationBar.module.css";

function NavigationBar(props) {
  return (
    // NavigationBaar for desktop view 
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
      {/* HamburgerMenu for responsive desgin shown for small screens  */}
      <div className={classes.NavigationBar_hamburgerMenu}>
        <div className={classes.HamburgerIcon}>
          <i class="fas fa-bars"></i>
        </div>
        <div className={classes.NavigationBar_hamburgerMenu_DropDown}>
          <div className={classes.NavigationBar_hamburgerMenu_tab1}>
            <div className={classes.TabName}>
              About <i class="fas fa-arrow-right"></i>
            </div>

            <div
              className={classes.NavigationBar_hamburgerMenu_DropDown_content}
            >
              <div>Why Parva</div>
              <div>Team/Job</div>
              <div>Our Community</div>
            </div>
          </div>
          <div className={classes.NavigationBar_hamburgerMenu_tab2}>
            <div className={classes.TabName}>
              Community Organizers<i class="fas fa-arrow-right"></i>
            </div>
            <div
              className={classes.NavigationBar_hamburgerMenu_DropDown_content}
            >
              <div>Why you should monetize?</div>
              <div>Switch to Parva</div>
            </div>
          </div>
          <div className={classes.NavigationBar_hamburgerMenu_tab3}>FAQ</div>
          <div className={classes.NavigationBar_hamburgerMenu_tab4s}>
            <span className={classes.LoginBtn}>Login/SignUp</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
