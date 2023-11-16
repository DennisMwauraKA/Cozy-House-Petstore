import React from "react";
import puppy from "../assets/gallery/puppy.png";

function Home() {
  return (
    <div className="w-full h-full px-4 py-8 bg-gradient-to-b from-amber-900 to-amber-900  ">
      <div className="flex w-full h-full flex-col md:flex-row items-center justify-evenly">
        <div  className="  flex-col ">
          <p className="text-white text-2xl ">
            Not only people <br></br>need a House
          </p>
          <p>Animals like puppies are cute to lack a shelter</p>

          <button className="rounded-2xl bg-red-200 w-36 py-2 h-full">Make a Friend</button>
        </div>

        <img src={puppy} />
      </div>
    </div>
  );
}

export default Home;
