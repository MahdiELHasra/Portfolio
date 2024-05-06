// import React, { useContext, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import "./LanguageSwitch.scss";
// import { store } from "../../App";
// import playAudio from "../../utils/helpers/playAudio";

// export default function LanguageSwitch() {
//   const [state, dispatch] = useContext(store);
//   const [time, setTime] = useState(new Date().valueOf());
//   const [renderAmount, setRenderAmount] = useState(0);

//   useEffect(() => {
//     const language = localStorage.getItem("language");
//     if (language !== null && language !== undefined) {
//       dispatch({
//         type: "language/INIT",
//         payload: language,
//       });
//     }
//   }, []);

//   // useEffect(() => {
//   //   setRenderAmount(renderAmount + 1);
//   // }, [state.language]);

//   useEffect(() => {
//     const loadedSeconds = new Date().valueOf() - time;
//     if (loadedSeconds < 300) {
//       return;
//     }
//     localStorage.setItem("language", state.language);
//     window.location.reload();
//   }, []);

//   const switchLanguage = (e: React.MouseEvent) => {
//     dispatch({
//       type: "language/SET",
//     });
//   };

//   return (
//     <motion.button
//       className={`btn-language ${
//         state.darkmode ? "dark-language-button" : "light-language-button"
//       }`}
//       initial={{ y: 150 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", duration: 0.5 }}
//       onClick={switchLanguage}
//       onMouseDown={playAudio}
//       onMouseUp={playAudio}
//     >
//       <img src={`/assets/images/${state.language}.png`} />
//       Translate to {state.language === "english" ? "English" : "German"}
//     </motion.button>
//   );
// }

import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import "./LanguageSwitch.scss";
import { store } from "../../App";
import playAudio from "../../utils/helpers/playAudio";

export default function LanguageSwitch() {
  const [state, dispatch] = useContext(store);

  useEffect(() => {
    // Initialize language from localStorage or default to "english"
    const language = localStorage.getItem("language") || "english";
    dispatch({
      type: "language/INIT",
      payload: language,
    });
  }, [dispatch]);

  useEffect(() => {
    // Persist language change to localStorage
    localStorage.setItem("language", state.language);
  }, [state.language]);

  const switchLanguage = (e) => {
    dispatch({
      type: "language/SET",
      payload: state.language === "english" ? "german" : "english",
    });
  };

  return (
    <motion.button
      className={`btn-language ${
        state.darkmode ? "dark-language-button" : "light-language-button"
      }`}
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      onClick={switchLanguage}
      onMouseDown={playAudio}
      onMouseUp={playAudio}
    >
      <img
        src={`/assets/images/${state.language}.png`}
        alt={`${state.language} flag`}
      />
      Translate to {state.language === "english" ? "English" : "German"}
    </motion.button>
  );
}
