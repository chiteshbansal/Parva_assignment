import classes from "./InfoCard.module.css";
import React from "react";

function InfoCard(props) {
  return (
    <div className={classes.InfoCard}>
      <div className={classes.InfoCardInner}>
        <div className={classes.InfoCardFront}>
          <img
            // profile photo address is passed along with props
            // so its assigned to src
            src={props.ProfilePhoto}
            alt={props.name}
            width="300px"
            height="400px"
          />
        </div>
        <div className={classes.InfoCardBack}>
          <div className={classes.Name}>{props.name}</div>
          <div className={classes.InfoCard_Description}>{props.about}</div>
          <div className={classes.InfoCardBack_links}>
            <div>
              <i class="fab fa-linkedin"></i>
            </div>
            <div>
              <i class="fab fa-twitter"></i>
            </div>
            <div>
              <i class="far fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
