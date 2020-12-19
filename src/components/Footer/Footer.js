import React from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={classes.Footer}>
      <div className={classes.Footer_upperCnt}>
        <div className={classes.Footer_upperLeftCnt}>
          <div className={classes.Footer_logo}>Parva</div>
          <div>abhijeet@getparva.com</div>
          <div>+91 83799131905</div>
        </div>

        <div className={classes.Footer_upperRightCnt}>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.getparva.android"
              target="_blank"
            >
              <img
                width="200"
                src="https://d1xktfy6yxb5m3.cloudfront.net/image/google-play-badge.png"
                alt="Google Play"
                class="xs-left"
              />
            </a>
          </div>
          <div className={classes.LinkTray}>
            <a
              href="https://www.linkedin.com/company/getparva/?originalSubdomain=in"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/getparva" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/getparva/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.Footer_lowerCnt}>
        <div className={classes.Footer_lowerLeftCnt}>
          CopyRight Parva &copy; {new Date().getFullYear()}
        </div>
        <div className={classes.Footer_lowerRightCnt}>Privacy Policy</div>
      </div>
    </div>
  );
}

export default Footer;
