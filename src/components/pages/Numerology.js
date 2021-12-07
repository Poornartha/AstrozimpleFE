// import React from "react";
// import "../../App.css";
// import "../Banner.css";
// import logo from "./NumerologyBanner.jpg";

// import { Link } from "react-router-dom";

// const styles = {
//   header: {
//     backgroundImage: `url(${logo})`,
//     height: "100vh",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   },

//   content: {
//     height: "100%",
//     width: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.7)",
//     fontSize: "60px",
//   },
// };

// function Banner(props) {
//   return (
//     <div style={styles.header}>
//       <div style={styles.content}>
//         <h1 className="font-link">Numerology</h1>
//       </div>
//     </div>
//   );
// }

// export default Banner;

// import React from "react";
// import "../../App.css";
// import HeroSection from "../HeroSection";
// import Cards from "../Cards";

// function Home() {
//   return (
//     <>
//       <HeroSection />
//       <Cards />
//     </>
//   );
// }

// export default Home;

import React from "react";
import "../../App.css";
import "../Banner.css";
import "../HeroSection.css";

function Numerology(props) {
  return (
    <div className="hero-container">
      <video
        className="vid-bgN"
        // src="src/components/pages/NumerologyBackground.mp4"
        src="/videos/NumerologyBackground.mp4"
        autoPlay
        loop
        muted
      ></video>
      <h1 className="font-link">Numerology</h1>
    </div>
  );
}

export default Numerology;
