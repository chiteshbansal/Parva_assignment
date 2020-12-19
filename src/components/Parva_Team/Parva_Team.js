import classes from "./Parva_Team.module.css";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";
// Importing all profile photos
// Object which contains path to
// the photo of a particular contact
import ProfilePhotos from "../../ProfilePhotos";

class Parva_Team extends React.Component {
  constructor() {
    super();
    // state has two data fields
    // one with the team members
    // other is of advisors
    this.state = {
      team: [
        {
          name: "Abhijeet Katte",
          about:
            "Abhijeet founder and CEO of Parva, is a gifted data Scientist who led the development of one of India's fastest growing hackathon platforms MachineHack.com, and has worked on data science problems across domains.",
          ProfilePhoto: ProfilePhotos.Abhijeet,
        },
        {
          name: "Amal Nair",
          about:
            "Amal is a talented software engineer and a data scientist who was part of the development team of one of the leading ML hackathon platforms in India.",
          ProfilePhoto: ProfilePhotos.Amal,
        },

        {
          name: "Prajakta Hebbar",
          about:
            " Prajakta is a noted journalist with 10+ years of experience with news organisations like Huffpost India, CNN-IBN and The Indian Express.",
          ProfilePhoto: ProfilePhotos.PrajaktaHebbar,
        },
        {
          name: "Manali Sapate",
          about:
            " Manali is an IISc-trained scientist with an alternate career in space technology.",
          ProfilePhoto: ProfilePhotos.ManaliSapate,
        },
        {
          name: "Suvrat Joshi",
          about:
            "Suvrat is a National School Of Drama-trained actor who is the creative force behind one of India's best modern theatre plays.",
          ProfilePhoto: ProfilePhotos.SuvratJoshi,
        },
        {
          name: "Thirunarayan Simha",
          about:
            "Thirunarayan Simhan is a BBA marketing graduate with a diploma in digital marketing.",
          ProfilePhoto: ProfilePhotos.ThirunarayanSimha,
        },
        {
          name: "Rohan Nerlekar",
          about:
            "Rohan Nerlekar is an experienced founder with a demonstrated history of working in the consumer electronics industry. Skilled in Brand Management, Project Management, and Digital Marketing.",
          ProfilePhoto: ProfilePhotos.RohanNerlekar,
        },
      ],
      advisors: [
        {
          name: "Renjil T",
          about:
            "Renjil, Parva's co-founder helped launch 92.7 FM in India and headed large sales efforts for the India Today Group and The Indian Express.",
          ProfilePhoto: ProfilePhotos.RenjilT,
        },
        {
          name: "Pushkar Paranjpe",
          about:
            "Pushkar was previously an academic researcher in modern experimental biology. Extentive experience in the industry in applying data science principles to real world problems. Takes keen interest in startups, tech products and communities.",
          ProfilePhoto: ProfilePhotos.PushkarParanjpe,
        },
      ],
      showAdvisors: false,
    };
  }
  render() {
    // showAdvisors is use to toggle between advisors and other team members 
    // by default team members are shown 
    // when click on advisors showAdvisors becomes true 
    // and Advisors are shown 
    const { showAdvisors } = this.state;
    // team Members are fetched
    let teamMembers = this.state.team.map((member, index) => {
      return <InfoCard {...member} key={index} />;
    });
    // advisors are shown 
    if (showAdvisors) {
      teamMembers = this.state.advisors.map((member, index) => {
        return <InfoCard {...member} key={index} />;
      });
    }
    return (
      <div className={classes.Team}>
        <div className={classes.Team_TextBox}>
          <div className={classes.Team_TextBox_heading_main}>PARVA</div>
          <div className={classes.Team_TextBox_content}>
            <div>
              We at Parva are going to build the biggest Indian media-tech
              company which <br></br>caters to empowering community
              entrepreneurs.
            </div>
            <div>
              Team Parva is a cacophony of diverse humans with vibrant
              personalities, who are
              <br /> based all across the globe.
            </div>
          </div>
        </div>
        <div className={classes.Team_Switch}>
          <div
          // shows the current tab underlined 
            className={showAdvisors ? "" : classes.active}
            onClick={() => {
              this.setState({ showAdvisors: false });
            }}
          >
            Our Team
          </div>
          <div
          // shows the current tab underlined 
            className={!showAdvisors ? "" : classes.active}
            onClick={() => {
              this.setState({ showAdvisors: true });
            }}
          >
            Our Advisors
          </div>
          <div
          // underline the particular tab whether team or advisors 
          // on changing the tabs 
            className={showAdvisors ? classes.SliderRight : classes.SliderLeft}
          ></div>
        </div>
        <div className={classes.Team_CardContainer}>{teamMembers}</div>
      </div>
    );
  }
}

export default Parva_Team;
