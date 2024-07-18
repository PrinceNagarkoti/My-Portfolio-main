import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Web Developer", "Web Designer", "Software Developer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
      <style jsx>{`
        .TypeEffect span {
          --tw-text-opacity: 1;
          color: rgb(234 179 8 / var(--tw-text-opacity));
        }
      `}</style>
    </div>
  );
};

export default Type;
