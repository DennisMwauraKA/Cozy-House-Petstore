import React from "react";
import fluffy from "../assets/gallery/fluffy.png";
import CardDetails from "./Card";

function Pets() {
  return (
    <div id="pets" className="bg-slate-300 w-full h-full">
      <div className="  flex flex-col  items-center ">
        <h1 className="py-2 md:py-6 text-center font-bold text-lg md:text-4xl md:font-bold ">Our Friends Who are Looking for a Home</h1>
        <div className="py-2 flex flex-col md:flex-row gap-4 px-4">
          <CardDetails />
        </div>
      </div>
    </div>
  );
}

export default Pets;
