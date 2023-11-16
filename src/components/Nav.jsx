import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Nav() {
  const [menu, setMenu] = useState(false);
  const nav = [
    {
      id: "about",
      title: "About the Shelter",
    },
    {
      id: "pets",
      title: "Our Pets",
    },
    {
      id: "help",
      title: "To help the Shelter",
    },
    {
      id: "contact",
      title: "Contacts",
    },
  ];
  return (
    <div className="px-4 bg-gradient-to-b from-amber-900 to-amber-900 w-full h-full items-center py-4 gap-10   flex justify-between md:justify-evenly ">
      <div>
        <h1 className="text-white  text-2xl">Cozy House</h1>
        <p className="text-white">Shelter for pets in Nairobi</p>
      </div>
      <ul className="hidden md:flex  text-white gap-9 font-bold">
        {nav.map((menu) => (
          <li key={menu.id} className="cursor-pointer hover:scale-105  duration-300">
            {menu.title}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {menu ? <FaTimes color="white" /> : <FaBars color="white" />}
      </div>

      {menu && (
        <ul className="flex flex-col justify-start  absolute  top-20 md:hidden bg-gradient-to-b from-black to-gray-800 w-full h-screen ">
          {nav.map((menu) => (
            <li key={menu.id} className="  px-4 text-2xl py-6  cursor-pointer text-white">
              {menu.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Nav;
