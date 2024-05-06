import React, { useContext } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import playAudio from "../../utils/helpers/playAudio";

export default function Projects() {
  const [state, dispatch] = useContext(store);

  return (
    <div
      className={`projects-container ${
        state.darkmode ? "dark-bg-1" : "light-bg-1"
      }`}
    >
      <div className="anchor" id="portfolio" />
      <motion.h3
        className={`eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english" ? "Projekte" : "Projects"}
      </motion.h3>
      <motion.h1
        className={`heading ${
          state.darkmode ? "dark-heading" : "light-heading"
        }`}
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english"
          ? "Eine kleine Auswahl meiner Projekte."
          : "A small preview of my projects."}
      </motion.h1>

      <div className="project-list">
        <a
          href="https://gianlucajahn.github.io/react-ecommerce-store/"
          className="ecom"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip upper ecom" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={"../../assets/images/preview11.PNG"}
          />
        </a>

        <a
          href="https://car-rental-x.vercel.app"
          className="car"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip upper car" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src="../../assets/images/Car.png"
          />
        </a>

        <a
          href="jotion-x.vercel.app"
          className="jotion lower"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip lower jotion" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src={"../../assets/images/Jotion Preview.png"}
          />
        </a>

        <a
          href="https://iphone-15-one.vercel.app"
          className="apple lower"
          target="_blank"
          onMouseDown={playAudio}
          onMouseUp={playAudio}
        >
          <div className="tooltip lower apple" />
          <motion.img
            whileHover={{ scale: 1.025 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="project-preview"
            src="../../assets/images/iPhone 15 Preview.png"
          />
        </a>
      </div>

      <a
        href="https://github.com/MahdiELHasra"
        target="_blank"
        className="more"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "Mehr anzeigen" : "Show More"}
      </a>
    </div>
  );
}
