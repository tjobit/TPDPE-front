import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../assets/colors";
import home from "../assets/img/home.svg";
import account from "../assets/img/account.svg";
import disconnect from "../assets/img/disconnect.svg";

const styles = {
  container: {
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.darkBlue,
    color: "white",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: Colors.lightBlue
  },
};

function Header() {
  return (
    <div style={styles.container}>
      <Link to="/searchMap"><img src={home} alt="home"/></Link>
      <div style={styles.title}>
        Address Finder
      </div>
      <Link to=""><img src={account} alt="account"/></Link>
      <Link to="/login"><img src={disconnect} alt="disconnect"/></Link>
    </div>
  );
}

export default Header;
