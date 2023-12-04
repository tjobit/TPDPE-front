import React, { CSSProperties } from "react";
import MapPin from "../assets/img/MapPin.svg";
import Elipses from "../assets/img/Elipses.svg";
import { Colors } from "../assets/colors";
import { Link } from "react-router-dom";

const styles = {
  rightContainer: {
    position: "absolute",
    top: "0",
    right: "0",
  },
  textContainer: {
    zIndex: 1,
    position: "absolute",
    top: "45%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "400px",
  },
  title: {
    fontSize: "100px",
    fontWeight: "bold",
    color: Colors.darkBlue,
    textAlign: "right",
    marginBottom: "20px",
  },
  description: {
    fontSize: "40px",
    fontWeight: "bold",
    color: Colors.greyBlue,
    textAlign: "right",
    width: "400px",
  },
  btn: {
    backgroundColor: Colors.darkBlue,
    padding: "20px 30px",
    marginTop: "80px",
    cursor: "pointer",
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "30px",
  },
};

function Landing() {
  return (
    <div>
      <img src={MapPin} alt="Map" />
      <div style={styles.rightContainer as CSSProperties}>
        <img src={Elipses} alt="Elipses" />
        <div style={styles.textContainer as CSSProperties}>
          <div style={styles.title as CSSProperties}>Address Finder</div>
          <div style={styles.description as CSSProperties}>
            You bring us house informations, we give you the exact location{" "}
          </div>
          <div style={styles.btn}><Link style={{textDecoration: "none", color: "white"}} to={"/login"}>See what we can do</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
