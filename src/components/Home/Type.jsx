import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Hi, I'm Subashun Vikash",
              "Software Engineer",
              "Full-Stack Developer",
              "Machine Learning Engineer",
              "AI/NLP Developer",
              "System Design Specialist"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
            pauseFor: 1500
          }}
        />
      )
}

export default Type