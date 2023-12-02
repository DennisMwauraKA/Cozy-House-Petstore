import React from "react";
import puppy from "../assets/gallery/puppy.png";

function Home() {
  return (
    <div className="w-full h-full px-4 py-8 bg-gradient-to-b from-amber-600 to-amber-900  ">
      <div className="flex w-full h-full flex-col md:flex-row items-center justify-evenly">
        <div className="  flex-col ">
          <p className="text-white text-2xl md:text-4xl font-extrabold ">
            Not only people <br></br>need a House, <br></br>Dogs also need one. 
          </p>
         
        </div>

        <img src={puppy} />
      </div>
    </div>
  );
}

export default Home;
