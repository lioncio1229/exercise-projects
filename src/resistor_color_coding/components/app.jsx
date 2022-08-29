import React, { useState } from "react";
import "../style.css";
import { ColorCodingProvider } from "../context/color_coding_provider";
import useViewportAnimation from "../hooks/useViewportAnimations";
import NavBar from "./navbar";
import Resistor from "./resistor";
import Output from "./output";
import ColorCodesImage from "../images/resistor_colorcodes.jpg";

const App = () => {
  const [bandType, setBandType] = useState("bands4");
  const { view, setView, getAnimationClass } = useViewportAnimation();

  return (
    <>
      <NavBar
        bandType={bandType}
        setBandType={setBandType}
        view={view}
        setView={setView}
      />

      <ColorCodingProvider band={bandType}>
        <div className="flex-container-column">

          <div className="viewport">
            <div className={"content " + getAnimationClass()}>
              <div className="main">
                <Resistor />
                <Output />
              </div>
              <img src={ColorCodesImage} alt="" />
            </div>
          </div>

          <div className="footer primary">
            <b>Resistor Color Coding created</b> by Lioncio Morcilla
          </div>
        </div>
      </ColorCodingProvider>
    </>
  );
};

export { App };


// import React, { useState } from "react";
// import "../style.css";
// import { ColorCodingProvider } from "../context/color_coding_provider";
// import useViewportAnimation from "../hooks/useViewportAnimations";
// import NavBar from "./navbar";
// import Resistor from "./resistor";
// import Output from "./output";
// import ColorCodesImage from "../images/resistor_colorcodes.jpg";

// const App = () => {
//   const [bandType, setBandType] = useState("bands4");
//   const { view, setView, getAnimationClass } = useViewportAnimation();

//   return (
//     <>
//       <NavBar
//         bandType={bandType}
//         setBandType={setBandType}
//         view={view}
//         setView={setView}
//       />

//       <ColorCodingProvider band={bandType}>
//         <div className="flex-container-column">

//           <div className="viewport">
//             <div className={"content " + getAnimationClass()}>
//               <div className="main">
//                 <Resistor />
//                 <Output />
//               </div>
//               <img src={ColorCodesImage} alt="" />
//             </div>
//           </div>

//           <div className="footer primary">
//             <b>Resistor Color Coding created</b> by Lioncio Morcilla
//           </div>
//         </div>
//       </ColorCodingProvider>
//     </>
//   );
// };

// export { App };
