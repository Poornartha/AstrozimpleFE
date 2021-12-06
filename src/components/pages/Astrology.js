import React from "react";
import "../../App.css";
import "../Banner.css";
import logoA from "./AstrologyBanner.jpeg";

import { Link } from "react-router-dom";

const styles = {
  header: {
    backgroundImage: `url(${logoA})`,
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
        <h1 className="font-link">Astrology</h1>
      </div>
    </div>
  );
}

export default Banner;
