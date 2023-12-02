import React from "react";
import bowl from "../assets/gallery/Dogbowls.png";
import collar from "../assets/gallery/Dogcollar.png";
import food from "../assets/gallery/Dogfood.png";
import shampoo from "../assets/gallery/Dogshampoo.png";
import shelter from "../assets/gallery/Dogshelter.png";
import toys from "../assets/gallery/Dogtoys.png";
function Donation() {
  return (
    <div id="help" className="bg-white  w-full h-full">
      <div className="  flex flex-col items-center ">
        <h1 className="py-6 text-xl md:text-4xl font-bold text-center">
          How you Can Help our Shelter
        </h1>
        <div className="py-2 grid grid-cols-2 md:grid-cols-6 gap-10 ">
          <div className="text-center">
            
            <img src={food} width={100}/>
            <h2 className="font-bold mt-5">Dog Food </h2>
          </div>
         
          <div className="text-center">
            
            <img src={toys} width={100} />
            <h2 className="font-bold">Toys </h2>
          </div>

          <div className="text-center">
            
            <img src={bowl} width={100} />
            <h2 className="font-bold">Bowls and Cups </h2>
          </div>
          <div className=" text-center ">
            
            <img src={shampoo} width={90} />
            <h2 className="font-bold">Shampoos</h2>
          </div>
          
          <div className="text-center">
            
            <img src={collar} width={100} />
            <h2 className="font-bold">Collars/Leashes </h2>
          </div>
          <div className="text-center">
           
            <img src={shelter} width={100} /> 
            <h2 className="font-bold">Sleeping areas </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
