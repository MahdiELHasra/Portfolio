import React, { useContext, useRef } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import "./IntroCards.scss";

export default function IntroCards() {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section
        className={`left-intro big-card ${
          state.darkmode ? "dark-card" : "light-card"
        }`}
      >
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>
          {state.language === "english"
            ? "Angehender Entwickler an der Schnittstelle von Design und Code."
            : "Prospective developer at the intersection between design and code"}
        </h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>
          {state.language === "english"
            ? "Angefangen mit HTML, CSS und JavaScript habe ich mir eigenständig das Programmieren beigebracht. 2023 habe ich eine zweijährige Ausbildung abgeschlossen, die mir Kenntnisse in Python, Tailwind CSS, MySQL und MongoDB vermittelt hat. Auch jenseits von Vanilla JavaScript gibt es vieles zu entdecken. React.js ist eine Bibliothek, mit der ich gerne arbeite."
            : "Starting with HTML, CSS and JavaScript, I taught myself programming on my own. In 2023 I finished a two year training course that equipped me with skills, in Python Tailwind CSS, MySQL and MongoDB. However, nowadays there is a lot to discover far beyond vanilla JavaScript. React.js is also a library I enjoy working with."}
        </p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num green">21</h2>
            <h2 className="sign green-sign"></h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {state.language === "english" ? "Jahre Alt" : "Years Old"}
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num place blue">
              {/* {state.language === "english" ? "1. Platz" : "1st place"} */}
              470
            </h2>
            <h2 className="sign blue-sign">+</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {state.language === "english"
              ? "Commits auf GitHub"
              : "Commits on GitHub"}

            {/* {state.language === "english"
              ? `meistgeliketes Projekt auf "The Odin Project"`
              : `most liked project thread of "The Odin Project"`} */}
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num purple">5</h2>
            <h2 className="sign purple-sign">+</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {state.language === "english" ? "Projekte" : "Projects"}
          </h4>
        </motion.div>

        <motion.div
          className={`small-card ${
            state.darkmode ? "dark-card" : "light-card"
          }`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-top">
            <h2 className="num red">100</h2>
            <h2 className="sign percent red-sign">%</h2>
          </div>
          <h4
            className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
          >
            {state.language === "english" ? "Leidenschaft" : "passion"}
          </h4>
        </motion.div>
      </section>
    </div>
  );
}
