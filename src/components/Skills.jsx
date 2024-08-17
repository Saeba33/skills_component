"use client";

import React, { useState } from "react";
import skills from "@/data/skillsData";

const Skills = () => {
  const [hovered, setHovered] = useState(false);

  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 400) }px`,
    left: `${Math.floor(Math.random() * 200) }px`,
  });

  return (
    <div
      className="relative w-[20vw] h-[400px]  overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute w-full h-full flex flex-wrap items-center justify-center transition-all duration-500 ease-in-out ${
          hovered ? "grid grid-cols-3 gap-2" : ""
        }`}
        style={{
          gridTemplateRows: hovered
            ? `repeat(auto-fill, minmax(80px, 1fr))`
            : "none",
        }}
      >
        {skills.map((skill, index) => {
          const { top, left } = getRandomPosition();
          return (
            <div
              key={index}
              className={`flex items-center justify-center p-3 rounded-md shadow-md transition-transform duration-500 ease-in-out ${
                hovered
                  ? "transform rotate-0 translate-x-0 translate-y-0"
                  : "absolute"
              }`}
              style={{
                transform: hovered
                  ? "rotate(0deg) translate(0px, 0px)"
                  : `rotate(${skill.rotate}deg)`,
                top: hovered ? "auto" : top,
                left: hovered ? "auto" : left,
                position: hovered ? "relative" : "absolute",
              }}
            >
              {skill.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
