import React from "react";
import fluffy from "../assets/gallery/fluffy.png";
function About() {
  return (
    <div id="about" className=" w-full bg-slate-100  h-full">
      <div className=" flex flex-col px-4 md:flex-row items-center justify-evenly">
        <img src={fluffy} />
        <div>
          <h1 className="md:text-4xl text-xl text-center font-extrabold mb-5">
            About the shelter<br></br>
            "Cozy House"
          </h1>
          <p className="md:text-xl text-lg py-3">
            Welcome to Cozy House, a sanctuary of love and care for our furry
            friends! Nestled amidst serene landscapes, our pet shelter is a
            haven for animals in need, providing a safe and comfortable
            environment for them to thrive. At Cozy House, we believe in the
            transformative power of compassion and understanding. Our dedicated
            team of animal enthusiasts and trained professionals work tirelessly
            to ensure the well-being of every resident, creating a nurturing
            space that feels like a true home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
