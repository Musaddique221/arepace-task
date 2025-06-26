import React from "react";
import img from "../../assets/img-superwing-vm-bg-mobile.jpg"

const Hero3 = () => {
  return (
    <div className="flex bg-[#333238] lg:h-screen h-[300px] mt-32">
      <div
        className="w-[100%] bg-left bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
};

export default Hero3;
