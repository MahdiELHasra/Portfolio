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
            ? "Ich begann meine Reise, wie andere auch, mit den Grundlagen der Webentwicklung. HTML, CSS und JavaScript. Es war ich, mein verlässlicher Computer und eine endlose Neugier. Mit der Zeit wurde mir klar, dass Programmieren ein Abenteuer ist. Jetzt finde ich mich tiefer in TypeScript vor, während ich mich durch die Landschaft von React navigiere. Auf der Suche nach Bibliotheken erscheint jede wie ein verborgener Schatz, der darauf wartet, entdeckt zu werden. Für mich bedeutet Codieren nicht, auf dem neuesten Stand zu bleiben; es geht um die Aufregung der Erkundung und die Befriedigung, jeden Tag etwas Neues zu lernen. Welche Herausforderungen auch immer vor mir liegen, ich bin voll und ganz engagiert und bereit, sie mit Leidenschaft im Herzen und Eifer im Sinn zu meistern."
            : "I began my journey, like others starting with the basics of web development. HTML, CSS and JavaScript. It was me, my trusty computer and a ending curiosity. Over time I came to realize that coding is an adventure. Now I find myself delving deeper into TypeScript as I navigate the landscape of React. On the lookout for libraries each one feels like a hidden gem waiting to be uncovered. For me coding isn't about staying current; it's about the excitement of exploration and the satisfaction of learning something every day. Whatever challenges lie ahead I'm fully committed and prepared to face them with passion, in my heart and eagerness in my mind."}
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
