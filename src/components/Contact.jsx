import React from "react";
import fluffy from "../assets/gallery/fluffy.png";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { HiMiniArrowUpCircle } from "react-icons/hi2";
function Contact() {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="contact"
      className=" w-full bg-gradient-to-b  from-amber-600  to-amber-900  "
    >
      <div className=" items-center px-3 justify-items-start md:justify-items-center w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h1 className="text-xl text-white mt-10 md:mt-0 font-bold">Shop Address</h1>

          <div className="flex gap-4 items-center">
            <MdOutlineLocationOn size={30} color="white" />
            <p className="font-bold text-white">
              Monrovia Street, Wamalima Building,Shop 404.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <MdOutlineLocationOn size={30} color="white" />
            <p className="text-white font-bold">Kiambu Rd, KIST Building, Shop 020.</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl text-white font-bold">Contact </h1>
          <div className="flex gap-4 items-center">
            <GiRotaryPhone size={30} color="white" />
            <p className=" text-white font-bold">+254 791170344</p>
          </div>
          <div className="flex gap-4 items-center">
            <MdOutlineMailOutline size={30} color="white"/>
            <p className="text-white font-bold">cozypets@co.ke</p>
          </div>
        </div>
        <div>
          <img src={fluffy} className="w-44 h-full" />
        </div>
        <div
          onClick={ScrollToTop}
          className="fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700"
        >
          <HiMiniArrowUpCircle size={20} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
