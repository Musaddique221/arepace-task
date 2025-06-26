import React, { useState } from "react";
import image from "../../assets/hero-bg-home@2x.jpg";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-4 hover:bg-black">
        <h1 className="text-2xl font-semibold">aerpace</h1>

        <ul className="hidden lg:flex gap-10 text-md">
          <li>aeVerse</li>
          <li>aerDock</li>
          <li>aerWing</li>
          <li>aerCar</li>
          <li>aervolt</li>
          <li>aerShield</li>
          <li>Racers</li>
          <li>#MakeTime</li>
        </ul>

        <div className="lg:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>

        <div className="hidden lg:block">investors</div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 text-white absolute top-16 left-0 w-full z-10 px-6 py-4">
          <ul className="flex flex-col gap-4 text-md">
            <li>aeVerse</li>
            <li>aerDock</li>
            <li>aerWing</li>
            <li>aerCar</li>
            <li>aervolt</li>
            <li>aerShield</li>
            <li>Racers</li>
            <li>#MakeTime</li>
            <li>Investors</li>
          </ul>
        </div>
      )}

      <div className="flex items-center h-[calc(100vh-96px)] px-6 md:px-10">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl max-w-4xl">
          Everyday travel. Elevated.
        </h1>
      </div>
    </div>
  );
};

export default NavigationBar;
