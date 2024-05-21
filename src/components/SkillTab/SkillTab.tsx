import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import returnTabName from "../../utils/helpers/returnTabName";
import Image from "../Image/Image";
import "./SkillTab.scss";

export interface SkillTabProps {
  topic: string;
}

export default function SkillTab(props: SkillTabProps) {
  const { topic } = props;
  const [state, dispatch] = useContext(store);

  return (
    <motion.div
      className={`skill-tab-container ${
        state.darkmode ? "dark-card" : "light-card"
      }`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        type: "spring",
        bounce: 0.4,
        delay:
          topic === "libraries"
            ? 0.35
            : topic === "Other"
            ? 0.35
            : topic === "code"
            ? 0.65
            : 0.05,
      }}
    >
      <h3 className={`head ${state.darkmode ? "white" : ""}`}>
        {returnTabName(topic, state.language)}
      </h3>
      {topic === "languages" ? (
        <div className="skill-tab-list languages">
          {/* <Image source="python" name="Python" /> */}
          <Image source="javascript" name="JavaScript" />
          <Image source="python" name="Python" />
          {/* <Image source="PHP" name="PHP" /> */}
          <Image source="css" name="CSS" />
          <Image source="html" name="HTML" />
        </div>
      ) : null}
      {topic === "frameworks" ? (
        <div className="skill-tab-list">
          <Image source="react" name="React" />
          <Image source="tailwind" name="TailwindCSS" />
        </div>
      ) : null}
      {topic === "libraries" ? (
        <div className="skill-tab-list">
          <Image source="redux" name="Redux" />
          <Image source="Prisma" name="Prisma (ORM)" />
          <Image source="Shadcn" name="Shadcn" />
        </div>
      ) : null}
      {topic === "collaborative" ? (
        <div className="skill-tab-list ">
          <Image source="git" name="Git" />
          <Image source="github" name="GitHub" />
        </div>
      ) : null}
      {topic === "DB" ? (
        <div className="skill-tab-list">
          <Image source="MongoDb" name="mongoDB" />
          <Image source="MYSQL" name="MYSQL" />
        </div>
      ) : null}
      {topic === "code" ? (
        <div className="skill-tab-list one-item">
          <Image source="vscode" name="VSCode" />
        </div>
      ) : null}
      {topic === "Other" ? (
        <div className="skill-tab-list">
          <Image source="MSOFFICE" name="Microsoft Office" />
          <Image source="figma" name="Figma" />
        </div>
      ) : null}
    </motion.div>
  );
}
