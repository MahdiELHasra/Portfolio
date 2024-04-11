import React, { useContext } from "react";
import "./EndCards.scss";
import { motion } from "framer-motion";
import { store } from "../../App";

export default function EndCards() {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-cards">
      <div className={`left-card card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`clean ${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "Sauberer Code" : "Clean Code"}</h3>
        <img
          className="code"
          src={state.darkmode ? ("../../assets/images/cleancode_2.PNG") : ("../../assets/images/cleancode.PNG")}
        />
      </div>

      <div className={`right-card card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "Performance-Optimierung" : "Performance Optimization"}</h3>
        <p className={`clean ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>via Google Lighthouse</p>

        <div className="card-content">
          <motion.img
            className="performance-node perf"
            src={state.darkmode ? ("../../assets/images/performance_2.PNG") : ("../../assets/images/performance.PNG")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          />
          <motion.img
            className="performance-node acc"
            src={state.darkmode ? ("../../assets/images/accessibility_2.png") : ("../../assets/images/accessibility.png")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          />
          <motion.img
            className="performance-node best"
            src={state.darkmode ? ("../../assets/images/bestpractices_2.png") : ("../../assets/images/bestpractices.png")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />
          <motion.img
            className="performance-node seo"
            src={state.darkmode ? ("../../assets/images/seo_2.png") : ("../../assets/images/seo.png")}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
}
