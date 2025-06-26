import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#323237] text-white px-6 lg:px-20 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-[#737d82]">aerpace</h1>
          <div className="flex flex-col gap-4 text-lg">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#737d82]">Solutions</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">aeVerse</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#737d82] ">Platform</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">aerDock</li>
            <li className="hover:text-gray-400 cursor-pointer">aerWing</li>
            <li className="hover:text-gray-400 cursor-pointer">aerCar</li>
            <li className="hover:text-gray-400 cursor-pointer">aerVolt</li>
            <li className="hover:text-gray-400 cursor-pointer">aerShield</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#737d82]">About Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Company</li>
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            <li className="hover:text-gray-400 cursor-pointer">Racers</li>
            <li className="hover:text-gray-400 cursor-pointer">News</li>
            <li className="hover:text-gray-400 cursor-pointer">#MakeTime</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Investor Realtion
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#737d82]">Get Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-[white] pt-6 text-center text-sm text-gray-400">
        © 2025 aerpace Industries Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
