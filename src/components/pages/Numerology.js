import React from "react";
import "../../App.css";
import "../Banner.css";
import logo from "./NumerologyBanner.jpg";

import { Link } from "react-router-dom";

const styles = {
  header: {
    backgroundImage: `url(${logo})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    fontSize: "60px",
  },
};

function Banner(props) {
  return (
    <div style={styles.header}>
      <div style={styles.content}>
        <h1 className="font-link">Numerology</h1>
      </div>
    </div>
  );
}

export default Banner;
