import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [          
          "Android Developer",
          "Mobile Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
